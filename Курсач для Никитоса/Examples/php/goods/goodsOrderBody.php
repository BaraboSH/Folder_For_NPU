<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
	$id = $_POST['id'];
	$productId = $_POST['productId'];
	$name = $_POST['name'];
	$price = $_POST['price'];
	$currency = $_POST['currency'];
	$amount = $_POST['amount'];
	$type =  $_POST['type'];
    
	$mysqli = new mysqli("angularServer", "root", "", "myBase");
	$mysqli -> query("SET NAMES 'utf-8'");
    if ($name != "undefined" && $name != "" && $id != "undefined" && $price != "undefined" && $amount != "undefined" && $type != "undefined") {
      $mysqli -> query("INSERT INTO `ordersBody` (`orderId`, `productId`, `name`, `price`, `currency`, `amount`, `type`) VALUES ('$id', '$productId', '$name', '$price', '$currency', '$amount', '$type')");
    }
    $orderPrice = $mysqli -> query("SELECT `price` FROM `orders` WHERE `id` = $id");
    $priceStr = getPrice($orderPrice);
    if ($priceStr == "") {
      $mysqli -> query("UPDATE `orders` SET `price` = '$price', `currency` = '$currency'  WHERE `orders`.`id` = $id");
    } else {
      $priceStr += $price;
      $mysqli -> query("UPDATE `orders` SET `price` = '$priceStr' WHERE `orders`.`id` = $id");
    }
	$mysqli -> close();

    function getPrice($price) {
      $str;
      while(($row = $price -> fetch_assoc()) != false) { 
        $str = $row["price"];
      }
        return $str;
    }
?>