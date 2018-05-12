<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

	$mysqli = new mysqli("localhost", "root", "", "TeamBD");
    $mysqli -> query("SET NAMES 'utf-8'");

	$FName = $_POST['FName'];
	$LName = $_POST['LName'];
	$City = $_POST['City'];
	$Date = $_POST['Date'];
	$Number = $_POST['Number'];
	$Photo = $_POST['Photo'];
	$Position = $_POST['Position'];

    $mysqli -> query("
	INSERT INTO	
	`playersInfo` (`id`, `Fname`, `Lname`, `dateOfBirth`, `citezenship`, `position`, `gameNumber`, `photo`)
	VALUES 
	(NULL, '$FName', '$LName', '$Date', '$City', '$Position', '$Number', '$Photo')");
	$mysqli -> close();
?>