<?php
include("db.php");
$querySQL = " INSERT INTO exproduit(titre,type,prix) VALUES (:titre,:type,:prix)";
$addExtincteurQuery = $con->prepare($querySQL);
$addExtincteurQuery->bindParam(":titre",$_POST["titre"],PDO::PARAM_STR);
$addExtincteurQuery->bindParam(":type",$_POST["type"],PDO::PARAM_STR);
$addExtincteurQuery->bindParam(":prix",$_POST["prix"],PDO::PARAM_STR);
$addExtincteurQuery->execute();
?>