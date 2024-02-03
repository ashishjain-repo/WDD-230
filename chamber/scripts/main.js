function displayHamburger()
{
    var hamburger = document.getElementById("mobile-nav");
    var gridToggle = document.getElementById("navbar");
    if (hamburger.style.display == "none")
    {
        hamburger.style.display = "grid";
        gridToggle.style.gridTemplateColumns = "5em 15em";
    }
    else
    {
        hamburger.style.display = "none";
        gridToggle.style,gridTemplateColumns = "5em";
    }
}