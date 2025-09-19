import { useState } from "react";
import emailjs from "@emailjs/browser";

// EmailJS configuration (placeholder values - replace with actual values)
const EMAILJS_CONFIG = {
  PUBLIC_KEY: "YOUR_PUBLIC_KEY",
  SERVICE_ID: "YOUR_SERVICE_ID",
  TEMPLATE_ID: "YOUR_TEMPLATE_ID",
};

export interface NewsletterFormData {
  email: string;
  name: string;
  zipcode: string;
  country: string;
}

export interface NotificationState {
  message: string;
  type: "success" | "error";
  show: boolean;
}

export const useNewsletter = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState<NotificationState>({
    message: "",
    type: "success",
    show: false,
  });

  // Initialize EmailJS
  const initEmailJS = () => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  };

  // Show notification
  const showNotification = (message: string, type: "success" | "error") => {
    setNotification({ message, type, show: true });

    // Hide notification after 5 seconds
    setTimeout(() => {
      setNotification((prev) => ({ ...prev, show: false }));
    }, 5000);
  };

  // Handle email subscription
  const handleEmailSubscription = async (formData: NewsletterFormData) => {
    setIsLoading(true);

    try {
      // EmailJS template parameters
      const templateParams = {
        to_email: "your-email@example.com", // Your email
        from_name: formData.name || "Anonymous",
        from_email: formData.email,
        message: `New subscription from Dune website:\nName: ${formData.name}\nEmail: ${formData.email}`,
        subject: "New Dune Newsletter Subscription",
      };

      // Send email
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      );

      showNotification(
        "Successfully subscribed! Check your email for confirmation.",
        "success"
      );
    } catch (error) {
      console.error("EmailJS error:", error);
      showNotification("Subscription failed. Please try again.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    notification,
    initEmailJS,
    handleEmailSubscription,
    showNotification,
  };
};
