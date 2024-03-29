// const url = 'https://www.fruityvice.com/api/fruit/all';
const url = './data/data.json'
const fruits = [2, 4, 6, 8, 15, 22, 34];

async function getFruits() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data)
            // var fruitList = getParticular(data,fruits);
            // return fruitList;
            var classes = ['choice-1', 'choice-2', 'choice-3'];
            classes.forEach(element => {
                const selectElement = document.getElementById(element);
                for (i = 0; i < fruits.length; i++) {
                    // console.log(data[fruits[i]])
                    const option = document.createElement('option');
                    option.value = data[fruits[i]].id;
                    option.textContent = data[fruits[i]].name;
                    selectElement.appendChild(option)

                }
            });


        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}


getFruits();

