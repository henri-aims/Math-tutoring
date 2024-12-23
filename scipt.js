// JavaScript for form validation and dynamic feedback
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission for demo purposes

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Basic form validation
    if (name === "" || email === "" || message === "") {
        document.getElementById("form-message").textContent = "Please fill in all fields.";
        document.getElementById("form-message").style.color = "red";
    } else {
        document.getElementById("form-message").textContent = "Thank you for contacting us! We will get back to you soon.";
        document.getElementById("form-message").style.color = "green";
        document.getElementById("contact-form").reset(); // Reset the form after successful submission
    }
});
