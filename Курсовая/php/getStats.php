<?php
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
  header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
  $mysqli = new mysqli("localhost", "root", "", "TeamBD");
  $mysqli -> query("SET NAMES 'utf-8'");
  $usersData = $mysqli -> query("SELECT `playerID` as id, SUM(`numberofGoals`) as goals,COUNT(CASE WHEN `substitute` > 0 OR `isInStart` = 1 THEN 1 ELSE NULL END) as matches, SUM(`isYellowCards`) as yellowcards, SUM(`isRedCard`) as redcards FROM `gameEvents` GROUP BY `playerID`");
  print_r(json_encode(getResult($usersData)));
  
  $mysqli -> close();

  function getResult($array) {
      $resultArray = array();
      while(($row = $array -> fetch_assoc()) != false) { 
              $resultArray[] = $row;
      }
        return $resultArray;
    }
?>