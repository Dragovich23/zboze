<?php
require_once('connection.php');

$sql = "SELECT * FROM prices";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Output data of each row
    while ($row = $result->fetch_assoc()) {
        echo "Price: " . $row["price"] . "<br>";
    }
} else {
    echo "0 results";
}
$conn->close();
?>
