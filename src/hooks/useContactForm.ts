import { useState } from "react";
import type { ContactFormData } from "../types";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG, FORM_VALIDATION } from "../utils/constants";

export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !FORM_VALIDATION.EMAIL_REGEX.test(formData.email)
    ) {
      newErrors.email = "Email address is invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (errors[name as keyof ContactFormData]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      try {
        const response = await emailjs.send(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.TEMPLATE_ID,
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }
        );

        console.log("SUCCESS!", response.status, response.text);
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } catch (err) {
        console.error("FAILED...", err);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return {
    formData,
    errors,
    isSubmitting,
    submitSuccess,
    handleChange,
    handleSubmit,
  };
};
