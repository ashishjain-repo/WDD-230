const dataFull = new Array();

fetch('./data/data.json')
    .then(response => response.json())
    .then(data => 
    {
        // Process the fetched data
        dataFull.push(data)
    })
    .catch(error => 
    {
        console.error('Error fetching data:', error);
    });

console.log(dataFull)
const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

urlParams.forEach((value, key) => 
{
    console.log(`${key}: ${value}`);
});