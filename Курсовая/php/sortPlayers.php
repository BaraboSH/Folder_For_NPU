<?php
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
  header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
  $pos = $_POST['position'];
  $mysqli = new mysqli("localhost", "root", "", "TeamBD");
  $mysqli -> query("SET NAMES 'utf-8'");
  $players = $mysqli -> query("SELECT * FROM `playersInfo` WHERE `playersInfo`.`position` = '$pos'");
  $stats = $mysqli -> query("SELECT `playerID` as id, SUM(`numberofGoals`) as goals,COUNT(CASE WHEN `substitute` > 0 OR `isInStart` = 1 THEN 1 ELSE NULL END) as matches, SUM(`isYellowCards`) as yellowcards, SUM(`isRedCard`) as redcards FROM `gameEvents` GROUP BY `playerID` ORDER BY `id` DESC");
  print_r(json_encode(printResult($players,$stats)));
  
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
        if ($usersDataArr[$j]['id'] == $usersArr[$k]['id']) {
          $array[] = $usersArr[$k] + $usersDataArr[$j];
        }
      }
    }
    return $array;
  }
?>