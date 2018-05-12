<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

	$mysqli = new mysqli("localhost", "root", "", "TeamBD");
    $mysqli -> query("SET NAMES 'utf-8'");

    $id = $_POST['id'];
	$Text = $_POST['Text'];
	$Date = $_POST['Date'];
	$Photo = $_POST['Photo'];

    $mysqli -> query("UPDATE `Posts` SET `text` = '$Text', `dateOfPublic` = '$Date', `dateOfBirth` = '$Date', `urlPhoto` = '$Photo' WHERE `Posts`.`id` = $id");

	$mysqli -> close();
?>