<?php
// Database configuration
$servername = "localhost";
$username = "root"; // Default username for MySQL
$password = ""; // Default password for MySQL (usually empty)
$dbname = "career_counselling"; // Your database

// Create a connection to the MySQL database
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data and sanitize inputs
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $phoneno = htmlspecialchars(trim($_POST['phoneno']));
    $dob = htmlspecialchars(trim($_POST['dob']));
    $username = htmlspecialchars(trim($_POST['username']));
    $password = htmlspecialchars(trim($_POST['password']));

    // Validate inputs
    if (!empty($name) && !empty($email) && !empty($phoneno) && !empty($dob) && !empty($username) && !empty($password)) {
        // Hash the password for security
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);

        // Prepare an SQL statement to insert data into the users table
        $sql = "INSERT INTO users (name, email, phoneno, dob, username, password) VALUES (?, ?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssssss", $name, $email, $phoneno, $dob, $username, $hashed_password);

        // Execute the statement
        if ($stmt->execute()) {
             header("Location: expllorepage.html");
        } else {
            echo "Error: " . $stmt->error;
        }

        // Close the statement
        $stmt->close();
    } else {
        echo "All fields are required.";
    }
}

// Close the database connection
$conn->close();
?>
