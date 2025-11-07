const form = document.getElementById("userForm");
const message = document.getElementById("message");

// Form Submission Event Listener
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting

    // Get form values and trim whitespace
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    // Empty Field Validation
    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        message.textContent = "Please fill in all fields.";
        message.style.color = "red";
        return;
    }

    // Email Format Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        message.textContent = "Please enter a valid email address.";
        message.style.color = "red";
        return;
    }

    // Password Length Validation
    if (password.length < 6) {
        message.textContent = "Password must be at least 6 characters.";
        message.style.color = "red";
        return;
    }

    // Password Match Validation
    if (password !== confirmPassword) {
        message.textContent = "Passwords do not match.";
        message.style.color = "red";
        return;
    }

    // If all validations pass
    message.textContent = "✅ Form submitted successfully!";
    message.style.color = "green";

    // Reset the form
    form.reset();

    //After 4 seconds, clear the success message
    setTimeout(() => {
        message.textContent = "";
    }, 4000);
});