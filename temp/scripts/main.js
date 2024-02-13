function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.style.display = (navbar.style.display === 'none' || navbar.style.display === '') ? 'block' : 'none';
  }

document.getElementById('last-modified').textContent = document.lastModified;
