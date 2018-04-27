<?php
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
  header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

  $mysqli = new mysqli("angularServer", "root", "", "Test");
  $mysqli -> query("SET NAMES 'utf-8'");

  $userId = $mysqli -> query("SELECT * FROM `Goods` WHERE `price` = (SELECT MAX(`price`) FROM `Goods`)");
  print_r(json_encode(getResult($userId)));
  
  $mysqli -> close();

  function getResult($array) {
      $resultArray = array();
      while(($row = $array -> fetch_assoc()) != false) { 
              $resultArray[] = $row;
      }
        return $resultArray;
    }
?>