<?php
include("db.php");
$sql = "SELECT * FROM exproduit";
$exproduitQuery = $con->query($sql);
$getExproduit = $exproduitQuery->fetchAll(PDO::FETCH_ASSOC);
print_r(json_encode($getExproduit));
?>