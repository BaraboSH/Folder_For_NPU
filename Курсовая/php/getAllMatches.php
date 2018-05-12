<?php
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
  header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
  $mysqli = new mysqli("localhost", "root", "", "TeamBD");
  $mysqli -> query("SET NAMES 'utf-8'");
  $matches = $mysqli -> query("SELECT * FROM `matches` ORDER BY `matches`.`date` DESC");
  $league = $mysqli -> query("SELECT `id`,`name` FROM `season`");
  print_r(json_encode(printResult($matches,$league)));
  
  $mysqli -> close();

  function printResult($users, $usersData) {
    $array = array();
    $usersArr = array();
    $usersDataArr = array();
    while((($row2 = $usersData -> fetch_assoc()) != false) ) {
        $usersDataArr[] = $row2;   
        while((($row = $users -> fetch_assoc()) != false)) {
        $usersArr[] = $row; 
      }
    }
    for ($j = 0; $j < sizeof($usersDataArr); $j++) {
      for ($k = 0; $k < sizeof($usersArr); $k++) {
        if ($usersDataArr[$j]['id'] == $usersArr[$k]['idOfSeason']) {
          $array[] = $usersArr[$k] + $usersDataArr[$j];
        }
      }
    }
    return $array;
  }
?>