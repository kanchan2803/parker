function validateForm(event) {
    event.preventDefault(); // Prevent form submission to backend

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple validation for empty fields
    if (!email || !password) {
        alert("Please enter both email and password.");
        return;
    }

    // Simulate sign-in
    if (email === "test@example.com" && password === "password123") {
        alert("Login successful!");
        window.location.href = "index.html"; // Redirect to homepage or dashboard
    } else {
        alert("Incorrect email or password. Please try again.");
    }
}