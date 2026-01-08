// Utilities: date, greeting, year
(function initBasics() {
  const now = new Date();
  const hour = now.getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
  const greetingEl = document.getElementById("dynamic-greeting");
  const dateEl = document.getElementById("today-date");
  const yearEl = document.getElementById("year");

  if (greetingEl) greetingEl.textContent = greeting;
  if (dateEl) {
    dateEl.textContent = now.toLocaleDateString(undefined, { weekday: "long", year: "numeric", month: "long", day: "numeric" });
    dateEl.setAttribute("datetime", now.toISOString().split("T")[0]);
  }
  if (yearEl) yearEl.textContent = String(now.getFullYear());
})();

// Theme toggle: persists in localStorage
(function initThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) document.documentElement.setAttribute("data-theme", savedTheme);

  if (toggleBtn) {
    const apply = (theme) => {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
      toggleBtn.textContent = theme === "dark" ? "☀️" : "🌙";
      toggleBtn.setAttribute("aria-pressed", theme === "dark");
    };
    // Set initial icon
    const initialTheme = document.documentElement.getAttribute("data-theme") || "light";
    apply(initialTheme);

    toggleBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "light";
      apply(current === "light" ? "dark" : "light");
    });
  }
})();

// Cart: in-memory count + localStorage
(function initCart() {
  const countEl = document.getElementById("cart-count");
  const stored = JSON.parse(localStorage.getItem("cart") || "[]");
  let cart = Array.isArray(stored) ? stored : [];

  const updateCount = () => {
    if (countEl) countEl.textContent = String(cart.length);
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  updateCount();

  document.querySelectorAll(".add-to-cart").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = { name: btn.dataset.name, price: Number(btn.dataset.price) };
      cart.push(item);
      updateCount();
      btn.textContent = "Added ✓";
      setTimeout(() => (btn.textContent = "Add to Cart"), 1000);
    });
  });
})();

// Contact form validation
(function initFormValidation() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const nameEl = document.getElementById("name");
  const emailEl = document.getElementById("email");
  const msgEl = document.getElementById("message");
  const nameErr = document.getElementById("name-error");
  const emailErr = document.getElementById("email-error");
  const msgErr = document.getElementById("message-error");
  const statusEl = document.getElementById("form-status");

  const validateEmail = (val) => /\S+@\S+\.\S+/.test(val); // basic check: contains @ and dot

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    if (!nameEl.value.trim()) { nameErr.textContent = "Please enter your name."; valid = false; } else { nameErr.textContent = ""; }
    if (!emailEl.value.trim()) { emailErr.textContent = "Please enter your email."; valid = false; }
    else if (!validateEmail(emailEl.value.trim())) { emailErr.textContent = "Please enter a valid email (must contain @)."; valid = false; }
    else { emailErr.textContent = ""; }
    if (!msgEl.value.trim()) { msgErr.textContent = "Please enter a message."; valid = false; } else { msgErr.textContent = ""; }

    if (valid) {
      statusEl.textContent = "Thanks! Your message has been sent.";
      form.reset();
    } else {
      statusEl.textContent = "Please fix the highlighted fields.";
    }
  });
})();