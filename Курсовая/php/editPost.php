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
    $mysqli -> begin_transaction();
    $mysqli -> query("UPDATE `Posts` SET `text` = '$Text', `dateOfPublic` = '$Date',  `urlPhoto` = '$Photo' WHERE `Posts`.`id` = '$id'");
    $usersData = $mysqli -> query("SELECT * FROM `Posts` ORDER BY `Posts`.`dateOfPublic` DESC");
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