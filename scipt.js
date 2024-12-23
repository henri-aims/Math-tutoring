// Login form validation
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Clear previous error message
    const errorMessage = document.getElementById('error-message');
    errorMessage.style.display = 'none';
    errorMessage.innerHTML = '';

    // Basic validation
    if (!username || !password) {
        errorMessage.style.display = 'block';
        errorMessage.innerHTML = 'Both fields are required.';
        return;
    }

    // Simulate a server-side check (In reality, this should be done on the server)
    const correctUsername = "user"; // This should be checked on the server
    const correctPassword = "password123"; // This should be checked on the server

    // Perform validation (remember, this is only client-side for demo purposes)
    if (username === correctUsername && password === correctPassword) {
        // Success: Redirect to a different page or dashboard
        window.location.href = "dashboard.html"; // Redirect on successful login
    } else {
        // Failure: Show error message
        errorMessage.style.display = 'block';
        errorMessage.innerHTML = 'Incorrect username or password. Please try again.';
    }
});

