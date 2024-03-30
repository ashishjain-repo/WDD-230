const dataFull = new Array();

fetch('./data/data.json')
  .then(response => response.json())
  .then(data => {
      // Process the fetched data
      dataFull.push(data)
})
.catch(error => {
    console.error('Error fetching data:', error);
});

console.log(dataFull)
/* const queryString = window.location.search;

// Parse the query string into an object
const urlParams = new URLSearchParams(queryString);

// Iterate over the parameters and log them to the console
urlParams.forEach((value, key) => {
    console.log(`${key}: ${value}`);
}); */
