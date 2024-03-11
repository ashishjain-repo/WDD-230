
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=43.8231096&lon=-111.7924237&appid=618570a643644035c14556cfb4a74929&units=metric';

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

async function getWeather()
{
    try{   
        const response = await fetch(url);
        if(response.ok)
        {
            const data = await response.json();
            console.log(data);
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