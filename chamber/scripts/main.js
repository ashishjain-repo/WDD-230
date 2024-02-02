function displayHamburger()
{
    var hamburger = document.getElementById("mobile-nav");
    if (hamburger.style.display == "none")
    {
        hamburger.style.display = "inline";
    }
    else
    {
        hamburger.style.display = "none";
    }
}