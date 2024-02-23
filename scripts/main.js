function toggleMenu() {
  const navbar = document.getElementById('navbar');
  navbar.style.display = (navbar.style.display === 'none' || navbar.style.display === '') ? 'block' : 'none';
  const hamburger = document.getElementById('hamburger-menu');
  if (hamburger.textContent == "☰")
  {
    hamburger.textContent = "X";
  }
  else if(hamburger.textContent == "X")
  {
    hamburger.textContent = "☰"
  }
}
function getCurrentYear() {
  const currentDate = new Date();
  return currentDate.getFullYear();
}
const copyrightYear = getCurrentYear();


const lastModifiedDateString = document.lastModified;
const lastModifiedDate = new Date(lastModifiedDateString);
const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false};
const formattedDate = lastModifiedDate.toLocaleDateString(undefined, options);

function changePageVisit()
{
  const visitsDisplay = document.querySelector('#visits');
  let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;


if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);


  
}