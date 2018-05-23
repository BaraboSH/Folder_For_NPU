<?php
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
  header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
  $word = $_POST['search'];
  $mysqli = new mysqli("localhost", "root", "", "TeamBD");
  $mysqli -> query("SET NAMES 'utf-8'");
  $usersData = $mysqli -> query("SELECT * FROM `playersInfo`  WHERE `Lname` LIKE '%$word%' ORDER BY `playersInfo`.`id` DESC ");
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