// Login form validation
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const correctUsername = "user";
    const correctPassword = "password123";

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === correctUsername && password === correctPassword) {
        alert("Login successful!");
        // Redirect to another page, for example:
        // window.location.href = 'dashboard.html';
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
});

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    alert("Your message has been sent! We will get back to you shortly.");
});

