<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

	$mysqli = new mysqli("localhost", "root", "", "TeamBD");
    $mysqli -> query("SET NAMES 'utf-8'");

    $id = $_POST['id'];
	$FName = $_POST['FName'];
	$LName = $_POST['LName'];
	$City = $_POST['City'];
	$Date = $_POST['Date'];
	$Number = $_POST['Number'];
	$Photo = $_POST['Photo'];
	$Position = $_POST['Position'];
	$mysqli -> begin_transaction();
    $mysqli -> query("UPDATE `playersInfo` SET `Fname` = '$FName', `Lname` = '$LName', `dateOfBirth` = '$Date', `citezenship` = '$City', `position` = '$Position', `gameNumber` = '$Number', `photo` = '$Photo' WHERE `playersInfo`.`id` = $id");

	$usersData = $mysqli -> query("SELECT * FROM `playersInfo` ORDER BY `playersInfo`.`id` DESC");
	$mysqli -> commit();
	print_r(json_encode(getResult($usersData)));
	
	$mysqli -> close();
  
	function getResult($array) {
		$resultArray = array();
		while(($row = $array -> fetch_assoc()) != false) { 
				$resultArray[] = $row;
		}
		  return $resultArray;
	  }
?>