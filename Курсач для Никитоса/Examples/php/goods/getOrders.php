<?php
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
  header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
  $email = $_POST['email'];
  $mysqli = new mysqli("angularServer", "root", "", "myBase");
  $mysqli -> query("SET NAMES 'utf-8'");
  $resultArr;

  $order = $mysqli -> query("SELECT DISTINCT `id`, `type`, `date`, `price`, `currency`, `status` FROM `orders` WHERE `email` = '$email'");
  $orderTest = getOrders($order);

  if ($orderTest) {
    $orderId = $mysqli -> query("SELECT `id` FROM `orders` WHERE `email` = '$email'");
    $arrayId = getId($orderId);
    
    $orderBody = $mysqli -> query("SELECT * FROM `ordersBody`");

    $resultArr[0] = $orderTest;
    $resultArr[1] = getOrderBody($orderBody, $arrayId);
    print_r(json_encode($resultArr));
  }
  $mysqli -> close();

  function getOrders($result_set) {
    $array = array();
    while(($row = $result_set -> fetch_assoc()) != false) { 
      $array[] = $row;
    }
      return $array;
  }
  function getOrderBody($result_set, $arrayId) {
      $array = array();
      $i = 0;
      while(($row = $result_set -> fetch_assoc()) != false) {
        for ($j = 0; $j < sizeof($arrayId); $j++) {
          if ($row['orderId'] == $arrayId[$j]) {
            $array[] = $row;
          }
        }
      }
        return $array;
    }
  function getId($order) {
      $array = array();
      while(($row = $order -> fetch_assoc()) != false) { 
        $array[] = $row["id"];
      }
        return $array;
  }
?>