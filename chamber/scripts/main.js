function displayHamburger()
{
    var hamburger = document.getElementById("mobile-nav");
    var gridToggle = document.getElementById("navbar");
    var screenWidth = screen.availWidth;
    if (hamburger.style.display == "none" && screenWidth > 480)
    {
        hamburger.style.display = "grid";
        gridToggle.style.gridTemplateColumns = "10em 20em 10em 8em";
        gridToggle.style.gridTemplateRows = "6em 100%";
    }
    else if (hamburger.style.display == "none" && screenWidth <= 480)
    {
        hamburger.style.display = "grid";
        gridToggle.style.gridTemplateColumns = "5em 15em";
        gridToggle.style.gridTemplateRows = "6em 100%";

    }
    else
    {
        hamburger.style.display = "none";
        // gridToggle.style.gridTemplateColumns = "10em 20em 10em 8em";
    }
}