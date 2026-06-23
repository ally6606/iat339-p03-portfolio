// Mobile navigation toggle — applied to all pages via defer
// IIFE keeps navigation behavior scoped and avoids global variables:
// https://www.w3schools.com/js/js_function_iife.asp
(function () {
  const navToggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-site-nav]");

  if (!navToggle || !nav) {
    return;
  }

  // Syncs aria-expanded, .is-open on the nav, and nav-open on body
  function setMenu(open) {
    navToggle.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("is-open", open);
    document.body.classList.toggle("nav-open", open);
  }

  // Open or close the nav when the toggle button is clicked
  navToggle.addEventListener("click", function () {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    setMenu(!isOpen);
  });

  // Close the nav when a nav link is followed
  nav.addEventListener("click", function (event) {
    if (event.target instanceof HTMLAnchorElement) {
      setMenu(false);
    }
  });

  // Close the nav and return focus to the toggle button when Escape is pressed
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      setMenu(false);
      navToggle.focus();
    }
  });
})();
