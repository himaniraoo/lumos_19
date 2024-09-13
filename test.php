<?php
$inputPassword = '123'; // Password entered by the user during login

// Fetch the hashed password from the database
$hashedPasswordFromDb = '$2y$10$m2.K/XHjzDdEIdAVzoIQ0eUENcdo3p2jBf42/huyG5SPwM44z3qvG'; // Example hashed password

if (password_verify($inputPassword, $hashedPasswordFromDb)) {
    echo "Password is valid!";
} else {
    echo "Invalid password.";
}
?>
