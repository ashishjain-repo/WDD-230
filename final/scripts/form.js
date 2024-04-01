const url = "./data/data.json";
async function getFruits(ing1, ing2, ing3, choiceList, nutrition) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data)
            ing1.innerText = data[choiceList[0]].name;
            ing2.innerText = data[choiceList[1]].name;
            ing3.innerText = data[choiceList[2]].name;
            const carbohydrates = data[choiceList[0]].nutritions.carbohydrates + data[choiceList[1]].nutritions.carbohydrates + data[choiceList[2]].nutritions.carbohydrates;
            const protein = data[choiceList[0]].nutritions.protein + data[choiceList[1]].nutritions.protein + data[choiceList[2]].nutritions.protein;
            const fat = data[choiceList[0]].nutritions.fat + data[choiceList[1]].nutritions.fat + data[choiceList[2]].nutritions.fat;
            const calorie = data[choiceList[0]].nutritions.calories + data[choiceList[1]].nutritions.calories + data[choiceList[2]].nutritions.calories;
            const sugar = data[choiceList[0]].nutritions.sugar + data[choiceList[1]].nutritions.sugar + data[choiceList[2]].nutritions.sugar;
            const values = [carbohydrates, protein, fat, calorie, sugar];
            for(i = 0; i < nutrition.length; i++)
            {   

                var temp = document.getElementById(nutrition[i]);
                if(temp === "cal")
                {
                    temp.innerText = values[i].toFixed(1);
                }
                else
                {
                    temp.innerText = values[i].toFixed(1) + " Grams"
                }
            }
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var name = urlParams.get('name');
var email = urlParams.get('email');
var phone = urlParams.get('phone');
var choice1 = urlParams.get('choice-1');
var choice2 = urlParams.get('choice-2');
var choice3 = urlParams.get('choice-3');
var desc = urlParams.get('instructions')
var justName = document.getElementById('cust-name');
justName.innerText = name;

// console.log(urlParams)

const changeList = ['return-name','return-email','return-phone','instruction'];
const valueList = [name, email, phone, desc];
const choices = [parseInt(choice1), parseInt(choice2), parseInt(choice3)];
const nutrition = ['carb','pro','fat','cal','sug'];

for(i = 0; i < changeList.length; i++)
{
    var temp = document.getElementById(changeList[i])
    temp.innerText = valueList[i];
}
var ing_1 = document.getElementById('ing-1');
var ing_2 = document.getElementById('ing-2');
var ing_3 = document.getElementById('ing-3');

getFruits(ing_1, ing_2, ing_3, choices, nutrition);
// console.log(choices)
let visitCount = localStorage.getItem('visitCount');

        // If the value is not present or is null, set it to 1
        if (!visitCount) {
            visitCount = 1;
        } else {
            // Otherwise, parse the value as an integer and increment it
            visitCount = parseInt(visitCount) + 1;
        }

        // Store the updated value back into localStorage
        localStorage.setItem('visitCount', visitCount);


const currentTime = new Date();

const fifteenMinutesLater = new Date(currentTime.getTime() + 15 * 60000); // 60000 milliseconds in a minute
const formattedTime = fifteenMinutesLater.toLocaleTimeString(); // Format time as string
const timeDisplay = document.getElementById('order-time');
timeDisplay.innerText = formattedTime;

const formattedDate = currentTime.toLocaleDateString();
const dateDisplay = document.getElementById('return-date');
dateDisplay.innerText = formattedDate;


