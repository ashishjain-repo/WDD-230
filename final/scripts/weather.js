const url = 'https://api.openweathermap.org/data/2.5/weather?lat=33.158092&lon=-117.350594&appid=a32d3f19e87569839e90fd40ae6a9a14&units=metric';


async function getWeather()
{
    try{   
        const response = await fetch(url);
        if(response.ok)
        {
            const data = await response.json();
            var weather = document.getElementById('current-temp');
            weather.innerText = data.main.temp;
            var humidity = document.getElementById('humidity');
            humidity.innerText = data.main.humidity;
            const iconCode = data.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
            var icon = document.getElementById('weather-icon');
            icon.src = iconUrl;
            var desc = document.getElementById('figcaption');
            desc.textContent= data.weather[0].description.toUpperCase();
            // var windChill = document.getElementById('windChill');
            // windChill.textContent = data.wind.deg;
            // var windSpeed = document.getElementById('windSpeed');
            // windSpeed.textContent = data.wind.speed;
        }
        else
        {
            throw Error(await response.text());
        }
    }
    catch(error)
    {
        console.log(error);
    }
}

getWeather();