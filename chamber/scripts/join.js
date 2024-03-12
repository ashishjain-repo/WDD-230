var radioButtons = document.querySelectorAll('input[type=radio][name="option"]');



radioButtons.forEach(function (radioButton) {
    radioButton.addEventListener('click', function () {
        // Get the value of the selected radio button
        var selectedOption = document.querySelector('input[type=radio][name="option"]:checked').value;
        var np = document.getElementsByClassName('.np');
        // Update the display text based on the selected option
        if (selectedOption === 'np') {
            showText(selectedOption);
        } else if (selectedOption === 'bronze') {
            showText(selectedOption);
        } else if (selectedOption === 'silver') {
            showText(selectedOption);
        } else if (selectedOption === 'gold'){
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
    var className = document.getElementsByClassName('membership')
}