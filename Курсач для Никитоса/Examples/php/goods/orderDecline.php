<?php
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
  header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
  $id = $_POST['id'];
  $mysqli = new mysqli("angularServer", "root", "", "myBase");
  $mysqli -> query("SET NAMES 'utf-8'");
  $resultArr;

  $order = $mysqli -> query("UPDATE `orders` SET `status` = 'declined' WHERE `orders`.`id` = $id");

  $mysqli -> close();

?>