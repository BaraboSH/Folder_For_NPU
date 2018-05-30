<?php
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
  header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
  $mysqli = new mysqli("localhost", "root", "", "TeamBD");
  $mysqli -> query("SET NAMES 'utf-8'");
  $players = $mysqli -> query("SELECT * FROM `playersInfo` ORDER BY `id` DESC ");
  $stats = $mysqli -> query("SELECT `playerID` as idPlayer, SUM(`numberofGoals`) as goals,COUNT(CASE WHEN `substitute` > 0 OR `isInStart` = 1 THEN 1 ELSE NULL END) as matches, SUM(`isYellowCards`) as yellowcards, SUM(`isRedCard`) as redcards FROM `gameEvents` GROUP BY `playerID` ORDER BY `id` DESC");
  print_r(json_encode(printResult($players,$stats)));
  
  $mysqli -> close();
  function printResult($players, $stats) {
    $array = array();
    $playersArr = array();
    $statsArr = array();
    while((($row2 = $stats -> fetch_assoc()) != false) ) {
        $statsArr[] = $row2;   
        while((($row = $players -> fetch_assoc()) != false)) {
        $playersArr[] = $row; 
      }
    }
    for ($j = 0; $j < sizeof($playersArr); $j++) {
        $flag = true;
      for ($k = 0; $k < sizeof($statsArr); $k++) {
        if ($statsArr[$k]['idPlayer'] == $playersArr[$j]['id']) {
          $array[] = $playersArr[$j] + $statsArr[$k];
          $flag = false;
        }
      }
      if($flag) {
        $array[] = $playersArr[$j];
      }
    }
    return $array;
  }
?>