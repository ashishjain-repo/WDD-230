
document.addEventListener('DOMContentLoaded', function () {
    var today = new Date();
    var dayOfWeek = today.getDay(); 
    var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    
    if (dayOfWeek >= 1 && dayOfWeek <= 3) {
    
        var banner = document.createElement('div');
        banner.classList.add('banner');

    
        var message = document.createElement('p');
        message.textContent = 'Join us for the Chamber of Commerce meet and greet on ' + daysOfWeek[3] + ' at 7:00 pm!';

    
        var closeButton = document.createElement('span');
        closeButton.classList.add('close');
        closeButton.textContent = 'X'; 

    
        closeButton.addEventListener('click', function () {
            banner.style.display = 'none';
        });

        
        message.insertBefore(closeButton, message.firstChild);

        
        banner.appendChild(message);

        
        var bannerContainer = document.getElementById('bannerContainer');

        
        bannerContainer.appendChild(banner);

        
        banner.style.display = 'block';
    }
});