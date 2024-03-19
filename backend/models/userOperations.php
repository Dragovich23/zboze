<?php
require_once('connection.php');

// Function to find a user
function findUser($username) {
    global $conn;
    $sql = "SELECT * FROM users WHERE username='$username'";
    $result = $conn->query($sql);
    return $result->fetch_assoc(); // Return user data or null if not found
}

// Function to register a new user
function registerUser($username, $password) {
    global $conn;
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);
    $sql = "INSERT INTO users (username, password) VALUES ('$username', '$hashed_password')";
    if ($conn->query($sql) === TRUE) {
        return true; // Registration successful
    } else {
        return false; // Registration failed
    }
}
?>
