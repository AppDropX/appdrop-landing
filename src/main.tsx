import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Route chunks are lazy-loaded. If one fails to load (a previous deploy's
// chunk is gone, or the request dropped), reload once to pick up the current
// build. The timestamp guard allows at most one automatic reload per 10s, so
// it can never loop; if the reload doesn't help, the error surfaces to
// RouteErrorBoundary, which shows a manual reload prompt.
const CHUNK_RELOAD_KEY = "appdrop:chunk-reload-at";
const CHUNK_RELOAD_WINDOW_MS = 10_000;

window.addEventListener("vite:preloadError", (event) => {
  try {
    const last = Number(sessionStorage.getItem(CHUNK_RELOAD_KEY) ?? 0);
    if (Date.now() - last < CHUNK_RELOAD_WINDOW_MS) return; // just retried: let the error surface
    sessionStorage.setItem(CHUNK_RELOAD_KEY, String(Date.now()));
  } catch {
    return; // storage unavailable: no loop guard, so don't auto-reload
  }
  event.preventDefault();
  window.location.reload();
});

createRoot(document.getElementById("root")!).render(<App />);
