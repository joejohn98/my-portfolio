"use server";

import React from "react";
import { Resend } from "resend";
import { ContactFormData, contactFormSchema } from "../validation";
import { EmailTemplate } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: ContactFormData) => {
  const rawData = {
    name: formData.name,
    email: formData.email,
    message: formData.message,
  };

  const result = contactFormSchema.safeParse(rawData);

  if (!result.success) {
    return {
      success: false,
      error: result.error.issues[0].message || "Invalid data",
    };
  }

  const { name, email, message } = result.data;

  try {
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "joejohn1021@gmail.com",
      subject: `New message from ${name}`,
      react: React.createElement(EmailTemplate, { name, email, message }),
    });

    if (error) {
      console.error("Resend API error:", error);
      return {
        success: false,
        error: error.message || "Failed to send email",
      };
    }

    console.log("Email sent successfully:", data);
    return {
      success: true,
      message: "Email sent successfully",
    };
  } catch (error) {
    console.error("Failed to send email:", error);
    return {
      success: false,
      error: "Failed to send email",
    };
  }
};
