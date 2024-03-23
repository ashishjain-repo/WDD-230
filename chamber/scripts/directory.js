const container = document.querySelector('#Companies');
const main = document.querySelector('main');

async function getCompanies() {
    const response = await fetch('data/members.json');
    const data = await response.json();

    data.companies.forEach(company => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h3>${company.name}</h3>
            <p>${company.address}</p>
            <p>${company.phone}</p>
            <p>${company.level}</p>
            <a href="${company.website}" target="_blank">Visit Website</a>
            <img src="${company.url}" alt="${company.name} Company Logo">
        `;
        container.appendChild(card);
    });
}

getCompanies();

document.querySelector('#GridButton').addEventListener('click', () => {
    main.classList.remove('list');
    main.classList.add('grid');
});

document.querySelector('#LineItemButton').addEventListener('click', () => {
    main.classList.remove('grid');
    main.classList.add('list');
});