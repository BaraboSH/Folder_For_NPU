<?php 
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
  header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
  $id = $_POST["id"];
  $amount = $_POST["amount"];
  $mysqli = new mysqli("angularServer", "root", "", "myBase");
  $mysqli -> query("SET NAMES 'utf-8'");
  $result_set = $mysqli -> query("SELECT * FROM `users` WHERE `id` != $id");
  $usersData = $mysqli -> query("SELECT DISTINCT `rules`, `email` FROM `usersData` WHERE `id` != $id");

  print_r(json_encode(resultToArray($result_set, $usersData, $amount)));

  $mysqli -> close();

  function resultToArray($result_set, $usersData, $amount) {
    $array = array();
    $i = 0;
      while((($row = $result_set -> fetch_assoc()) != false) && $i < $amount) { 
        $row2 = $usersData -> fetch_assoc();
        $array[] = $row + $row2;
        $i++;
      }
    return $array;
  }
?>