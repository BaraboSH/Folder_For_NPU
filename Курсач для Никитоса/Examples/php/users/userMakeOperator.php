<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
	$mysqli = new mysqli("angularServer", "root", "", "myBase");
	$mysqli -> query("SET NAMES 'utf-8'");

    $id = $_POST['id'];
      
    $mysqli -> query("UPDATE `usersData` SET `rules` = 'operator' WHERE `id` = $id");

	$mysqli -> close();
?>