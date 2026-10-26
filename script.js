(() => {
  "use strict";

  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#site-nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
      });
    });
  }

  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();

  const serviceSelect = document.querySelector("#service");
  document.querySelectorAll("[data-service]").forEach((link) => {
    link.addEventListener("click", () => {
      if (serviceSelect) serviceSelect.value = link.dataset.service || "";
    });
  });

  const form = document.querySelector("#quote-form");
  const status = document.querySelector("#form-status");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = document.querySelector("#name").value.trim();
      const service = document.querySelector("#service").value;
      const details = document.querySelector("#details").value.trim();

      if (!name || !service) {
        if (status) status.textContent = "Please add your name and choose a service.";
        return;
      }

      const message = [
        "Hello Design Express, I would like a quote.",
        "",
        "Name: " + name,
        "Service: " + service,
        details ? "Project details: " + details : ""
      ].filter(Boolean).join("\n");

      const whatsappUrl = "https://wa.me/919527614174?text=" + encodeURIComponent(message);
      if (status) status.textContent = "Opening WhatsApp with your enquiry…";
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    });
  }
})();
