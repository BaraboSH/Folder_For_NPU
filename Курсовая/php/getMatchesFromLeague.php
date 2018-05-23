<?php
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
  header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
  $mysqli = new mysqli("localhost", "root", "", "TeamBD");
  $mysqli -> query("SET NAMES 'utf-8'");
  $id = $_POST['id'];
  $result_set = $mysqli -> query("SELECT *  FROM `matches` WHERE (`idOfSeason` = '$id')");
  if($result_set != null) {
	  print_r(json_encode(getResult($result_set)));
  }
  $mysqli -> close();
  function getResult($array) {
    $resultArray = array();
    while(($row = $array -> fetch_assoc()) != false) { 
            $resultArray[] = $row;
    }
      return $resultArray;
  }