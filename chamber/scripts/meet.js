document.addEventListener('DOMContentLoaded', function () {
    var today = new Date();
    var dayOfWeek = today.getDay(); // Get the current day of the week (0 for Sunday, 1 for Monday, etc.)
    var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // Check if it's Monday, Tuesday, or Wednesday
    if (dayOfWeek >= 1 && dayOfWeek <= 3) {
        // Create the banner element
        var banner = document.createElement('div');
        banner.classList.add('banner');

        // Create the text content
        var message = document.createElement('p');
        message.textContent = 'Join us for the Chamber of Commerce meet and greet on ' + daysOfWeek[3] + ' at 7:00 pm!';

        // Append the text content to the banner
        banner.appendChild(message);

        // Get the banner container element
        var bannerContainer = document.getElementById('bannerContainer');

        // Append the banner to the banner container
        bannerContainer.appendChild(banner);

        // Show the banner
        banner.style.display = 'block';
    }
});