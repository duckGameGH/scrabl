<?php
$servername = "localhost:3306";
$username = "root";
$password = "";
$gameno = rand(1000, 9999);

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

$sql = "CREATE TABLE partie.gameno" . $gameno . "  (
    1 ";

    if ($conn->query($sql) === TRUE) {
        echo "Table MyGuests created successfully";
      } else {
        echo "Error creating table: " . $conn->error;
      }
      
      $conn->close();
?>