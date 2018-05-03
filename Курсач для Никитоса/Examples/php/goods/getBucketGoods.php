<?php 
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
  header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
  $id = $_POST['id'];
  $array = explode(",", $id);
  $mysqli = new mysqli("angularServer", "root", "", "myBase");
  $mysqli -> query("SET NAMES 'utf-8'");
  $resultObj;
  for ($i = 0; $i < sizeof($array); $i++) {
    $result_set = $mysqli -> query("SELECT * FROM `goods` WHERE `id` = $array[$i]");
    if ($result_set) {
      $resultObj[$i] = printResult($result_set);
    }
  }
  print_r(json_encode($resultObj));
  $mysqli -> close();

  function printResult($result_set) {
    while(($row = $result_set -> fetch_assoc()) != false) { 
      return $row;
    }
  }
?>