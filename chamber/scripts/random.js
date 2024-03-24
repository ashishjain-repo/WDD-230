// Function to fetch the JSON data from the URL
async function fetchJSON(url) {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error('Error fetching JSON:', error);
    }
}

// Function to shuffle array randomly
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to change elements inside the DIVs choosing randomly
function changeDivContent(companies) {
    const shuffledCompanies = shuffleArray(companies);
    const divs = document.querySelectorAll('.brand-content');

    for (let i = 0; i < divs.length; i++) {
        const company = shuffledCompanies[i];

        // Update current div content with company information
        const currentDiv = divs[i];
        currentDiv.innerHTML = `
            <h3>${company.name}</h3>
            <p><b>${company.address}</b></p>
            <!-- <a href="mailto:${company.email}">${company.email}</a> -->
            <p>${company.level}</p>
            <p>${company.phone}</p>
            <a href="${company.website}" target="_blank">${company.website}</a>
        `;
    }
}

// URL of the JSON file
const urls = 'data/members.json';

// Fetch JSON data and update div content
fetchJSON(urls)
    .then(data => {
        changeDivContent(data.companies);
    })
    .catch(error => {
        console.error('Error:', error);
    });
