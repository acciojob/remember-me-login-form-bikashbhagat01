document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const rememberMeCheckbox = document.getElementById("checkbox");
    const submitButton = document.getElementById("submit");
    const existingButton = document.getElementById("existing");

    // Check if user data exists in localStorage
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (savedUsername && savedPassword) {
        existingButton.style.display = "block"; // Show the "Login as existing user" button
    }

    // Handle form submission
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from actually submitting

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        const rememberMe = rememberMeCheckbox.checked;

        if (!username || !password) {
            alert("Username and password cannot be empty.");
            return;
        }

        if (rememberMe) {
            // Save to localStorage
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            existingButton.style.display = "block"; // Show existing user button
        } else {
            // Remove from localStorage
            localStorage.removeItem("username");
            localStorage.removeItem("password");
            existingButton.style.display = "none"; // Hide existing user button
        }

        alert(`Logged in as ${username}`);
        
        // Reset form fields after submission
        usernameInput.value = "";
        passwordInput.value = "";
        rememberMeCheckbox.checked = false;
    });

    // Handle existing user login
    existingButton.addEventListener("click", function () {
        const existingUsername = localStorage.getItem("username");
        if (existingUsername) {
            alert(`Logged in as ${existingUsername}`);
        } else {
            alert("No existing user found.");
            existingButton.style.display = "none"; // Hide button if no user exists
        }
    });
});
