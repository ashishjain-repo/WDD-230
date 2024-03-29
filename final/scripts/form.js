const queryString = window.location.search;

// Parse the query string into an object
const urlParams = new URLSearchParams(queryString);

// Iterate over the parameters and log them to the console
urlParams.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});