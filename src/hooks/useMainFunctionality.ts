import { useEffect } from "react";

export const useMainFunctionality = () => {
  useEffect(() => {
    // Mobile navigation toggle
    const navBtn = document.getElementById("nav-btn");
    const navigation = document.getElementById("Navigation");

    const toggleMobileNav = () => {
      if (navigation) {
        navigation.classList.toggle("mobile-nav-active");
      }
    };

    if (navBtn) {
      navBtn.addEventListener("click", toggleMobileNav);
    }

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      const href = target.getAttribute("href");

      if (href && href.startsWith("#")) {
        e.preventDefault();
        const targetElement = document.querySelector(href);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    anchorLinks.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll);
    });

    // Cleanup function
    return () => {
      if (navBtn) {
        navBtn.removeEventListener("click", toggleMobileNav);
      }

      anchorLinks.forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, []);
};
