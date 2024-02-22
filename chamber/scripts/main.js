function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.style.display = (navbar.style.display === 'none' || navbar.style.display === '') ? 'block' : 'none';
  }

document.getElementById('last-modified').textContent = document.lastModified;


document.addEventListener("DOMContentLoaded", function() {
  const rootSwitchToggle = document.getElementById("rootSwitchToggle");
  const imageToSwitch = document.getElementById("hero");
  
  rootSwitchToggle.addEventListener("click", function() {
    // Check if the current root theme is default or additional
    const isDefault = document.documentElement.getAttribute('data-theme') !== 'dark';

    // Toggle between default and additional root styles
    if (isDefault) {
      // Apply additional root styles
      document.documentElement.setAttribute('data-theme', 'dark');
      // Change image source for dark mode
      imageToSwitch.src = "./images/new-dark.webp";
    } else {
      // Apply default root styles
      document.documentElement.removeAttribute('data-theme');
      // Change image source for default mode
      imageToSwitch.src = "./images/backgroud-main.webp";
    }
  });
});
