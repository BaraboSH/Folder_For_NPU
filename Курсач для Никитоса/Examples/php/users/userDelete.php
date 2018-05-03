<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
	$id = $_POST['id'];

	$mysqli = new mysqli("angularServer", "root", "", "myBase");
	$mysqli -> query("SET NAMES 'utf-8'");

    $mysqli -> query("DELETE FROM `usersData` WHERE `usersData`.`id` = $id");
    $mysqli -> query("DELETE FROM `users` WHERE `users`.`id` = $id");

	$mysqli -> close();

    function printResult($result_set) {
    $array = array();
    while(($row = $result_set -> fetch_assoc()) != false) { 
            $array[] = $row;
            return $array;
    }
  }
?>