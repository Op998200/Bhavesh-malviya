document.addEventListener("DOMContentLoaded", () => {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll("#nav-menu a");

  const isMobile = () => window.innerWidth <= 600;

  const toggleMenu = () => {
    if (isMobile()) {
      navMenu.classList.toggle("show");
    }
  };

  const closeMenu = () => {
    if (isMobile()) {
      navMenu.classList.remove("show");
    }
  };

  const handleOutsideClick = (event) => {
    if (
      isMobile() &&
      !navMenu.contains(event.target) &&
      !hamburgerBtn.contains(event.target)
    ) {
      closeMenu();
    }
  };

  hamburgerBtn.addEventListener("click", toggleMenu);
  window.addEventListener("resize", closeMenu);
  document.addEventListener("click", handleOutsideClick);

  // Close menu when clicking any link
  navLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  // Ensure correct state on load
  closeMenu();
});
