<?php
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
  header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
  $name = $_POST['name'] == "undefined" ? "" : $_POST['name'];
  $surname = $_POST['surname'] == "undefined" ? "" : $_POST['surname'];
  $amount = $_POST['amount'];

  $mysqli = new mysqli("angularServer", "root", "", "myBase");
  $mysqli -> query("SET NAMES 'utf-8'");

  $adminId = $mysqli -> query("SELECT `id` FROM `usersData` WHERE `rules` = 'admin'");
  $adminId = getid($adminId);

  $users = $mysqli -> query("SELECT * FROM `users` WHERE `name` LIKE '%$name%' AND `surname` LIKE '%$surname%' AND `id` != $adminId");
  $usersData = $mysqli -> query("SELECT DISTINCT `id`, `rules`, `email` FROM `usersData`");

  print_r(json_encode(printResult($users, $usersData, $amount)));

  $mysqli -> close();

  function printResult($users, $usersData, $amount) {
    $array = array();
    $i = 0;
    
    $usersArr = array();
    $usersDataArr = array();
    while((($row = $users -> fetch_assoc()) != false) && $i < $amount) {
      $usersArr[] = $row;   
      while((($row2 = $usersData -> fetch_assoc()) != false)) {
        $usersDataArr[] = $row2;   
      }
      $i++;
    }
    for ($j = 0; $j < sizeof($usersArr); $j++) {
      for ($k = 0; $k < sizeof($usersDataArr); $k++) {
        if ($usersArr[$j]['id'] == $usersDataArr[$k]['id']) {
          $array[] = $usersArr[$j] + $usersDataArr[$k];
        }
      }
    }
    return $array;
  }
  function getid($userData) {
    $str;
    while(($row = $userData -> fetch_assoc()) != false) { 
      $str = $row['id'];
    }
    return $str;
  }

?>