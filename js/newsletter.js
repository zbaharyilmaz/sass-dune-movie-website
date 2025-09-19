// Newsletter functionality for Dune Movie Website

// EmailJS configuration (placeholder values - replace with actual values)
// Note: EmailJS is loaded via CDN in index.html and attached to window.emailjs
const EMAILJS_CONFIG = {
  PUBLIC_KEY: "YOUR_PUBLIC_KEY",
  SERVICE_ID: "YOUR_SERVICE_ID",
  TEMPLATE_ID: "YOUR_TEMPLATE_ID",
};

// Initialize EmailJS
function initEmailJS() {
  if (typeof window !== "undefined" && window["emailjs"]) {
    window["emailjs"].init(EMAILJS_CONFIG.PUBLIC_KEY);
  }
}

// Email subscription functionality
function handleEmailSubscription(event) {
  event.preventDefault();

  const form = event.target;
  const email = form.querySelector('input[type="email"]').value;
  const name = form.querySelector('input[type="text"]').value;

  // EmailJS template parameters
  const templateParams = {
    to_email: "your-email@example.com", // Your email
    from_name: name || "Anonymous",
    from_email: email,
    message: `New subscription from Dune website:\nName: ${name}\nEmail: ${email}`,
    subject: "New Dune Newsletter Subscription",
  };

  // Send email
  if (typeof window !== "undefined" && window["emailjs"]) {
    window["emailjs"]
      .send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      )
      .then(
        function (response) {
          showNotification(
            "Successfully subscribed! Check your email for confirmation.",
            "success"
          );
          form.reset();
        },
        function (error) {
          showNotification("Subscription failed. Please try again.", "error");
          console.error("EmailJS error:", error);
        }
      );
  } else {
    showNotification(
      "Email service not available. Please try again later.",
      "error"
    );
  }
}

// Notification system
function showNotification(message, type) {
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.textContent = message;

  // Add styles
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 1rem 2rem;
    border-radius: 8px;
    color: white;
    font-weight: 600;
    z-index: 10000;
    animation: slideIn 0.3s ease;
    ${type === "success" ? "background: #4CAF50;" : "background: #f44336;"}
  `;

  document.body.appendChild(notification);

  // Remove after 5 seconds
  setTimeout(() => {
    notification.style.animation = "slideOut 0.3s ease";
    setTimeout(() => notification.remove(), 300);
  }, 5000);
}

// Add CSS animations
function addNotificationStyles() {
  const style = document.createElement("style");
  style.textContent = `
    @keyframes slideIn {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
      from { transform: translateX(0); opacity: 1; }
      to { transform: translateX(100%); opacity: 0; }
    }
  `;
  document.head.appendChild(style);
}

// Initialize newsletter functionality
function initNewsletter() {
  addNotificationStyles();

  // Main subscription form
  const mainForm = document.querySelector("#Sign-up .form");
  if (mainForm) {
    mainForm.addEventListener("submit", handleEmailSubscription);
  }

  // Contact newsletter form (removed - not used in HTML)
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  initEmailJS();
  initNewsletter();
});
