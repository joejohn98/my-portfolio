"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Mail, User, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ContactFormData, contactFormSchema } from "@/lib/validation";
import Button from "./Button";
import { sendEmail } from "@/lib/actions/sendEmail";

const ContactForm: NextPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const result = await sendEmail(data);
      if (result.success) {
        reset();
      } else {
        setError("root", {
          message: result.error,
        });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Failed to send email";
      setError("root", {
        message: errorMessage,
      });
    }
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 max-w-md mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatePresence>
        {isSubmitSuccessful && (
          <motion.div
            className="p-4 mb-4 text-sm rounded-lg bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            Thank you! Your message has been sent successfully.
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Name
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <User size={18} className="text-gray-500 dark:text-gray-400" />
          </div>
          <input
            type="text"
            id="name"
            {...register("name")}
            className={`pl-10 block w-full rounded-lg border ${
              errors.name
                ? "border-red-500 dark:border-red-500"
                : "border-gray-300 dark:border-gray-600"
            } bg-white dark:bg-[#020817] p-2.5 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-1 focus:outline-none`}
            placeholder="Your name"
          />
        </div>
        <AnimatePresence>
          {errors.name && (
            <motion.p
              className="mt-1 text-sm text-red-600 dark:text-red-400"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              {errors.name.message}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Email
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail size={18} className="text-gray-500 dark:text-gray-400" />
          </div>
          <input
            type="email"
            id="email"
            {...register("email")}
            className={`pl-10 block w-full rounded-lg border ${
              errors.email
                ? "border-red-500 dark:border-red-500"
                : "border-gray-300 dark:border-gray-600"
            } bg-white dark:bg-[#020817] p-2.5 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-1 focus:outline-none`}
            placeholder="your.email@example.com"
          />
        </div>
        <AnimatePresence>
          {errors.email && (
            <motion.p
              className="mt-1 text-sm text-red-600 dark:text-red-400"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              {errors.email.message}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Message
        </label>
        <div className="relative">
          <div className="absolute top-3 left-3 pointer-events-none">
            <MessageSquare
              size={18}
              className="text-gray-500 dark:text-gray-400"
            />
          </div>
          <textarea
            id="message"
            {...register("message")}
            rows={5}
            className={`pl-10 block w-full rounded-lg border ${
              errors.message
                ? "border-red-500 dark:border-red-500"
                : "border-gray-300 dark:border-gray-600"
            } bg-white dark:bg-[#020817] p-2.5 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-1 focus:outline-none`}
            placeholder="Your message..."
          />
        </div>
        <AnimatePresence>
          {errors.message && (
            <motion.p
              className="mt-1 text-sm text-red-600 dark:text-red-400"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              {errors.message.message}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Button
          type="submit"
          variant="primary"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            isMounted ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Sending...
              </>
            ) : (
              "Sending..."
            )
          ) : (
            "Send Message"
          )}
        </Button>
      </motion.div>
    </motion.form>
  );
};

export default ContactForm;
