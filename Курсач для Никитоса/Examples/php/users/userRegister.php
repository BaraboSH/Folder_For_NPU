<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
	$name = $_POST['name'];
	$surname = $_POST['surname'];
	$image = $_POST['image'];
	$adress = $_POST['adress'];
	$phone = $_POST['phone'];
	$email =  $_POST['email'];
	$password = $_POST['password'];

	$mysqli = new mysqli("angularServer", "root", "", "myBase");
	$mysqli -> query("SET NAMES 'utf-8'");
    $isNotAlreadyRegister = $mysqli -> query("SELECT `email` FROM `usersData` WHERE `email` = '$email'");
    if (printResult($isNotAlreadyRegister) == null) {
      $mysqli -> query("INSERT INTO `users` (`name`, `surname`, `image`, `adress`, `phone`) VALUES ('$name', '$surname', '$image', '$adress', '$phone')");
      $mysqli -> query("INSERT INTO `usersData` (`email`, `password`) VALUES ('$email', '$password')");
       print_r(json_encode('success'));
    }
	$mysqli -> close();

    function printResult($result_set) {
    $array = array();
    while(($row = $result_set -> fetch_assoc()) != false) { 
            $array[] = $row;
            return $array;
    }
  }
?>