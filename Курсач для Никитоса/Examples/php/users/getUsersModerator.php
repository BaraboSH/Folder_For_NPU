<?php 
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
  header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
  $id = $_POST["id"];
  $amount = $_POST["amount"];

  $mysqli = new mysqli("angularServer", "root", "", "myBase");
  $mysqli -> query("SET NAMES 'utf-8'");

  $users = $mysqli -> query("SELECT * FROM `users` WHERE `id` != $id");
  $usersData = $mysqli -> query("SELECT DISTINCT `id`, `rules`, `email` FROM `usersData` WHERE `id` != $id AND `rules` != 'admin' AND `rules` != 'moderator'");

  print_r(json_encode(printResult($users, $usersData, $amount)));

  $mysqli -> close();

  function printResult($users, $usersData, $amount) {
    $array = array();
    $i = 0;
    
    $usersArr = array();
    $usersDataArr = array();
    while((($row2 = $usersData -> fetch_assoc()) != false) && $i < $amount) {
        $usersDataArr[] = $row2;   
        while((($row = $users -> fetch_assoc()) != false)) {
        $usersArr[] = $row; 
      }
      $i++;
    }
    for ($j = 0; $j < sizeof($usersDataArr); $j++) {
      for ($k = 0; $k < sizeof($usersArr); $k++) {
        if ($usersDataArr[$j]['id'] == $usersArr[$k]['id']) {
          $array[] = $usersArr[$k] + $usersDataArr[$j];
        }
      }
    }
    return $array;
  }
?>