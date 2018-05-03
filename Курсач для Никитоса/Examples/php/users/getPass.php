<?php
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
  header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
  $id = $_POST['id'];
  $password = $_POST['password'];
  $mysqli = new mysqli("angularServer", "root", "", "myBase");
  $mysqli -> query("SET NAMES 'utf-8'");
  $usersData = $mysqli -> query("SELECT DISTINCT `id`, `password` FROM `usersData` WHERE `id` = $id AND `password` = '$password'");
  if (printResult($usersData)) {
    echo "true";
  }
  $mysqli -> close();

  function printResult($usersData) {
    $array = array();
    while(($row = $usersData -> fetch_assoc()) != false) { 
      $array[] = $row;
      return $array;
    }
  }
?>