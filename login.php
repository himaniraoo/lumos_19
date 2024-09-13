<?php
session_start(); // Start a new session or resume the existing session

$servername = "localhost";
$username = "root";
$password = ""; // Your MySQL password, if any
$dbname = "career_counselling";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve form data
$user = $_POST['username'];
$pass = $_POST['password'];

// Prepare SQL statement to fetch user data
$stmt = $conn->prepare("SELECT password FROM users WHERE username = ?");
$stmt->bind_param("s", $user);
$stmt->execute();
$stmt->store_result();

// Check if user exists
if ($stmt->num_rows > 0) {
    $stmt->bind_result($hashedPassword);
    $stmt->fetch();
    
    // Verify the password
    if (password_verify($pass, $hashedPassword)) {
        // Password is correct, start session and redirect to a protected page
        $_SESSION['username'] = $user;
        header("Location: http://localhost/project/signup.html"); // Redirect to a protected page
        exit();
    } else {
        echo "Invalid password.";
    }
} else {
    echo "User not found.";
}

$stmt->close();
$conn->close();
?>

