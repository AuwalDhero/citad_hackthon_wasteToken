<?php
// Simulated user data (replace with your actual user data)
$validUsername = 'demoUser';
$validPassword = 'demoPassword';

// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve user inputs
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Validate the username and password (replace with database validation)
    if ($username === $validUsername && $password === $validPassword) {
        // Authentication successful
        session_start();
        $_SESSION['username'] = $username; // Store user data in a session
        header('Location: dashboard.php'); // Redirect to a dashboard or welcome page
        exit();
    } else {
        // Authentication failed
        $errorMessage = 'Invalid username or password.';
    }
}
?>