// const url = 'https://www.fruityvice.com/api/fruit/all';
const url = './data/data.json'
const fruits = [2, 4, 6, 8, 15, 22, 34];

async function getFruits() 
{
    try 
    {
        const response = await fetch(url);
        if (response.ok) 
        {
            const data = await response.json();
            var classes = ['choice-1', 'choice-2', 'choice-3'];
            var returnFruits = new Array();
            classes.forEach(element => 
            {
                const selectElement = document.getElementById(element);
                
                fruits.forEach(fruitIndex => {
                    const option = document.createElement('option');
                    option.value = fruitIndex;
                    option.textContent = data[fruitIndex].name;
                    selectElement.appendChild(option);
                });
            });
            return returnFruits;
        }
        else 
        {
            throw Error(await response.text());
        }
    }
    catch (error) 
    {
        console.log(error);
    }
}


getFruits();