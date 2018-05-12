<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

	$mysqli = new mysqli("localhost", "root", "", "TeamBD");
    $mysqli -> query("SET NAMES 'utf-8'");

	$Photo = $_POST['Photo'];
	$Date = $_POST['Date'];
	$Text = $_POST['Text'];

    $mysqli -> query("
	INSERT INTO	
	`Posts` (`id`, `text`, `urlPhoto`, `dateOfPublic`)
	VALUES 
	(NULL, '$Text', '$Photo', '$Date')");
	$mysqli -> close();
?>