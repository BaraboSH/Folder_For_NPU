<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

	$mysqli = new mysqli("localhost", "root", "", "TeamBD");
    $mysqli -> query("SET NAMES 'utf-8'");

	$Photo = $_POST['Photo'];
	$Date = $_POST['Date'];
	$Text = $_POST['Text'];
	$mysqli -> begin_transaction();
    $mysqli -> query("INSERT INTO	`Posts` (`id`, `text`, `urlPhoto`, `dateOfPublic`)
	VALUES (NULL, '$Text', '$Photo', '$Date')");
	  $usersData = $mysqli -> query("SELECT * FROM `Posts` ORDER BY `Posts`.`dateOfPublic` DESC");
	  print_r(json_encode(getResult($usersData)));
	  $mysqli -> commit();
	  $mysqli -> close();
	  
	  function getResult($array) {
		  $resultArray = array();
		  while(($row = $array -> fetch_assoc()) != false) { 
				  $resultArray[] = $row;
		  }
			return $resultArray;
		}
?>