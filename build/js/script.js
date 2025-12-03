// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobileNav");
  const closeNav = document.getElementById("closeNav");

  // Open mobile nav
  if (hamburger && mobileNav) {
    hamburger.addEventListener("click", () => {
      mobileNav.classList.remove("hidden");
    });
  }

  // Close mobile nav
  if (closeNav && mobileNav) {
    closeNav.addEventListener("click", () => {
      mobileNav.classList.add("hidden");
    });
  }

  // Optional: close mobile nav when clicking outside menu
  document.addEventListener("click", (e) => {
    if (!mobileNav.contains(e.target) && !hamburger.contains(e.target)) {
      mobileNav.classList.add("hidden");
    }
  });
});
