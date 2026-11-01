import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import HoneypotField from "@/components/HoneypotField";
import {
  CONTACT_LIMITS,
  EMAIL_PATTERN,
  GENERIC_ERROR_MESSAGE,
  RATE_LIMIT_MESSAGE,
  isValidPhone,
  submitContact,
} from "@/lib/contact";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
}

const initialFormData: FormData = {
  fullName: "",
  email: "",
  phone: "",
  companyName: "",
};

// Server field name (TASK-028 contract) -> form field.
const serverFieldMap: Record<string, keyof FormData> = {
  name: "fullName",
  email: "email",
  phone: "phone",
  company_name: "companyName",
};

const WaitlistModal = ({ isOpen, onClose }: WaitlistModalProps) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [website, setWebsite] = useState("");

  const handleClose = useCallback(() => {
    onClose();
    setTimeout(() => {
      setFormData(initialFormData);
      setIsSubmitted(false);
      setErrors({});
      setFormError(null);
      setWebsite("");
    }, 300);
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;

    document.body.classList.add("scroll-locked");
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("scroll-locked");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, handleClose]);

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.fullName.trim())
      newErrors.fullName = "Full name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!EMAIL_PATTERN.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Contact number is required";
    } else if (!isValidPhone(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid contact number";
    }

    if (!formData.companyName.trim())
      newErrors.companyName = "Company name is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setFormError(null);

    const result = await submitContact({
      kind: "demo_request",
      name: formData.fullName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      company_name: formData.companyName.trim(),
      source_page: window.location.pathname.slice(0, 200),
      website,
    });

    setIsSubmitting(false);

    switch (result.status) {
      case "success":
        setIsSubmitted(true);
        break;
      case "validation": {
        const fieldErrors: Partial<FormData> = {};
        let unmapped = false;
        for (const [field, message] of Object.entries(result.errors)) {
          const formField = serverFieldMap[field];
          if (formField) fieldErrors[formField] = message;
          else unmapped = true;
        }
        setErrors(fieldErrors);
        if (unmapped || Object.keys(fieldErrors).length === 0) {
          setFormError("Please check your details and try again.");
        }
        break;
      }
      case "rate_limited":
        setFormError(RATE_LIMIT_MESSAGE);
        break;
      default:
        setFormError(GENERIC_ERROR_MESSAGE);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((p) => ({ ...p, [field]: value }));
    if (errors[field]) {
      setErrors((p) => ({ ...p, [field]: undefined }));
    }
    if (formError) setFormError(null);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-[60] bg-foreground/30 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-0 sm:p-4 pointer-events-none"
          >
            <div className="w-full sm:max-w-lg pointer-events-auto">
              <div className="relative bg-card rounded-t-3xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl border max-h-[90dvh] overflow-y-auto">
                <button
                  type="button"
                  onClick={handleClose}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 min-h-11 min-w-11 inline-flex items-center justify-center rounded-full hover:bg-muted"
                  aria-label="Close"
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>

                {!isSubmitted ? (
                  <>
                    <div className="text-center mb-5 sm:mb-6 pr-8">
                      <h3 className="text-xl sm:text-2xl font-bold mb-2">
                        Book Demo
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground">
                        See AppDrop Builder in action and plan your Shopify mobile app workflow.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="relative space-y-4" noValidate>
                      <HoneypotField value={website} onChange={setWebsite} />
                      <div>
                        <Label>Full Name *</Label>
                        <Input
                          value={formData.fullName}
                          maxLength={CONTACT_LIMITS.name}
                          onChange={(e) =>
                            handleInputChange("fullName", e.target.value)
                          }
                        />
                        {errors.fullName && (
                          <p className="text-xs text-destructive">
                            {errors.fullName}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label>Email *</Label>
                        <Input
                          value={formData.email}
                          maxLength={CONTACT_LIMITS.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                        />
                        {errors.email && (
                          <p className="text-xs text-destructive">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label>Contact Number *</Label>
                        <Input
                          value={formData.phone}
                          maxLength={CONTACT_LIMITS.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                        />
                        {errors.phone && (
                          <p className="text-xs text-destructive">
                            {errors.phone}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label>Company Name *</Label>
                        <Input
                          value={formData.companyName}
                          maxLength={CONTACT_LIMITS.companyName}
                          onChange={(e) =>
                            handleInputChange("companyName", e.target.value)
                          }
                        />
                        {errors.companyName && (
                          <p className="text-xs text-destructive">
                            {errors.companyName}
                          </p>
                        )}
                      </div>

                      {formError && (
                        <p className="text-sm text-destructive text-center" role="alert">
                          {formError}
                        </p>
                      )}

                      <Button
                        type="submit"
                        variant="hero"
                        size="lg"
                        className="w-full rounded-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="animate-spin mr-2" />
                            Submitting…
                          </>
                        ) : (
                          "Book Demo"
                        )}
                      </Button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-6">
                    <CheckCircle className="w-12 h-12 mx-auto text-accent mb-4" />
                    <h3 className="text-xl sm:text-2xl font-bold">
                      You're on the list!
                    </h3>
                    <Button className="mt-6" onClick={handleClose}>
                      Close
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default WaitlistModal;
