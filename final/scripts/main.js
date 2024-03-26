// Menu Button Toggle Function
function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.style.display = (navbar.style.display === 'none' || navbar.style.display === '') ? 'block' : 'none';
}
// Menu Button Toggle Function


document.getElementById('last-modified').textContent = document.lastModified;