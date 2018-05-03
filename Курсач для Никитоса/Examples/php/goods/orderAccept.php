<?php
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
  header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
  $id = $_POST['id'];
  $mysqli = new mysqli("angularServer", "root", "", "myBase");
  $mysqli -> query("SET NAMES 'utf-8'");
  $resultArr;

  //$mysqli -> query("UPDATE `orders` SET `status` = 'accepted' WHERE `orders`.`id` = $id");
  $ordersBody = $mysqli -> query("SELECT * FROM `ordersBody` WHERE `orderId` = $id");
  getPrice($ordersBody);
  $mysqli -> close();
  

  function getPrice($ordersBody) {
    $mysqli = new mysqli("angularServer", "root", "", "myBase");
    $mysqli -> query("SET NAMES 'utf-8'");
    
    while(($row = $ordersBody -> fetch_assoc()) != false) { 
      $productId = $row['productId'];
      $storage = $row['amount'];
      $productStorage = $mysqli -> query("SELECT * FROM `goods` WHERE `id` = $productId");
      $amount = getStorage($productStorage);
      $amount -= $storage;
      $mysqli -> query("UPDATE `goods` SET `storage` = $amount WHERE `goods`.`id` = $productId");
    }
    $mysqli -> close();
  }

function getStorage($productStorage) {
    $str;
    while(($row = $productStorage -> fetch_assoc()) != false) { 
      $str = $row['storage'];
    }
    return $str;
  }
?>