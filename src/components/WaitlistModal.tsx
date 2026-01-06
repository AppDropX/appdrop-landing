import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyXWp1wuYN5Hz7qIJASI2-dPr4e4wSVe6bkaI0jxNVF5XI03FMKJ8PCt_3Ku0NvshNgHw/exec";

const WaitlistModal = ({ isOpen, onClose }: WaitlistModalProps) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.fullName.trim())
      newErrors.fullName = "Full name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim())
      newErrors.phone = "Contact number is required";

    if (!formData.companyName.trim())
      newErrors.companyName = "Company name is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const body = new URLSearchParams({
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        companyName: formData.companyName,
      });

      await fetch(SCRIPT_URL, {
        method: "POST",
        body, // ❗ no headers → no CORS preflight
      });

      setIsSubmitted(true);
    } catch (err) {
      console.error("Failed to submit waitlist", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setFormData(initialFormData);
      setIsSubmitted(false);
      setErrors({});
    }, 300);
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((p) => ({ ...p, [field]: value }));
    if (errors[field]) {
      setErrors((p) => ({ ...p, [field]: undefined }));
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="w-full max-w-lg">
              <div className="relative bg-card rounded-3xl p-8 shadow-2xl border">
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted"
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>

                {!isSubmitted ? (
                  <>
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold mb-2">
                        Join the Waitlist
                      </h3>
                      <p className="text-muted-foreground">
                        Be the first to launch your Shopify store as a native app.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Label>Full Name *</Label>
                        <Input
                          value={formData.fullName}
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

                      <Button
                        type="submit"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="animate-spin mr-2" />
                            Joining…
                          </>
                        ) : (
                          "Join the Waitlist"
                        )}
                      </Button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-6">
                    <CheckCircle className="w-12 h-12 mx-auto text-accent mb-4" />
                    <h3 className="text-2xl font-bold">
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
