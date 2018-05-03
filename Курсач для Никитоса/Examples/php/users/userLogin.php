<?php
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
  header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
  $email = $_POST['email'];
  $password = $_POST['password'];
  $mysqli = new mysqli("angularServer", "root", "", "myBase");
  $mysqli -> query("SET NAMES 'utf-8'");
  $id = $mysqli -> query("SELECT `id` FROM `usersData` WHERE (`email` = '$email' AND `password` = '$password')");
  $id = getId($id);
  $result_set = $mysqli -> query("SELECT * FROM `users` WHERE `id` = $id");
  if ($result_set) {
    print_r(json_encode($id));
  }
  
  $mysqli -> close();

  function printResult($result_set) {
    $array = array();
    while(($row = $result_set -> fetch_assoc()) != false) { 
            $array[] = $row;
            return $array;
    }
  }
  function getId($id) {
      $idStr;
      while(($row = $id -> fetch_assoc()) != false) { 
              $id = $row;
              $idStr = $id['id'];
          return $idStr;
      }
    }
?>