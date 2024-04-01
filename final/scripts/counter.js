const visitCount = parseInt(localStorage.getItem('visitCount')) || 0;

        // Update the drinkPara element
        const drinkPara = document.getElementById('drink-para');
        if (visitCount > 0) {
            drinkPara.innerHTML = `Drinks You Ordered <span>${visitCount}</span>`;
        } else {
            drinkPara.innerText = "No drinks ordered yet.";
        }