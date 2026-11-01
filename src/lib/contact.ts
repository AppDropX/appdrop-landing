import { API_BASE_URL } from "@/lib/api";

// Contract: POST /api/public/contact-submissions (appdrop-be, TASK-028).
export const CONTACT_SUBMISSIONS_URL = `${API_BASE_URL}/api/public/contact-submissions`;

// Server-side limits (TASK-028). Keep client maxLength attributes in sync.
export const CONTACT_LIMITS = {
  name: 200,
  email: 254,
  companyName: 200,
  phone: 40,
  subject: 200,
  message: 5000,
} as const;

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Mirrors the server phone rule: digits, spaces, + - ( ) . only, at least 6 digits.
export const isValidPhone = (phone: string): boolean =>
  /^[0-9 +\-().]+$/.test(phone) && (phone.match(/\d/g)?.length ?? 0) >= 6;

// Requests that take longer than this are aborted and treated as a network error.
export const REQUEST_TIMEOUT_MS = 15000;

const timeoutSignal = (ms: number): AbortSignal | undefined => {
  if (typeof AbortSignal !== "undefined" && typeof AbortSignal.timeout === "function") {
    return AbortSignal.timeout(ms);
  }
  if (typeof AbortController !== "undefined") {
    const controller = new AbortController();
    setTimeout(() => controller.abort(), ms);
    return controller.signal;
  }
  return undefined;
};

export const RATE_LIMIT_MESSAGE =
  "Too many attempts, please try again in a few minutes";
export const GENERIC_ERROR_MESSAGE =
  "Something went wrong. Please try again.";

export type ContactPayload =
  | {
      kind: "demo_request";
      name: string;
      email: string;
      phone: string;
      company_name: string;
      source_page: string;
      website: string;
    }
  | {
      kind: "contact_message";
      name: string;
      email: string;
      subject: string;
      message: string;
      source_page: string;
      website: string;
    };

export type ContactResult =
  | { status: "success" }
  | { status: "validation"; errors: Record<string, string>; message?: string }
  | { status: "rate_limited"; retryAfterSeconds?: number }
  | { status: "error"; message?: string };

const readJson = async (response: Response): Promise<unknown> => {
  try {
    return await response.json();
  } catch {
    return undefined;
  }
};

export async function submitContact(
  payload: ContactPayload,
): Promise<ContactResult> {
  let response: Response;
  try {
    response = await fetch(CONTACT_SUBMISSIONS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: timeoutSignal(REQUEST_TIMEOUT_MS),
    });
  } catch {
    // Network failure, CORS failure, or timeout abort.
    return { status: "error" };
  }

  if (response.status === 201) {
    return { status: "success" };
  }

  if (response.status === 429) {
    const retryAfter = Number(response.headers.get("Retry-After"));
    return {
      status: "rate_limited",
      retryAfterSeconds: Number.isFinite(retryAfter) && retryAfter > 0 ? retryAfter : undefined,
    };
  }

  const body = (await readJson(response)) as
    | { message?: unknown; errors?: unknown }
    | undefined;
  const message = typeof body?.message === "string" ? body.message : undefined;

  if (response.status === 400) {
    const errors: Record<string, string> = {};
    if (body?.errors && typeof body.errors === "object") {
      for (const [field, value] of Object.entries(body.errors as Record<string, unknown>)) {
        if (typeof value === "string") errors[field] = value;
      }
    }
    return { status: "validation", errors, message };
  }

  return { status: "error", message };
}
