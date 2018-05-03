<?php
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
  header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
  $name = $_POST['name'] == "undefined" ? "" : $_POST['name'];
  $surname = $_POST['surname'] == "undefined" ? "" : $_POST['surname'];
  $email = $_POST['email'] == "undefined" ? "" : $_POST['email'];
  $phone = $_POST['phone'] == "undefined" ? "" : $_POST['phone'];
  $amount = $_POST['amount'];

  $mysqli = new mysqli("angularServer", "root", "", "myBase");
  $mysqli -> query("SET NAMES 'utf-8'");
  $resultArr;
  $order = $mysqli -> query("SELECT * FROM `orders` WHERE `name` LIKE '%$name%' AND `surname` LIKE '%$surname%' AND `email` LIKE '%$email%' AND `phone` LIKE '%$phone%' AND `status` = 'waiting'");
  $orderTest = getOrders($order, $amount);
  if ($orderTest) {
    $orderId = $mysqli -> query("SELECT `id` FROM `orders` WHERE `name` LIKE '%$name%' AND `surname` LIKE '%$surname%' AND `email` LIKE '%$email%' AND `phone` LIKE '%$phone%' AND `status` = 'waiting'");
    $arrayId = getId($orderId, $amount);
    
    $orderBody = $mysqli -> query("SELECT * FROM `ordersBody`");

    $resultArr[0] = $orderTest;
    $resultArr[1] = getOrderBody($orderBody, $arrayId);
    print_r(json_encode($resultArr));
  }
  $mysqli -> close();

  function getOrders($result_set, $amount) {
    $array = array();
    $i = 0;
    while((($row = $result_set -> fetch_assoc()) != false) && $i < $amount) { 
      $array[] = $row;
      $i++;
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
  function getId($order, $amount) {
      $array = array();
      $i = 0;
      while((($row = $order -> fetch_assoc()) != false) && $i < $amount) { 
        $array[] = $row["id"];
        $i++;
      }
        return $array;
  }
?>