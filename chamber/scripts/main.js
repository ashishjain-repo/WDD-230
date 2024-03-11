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

document.addEventListener("DOMContentLoaded", function() {
  // Check if localStorage is supported
  if (typeof(Storage) !== "undefined") {
    // Get the last visit date from localStorage
    var lastVisit = localStorage.getItem("lastVisit");
    var currentDate = new Date().getTime(); // Current timestamp

    if (lastVisit) {
      // Calculate the difference in milliseconds between visits
      var timeDifference = currentDate - lastVisit;
      var millisecondsInDay = 1000 * 60 * 60 * 24;
      var daysDifference = Math.floor(timeDifference / millisecondsInDay);

      if (daysDifference < 1) {
        document.getElementById("sidebar").innerText = "Back so soon! Awesome!";
      } else {
        var message = "You last visited ";
        message += daysDifference + (daysDifference === 1 ? " day" : " days") + " ago.";
        document.getElementById("sidebar").innerText = message;
      }
    } else {
      // If this is the first visit, display a welcome message
      document.getElementById("sidebar").innerText = "Welcome! Let us know if you have any questions.";
    }

    // Update the last visit date in localStorage
    localStorage.setItem("lastVisit", currentDate);
  } else {
    // If localStorage is not supported, notify the user
    document.getElementById("sidebar").innerText = "LocalStorage is not supported in your browser.";
  }
});

changePageVisit();