<?php
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
  header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
  $value = $_POST['value'];
  $category = $_POST['category'];
  $amount = $_POST['amount'];

  $mysqli = new mysqli("angularServer", "root", "", "myBase");
  $mysqli -> query("SET NAMES 'utf-8'");
  $result_set = $mysqli -> query("SELECT * FROM `goods` WHERE `$category` LIKE '%$value%'");
  if ($result_set) {
    print_r(json_encode(printResult($result_set, $amount)));
  }
  $mysqli -> close();

  function printResult($result_set, $amount) {
    $array = array();
    $i = 0;
    while((($row = $result_set -> fetch_assoc()) != false) && $i < $amount) { 
      $array[] = $row;
      $i++;
    }
    return $array;
  }
?>