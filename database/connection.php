<?php
$servername = "localhost";
$username = "nazwa_użytkownika";
$password = "hasło";
$database = "nazwa_bazy_danych";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Nieudane połączenie: " . $conn->connect_error);
}
echo "Połączenie z bazą danych udane";
?>
