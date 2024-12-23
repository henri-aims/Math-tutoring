// Login form validation
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const correctUsername = "user";
    const correctPassword = "password123";

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === correctUsername && password === correctPassword) {
        alert("Login successful!");
    } else {
        document.getElementById('error-message').style.display = 'block';
