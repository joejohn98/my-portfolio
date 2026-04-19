"use client";

import { useEffect } from "react";
import { initEmailJS } from "@/utils/emailjs";
import { EMAILJS_CONFIG } from "@/utils/constants";

export default function EmailJsInit() {
  useEffect(() => {
    if (EMAILJS_CONFIG.PUBLIC_KEY) {
      initEmailJS(EMAILJS_CONFIG.PUBLIC_KEY);
    } else {
      console.error("EMAILJS_CONFIG.PUBLIC_KEY is undefined.");
    }
  }, []);
  return null;
}
