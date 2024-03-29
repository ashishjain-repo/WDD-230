document.getElementById('juiceForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Retrieve input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    // Display the retrieved values (you can do any processing here)
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
});