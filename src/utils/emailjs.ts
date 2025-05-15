import emailjs from "@emailjs/browser";

export const initEmailJS = (userId: string) => {
  emailjs.init(userId);
};