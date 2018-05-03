<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
	$name = $_POST['name'];
	$surname = $_POST['surname'];
	$adress = $_POST['adress'];
	$phone = $_POST['phone'];
	$email = $_POST['email'];
	$type =  $_POST['type'];
	$data =  $_POST['data'];
    
	$mysqli = new mysqli("angularServer", "root", "", "myBase");
	$mysqli -> query("SET NAMES 'utf-8'");

    $mysqli -> query("INSERT INTO `orders` (`name`, `surname`, `adress`, `phone`, `email`, `type`, `date`) VALUES ('$name', '$surname', '$adress', '$phone', '$email', '$type', '$data')");
    $id = $mysqli -> query("SELECT DISTINCT `id` FROM `orders`");
    if ($id) {
      print_r(json_encode(printResult($id)));
    }
	$mysqli -> close();

    function printResult($id) {
          $str;
          while(($row = $id -> fetch_assoc()) != false) { 
            $str = $row["id"];
          }
            return $str;
    }
?>