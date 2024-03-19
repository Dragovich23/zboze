<?php
require_once('connection.php');

$sql = "SELECT * FROM cereal_types";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Output data of each row
    while ($row = $result->fetch_assoc()) {
        echo "Cereal Type: " . $row["type"] . "<br>";
    }
} else {
    echo "0 results";
}
$conn->close();
?>
