<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

	$mysqli = new mysqli("angularServer", "root", "", "myBase");
	$mysqli -> query("SET NAMES 'utf-8'");

    $id = $_POST['id'];
	$email = $_POST['email'];
    $defPass = $mysqli -> query("SELECT `password` FROM `usersData` WHERE `id` = $id");
    $password = $_POST['password'] == 'undefined' ? getPass($defPass) : $_POST['password'];
	$name = $_POST['name'];
	$surname = $_POST['surname'];
	$image = $_POST['image'];
	$adress = $_POST['adress'];
	$phone = $_POST['phone'];

    $user = $mysqli -> query("SELECT * FROM `users` WHERE `id` = $id");
    $userData = $mysqli -> query("SELECT * FROM `usersData` WHERE `id` = $id");

    if ($user && $userData) {
      $mysqli -> query("UPDATE `users` SET `name` = '$name', `surname` = '$surname', `image` = '$image', `adress` = '$adress', `phone` = '$phone' WHERE `users`.`id` = $id");
      
       $mysqli -> query("UPDATE `usersData` SET `email` = '$email', `password` = '$password' WHERE `usersData`.`id` = $id");
    }

    function getPass($pass) {
      $passStr;
      while(($row = $pass -> fetch_assoc()) != false) { 
              $pass = $row;
              $passStr = $pass['password'];
          return $passStr;
      }
    }

	$mysqli -> close();
?>