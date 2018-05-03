<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

	$mysqli = new mysqli("angularServer", "root", "", "myBase");
	$mysqli -> query("SET NAMES 'utf-8'");

    $id = $_POST['id'];
	$name = $_POST['name'];
	$description = $_POST['description'];
	$price = $_POST['price'];
	$currency = $_POST['currency'];
	$image = $_POST['image'];
	$storage = $_POST['storage'];
	$type = $_POST['type'];

    $mysqli -> query("UPDATE `goods` SET `name` = '$name', `description` = '$description', `price` = '$price', `currency` = '$currency', `image` = '$image', `storage` = '$storage', `type` = '$type' WHERE `goods`.`id` = $id");

	$mysqli -> close();
?>