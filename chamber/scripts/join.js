var radioButtons = document.querySelectorAll('input[type=radio][name="option"]');



radioButtons.forEach(function (radioButton) {
    radioButton.addEventListener('click', function () {
        // Get the value of the selected radio button
        var selectedOption = document.querySelector('input[type=radio][name="option"]:checked').value;
        var np = document.getElementsByClassName('.np');
        // Update the display text based on the selected option
        if (selectedOption === 'np') {
            hide();
            showText(selectedOption);
        } else if (selectedOption === 'bronze') {
            hide();
            showText(selectedOption);
        } else if (selectedOption === 'silver') {
            hide();
            showText(selectedOption);
        } else if (selectedOption === 'gold'){
            hide();
            showText(selectedOption);
        }
    });
});

function showText(option)
{
    var elementId = document.getElementById(option);
    elementId.style.display = 'block';
}
function hide()
{
    var np = document.getElementById('np');
    var bronze = document.getElementById('bronze');
    var silver = document.getElementById('silver');
    var gold = document.getElementById('gold');
    np.style.display = 'none';
    bronze.style.display = 'none';
    silver.style.display = 'none';
    gold.style.display = 'none';
}