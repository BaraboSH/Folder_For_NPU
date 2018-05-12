<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
	$id = $_POST['id'];
	$mysqli = new mysqli("localhost", "root", "", "TeamBD");
  	$mysqli -> query("SET NAMES 'utf-8'");

    $mysqli -> query("DELETE FROM `playersInfo` WHERE `playersInfo`.`id` = $id");

	$mysqli -> close();
?>