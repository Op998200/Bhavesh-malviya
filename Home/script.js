document.addEventListener("DOMContentLoaded", () => {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll("#nav-menu a");

  const isMobile = () => window.innerWidth <= 700;

  const toggleMenu = () => {
    if (isMobile()) {
      navMenu.classList.toggle("show");
      hamburgerBtn.classList.toggle("open");
    }
  };

  const closeMenu = () => {
    if (isMobile()) {
      navMenu.classList.remove("show");
      hamburgerBtn.classList.remove("open");
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

  navLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  closeMenu(); // on load
});
