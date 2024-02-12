function displayHamburger()
{
    var hamburger = document.getElementById("mobile-nav");
    var gridToggle = document.getElementById("navbar");
    var screenWidth = screen.availWidth;
    if (hamburger.style.display == "none" && (screenWidth > 480 && screenWidth < 768) )
    {
        hamburger.style.display = "grid";
        gridToggle.style.gridTemplateColumns = "10em 20em 10em 8em";
        gridToggle.style.gridTemplateRows = "6em 100%";
        console.log("768");
    }
    else if (hamburger.style.display == "none" && screenWidth <= 480)
    {
        hamburger.style.display = "grid";
        gridToggle.style.gridTemplateColumns = "5em 15em";
        gridToggle.style.gridTemplateRows = "6em 100%";
        console.log("480");

    }
    else if((hamburger.style.display == "none" && screenWidth >= 1024))
    {
        console.log("Hurray")
    }
    else
    {
        hamburger.style.display = "none";
        // gridToggle.style.gridTemplateColumns = "10em 20em 10em 8em";
        console.log("none");
    }
}