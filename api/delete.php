<?php
$id = $_POST['id'];
include("db.php");
$querySQL = "DELETE FROM exproduit WHERE id='$id'";
$applySQL = $con->prepare($querySQL);
$applySQL->execute();
