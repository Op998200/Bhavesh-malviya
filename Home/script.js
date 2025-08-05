function myFunction() {
  var navMenu = document.getElementById("nav-menu");
  var isMobile = window.innerWidth <= 600;
  
  if (!isMobile) {
    // Ensure normal nav is shown on desktop
    navMenu.classList.remove("show");
    navMenu.style.display = "flex";
    return;
  }
  
  // Toggle mobile menu
  if (navMenu.classList.contains("show")) {
    navMenu.classList.remove("show");
  } else {
    navMenu.classList.add("show");
  }
}

// Ensure proper display on window resize
window.addEventListener('resize', function() {
  var navMenu = document.getElementById("nav-menu");
  var isMobile = window.innerWidth <= 600;
  
  if (!isMobile) {
    // Desktop view - ensure normal nav is visible
    navMenu.classList.remove("show");
    navMenu.style.display = "flex";
  } else {
    // Mobile view - ensure menu is hidden by default
    navMenu.classList.remove("show");
  }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  var navMenu = document.getElementById("nav-menu");
  var isMobile = window.innerWidth <= 600;
  
  if (!isMobile) {
    navMenu.style.display = "flex";
  } else {
    navMenu.classList.remove("show");
  }
});
