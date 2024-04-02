function increaseCurrentDateBy(daysToAdd) {
    // Get the current date
    var currentDate = new Date();

    // Add the specified number of days to the current date
    currentDate.setDate(currentDate.getDate() + daysToAdd);

    // Extract the day and month from the updated date
    var currentDay = currentDate.getDate();
    var currentMonth = currentDate.toLocaleString('default', { month: 'long' });

    // Construct the final date string
    var formattedDate = currentDay + ' ' + currentMonth;

    // Return the formatted date
    return formattedDate;
}

async function getHourlyWeather()
{
    const url_three = 'https://api.openweathermap.org/data/2.5/forecast?lat=33.158092&lon=-117.350594&appid=a32d3f19e87569839e90fd40ae6a9a14&units=metric';
    try{   
        const response = await fetch(url_three);
        if(response.ok)
        {
            const data = await response.json();
            console.log(data)
            const iconCode1 = data.list[3].weather[0].icon;
            const iconCode1Url = `http://openweathermap.org/img/wn/${iconCode1}.png`;

            const img1 = document.getElementById('weather-1-img');
            img1.src = iconCode1Url;
            const temp1 = document.getElementById('weather-1-temp');
            temp1.textContent = data.list[3].main.temp;
            const desc1 = document.getElementById('weather-1-desc');
            desc1.textContent = data.list[3].weather[0].description.toUpperCase();
            const date1 = document.getElementById('weather-1-date');
            date1.textContent = increaseCurrentDateBy(1);

            const iconCode2 = data.list[11].weather[0].icon;
            const iconCode2Url = `http://openweathermap.org/img/wn/${iconCode2}.png`;

            const img2 = document.getElementById('weather-2-img');
            img2.src = iconCode2Url;
            const temp2 = document.getElementById('weather-2-temp');
            temp2.textContent = data.list[11].main.temp;
            const desc2 = document.getElementById('weather-2-desc');
            desc2.textContent = data.list[11].weather[0].description.toUpperCase();
            const date2 = document.getElementById('weather-2-date');
            date2.textContent = increaseCurrentDateBy(2);

            const iconCode3 = data.list[19].weather[0].icon;
            const iconCode3Url = `http://openweathermap.org/img/wn/${iconCode3}.png`;

            const img3 = document.getElementById('weather-3-img');
            img3.src = iconCode3Url;
            const temp3 = document.getElementById('weather-3-temp');
            temp3.textContent = data.list[19].main.temp;
            const desc3 = document.getElementById('weather-3-desc');
            desc3.textContent = data.list[19].weather[0].description.toUpperCase();
            const date3 = document.getElementById('weather-3-date');
            date3.textContent = increaseCurrentDateBy(3);
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
getHourlyWeather();