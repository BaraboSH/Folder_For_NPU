<?php
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
  header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
  $min = $_POST['min'] == "undefined" ? 0 : $_POST['min'];
  $max = $_POST['max'] == "undefined" ? 1000000 : $_POST['max'];
  $type = $_POST['type'] == "undefined" ? "" : $_POST['type'];
  $name = $_POST['name'] == "undefined" ? "" : $_POST['name'];
  $orderValue = $_POST['orderValue'] == "undefined" ? "none" : $_POST['orderValue'];
  $amount = $_POST['amount'];

  $mysqli = new mysqli("angularServer", "root", "", "myBase");
  $mysqli -> query("SET NAMES 'utf-8'");
  $result_set = $mysqli -> query("SELECT * FROM `goods` WHERE `type` LIKE '%$type%' AND `name` LIKE '%$name%'");
  if ($result_set) {
    print_r(json_encode(printResult($result_set, $amount, $min, $max, $orderValue)));
  }
  $mysqli -> close();

  function printResult($result_set, $amount, $min, $max, $orderValue) {
    $arr = array();
    $i = 0;
    while((($row = $result_set -> fetch_assoc()) != false)) {
      if ($row["price"] >= $min && $row["price"] <= $max) {
        $arr[] = $row;
        $i++;
      }
    }
    if ($orderValue != 'none') {
      for($i = 0; $i < count($arr); $i++) {
          for($j = $i + 1;  $j<count($arr ); $j++) {
             if ($orderValue == 'true') {
              if($arr[$i]['price'] > $arr[$j]['price']) {
                   $temp = $arr[$j];
                   $arr[$j] = $arr[$i];
                   $arr[$i] = $temp;
               }
             } else {
               if($arr[$i]['price'] < $arr[$j]['price']) {
                   $temp = $arr[$j];
                   $arr[$j] = $arr[$i];
                   $arr[$i] = $temp;
               }
             }
          }         
       }
      return array_splice($arr, 0, $amount);
    }
    return $arr;
  }
?>