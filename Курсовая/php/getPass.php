<?php
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
  header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
  $login = $_POST['login'];
  $password = $_POST['password'];
  $mysqli = new mysqli("localhost", "root", "", "TeamBD");
  $mysqli -> query("SET NAMES 'utf-8'");
  $result_set = $mysqli -> query("SELECT `Login` FROM `Users` WHERE (`Login` = '$login' AND `Password` = '$password')");
  if($result_set != null) {
	  print_r(json_encode(printResult($result_set)));
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