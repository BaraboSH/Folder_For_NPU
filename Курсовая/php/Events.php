<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

	$mysqli = new mysqli("localhost", "root", "", "TeamBD");
    $mysqli -> query("SET NAMES 'utf-8'");

    $Match = $_POST['Match'];
    $usersData = $mysqli -> query("SELECT * FROM `gameEvents`  WHERE `gameEvents`.`matchID` = '$Match'");
    $players = $mysqli -> query("SELECT * FROM `playersInfo` ORDER BY `playersInfo`.`id` DESC ");
    $length = sizeof(getResult($players));
        for ($i = 1; $i <= $length; $i++) {
            if(isset($_POST['sostav-'. $i])) {$start = 1;}
            else {$start = 0;}
            if($_POST['substitute-'. $i] == "") {$substitute = 0;}
            else  {$substitute = $_POST['substitute-'. $i];}
            if($_POST['goals-'. $i] == "") {$goals = 0;}
            else {$goals = $_POST['goals-'. $i];}
            if($_POST['ycards-'. $i] == "") {$ycards = 0;}
            else {$ycards = $_POST['ycards-'. $i];}
            if($_POST['rcards-'. $i] == "") {$rcards = 0;}
            else {$rcards = $_POST['rcards-'. $i];}
            if(($myrow=mysqli_fetch_array($mysqli -> query("SELECT * FROM `gameEvents`  WHERE `gameEvents`.`matchID` = '$Match' AND `gameEvents`.`playerID` = '$i'"))) == TRUE)
            {
                $mysqli -> query("UPDATE `gameEvents` SET `isInStart` = '$start', `substitute` = '$substitute', `numberofGoals` = '$goals', `isYellowCards` = '$ycards', `isRedCard` = '$rcards' WHERE (`gameEvents`.`playerID` = $i) AND (`gameEvents`.`matchID` = $Match)");
            }
            else 
            {
                $mysqli -> query("INSERT INTO `gameEvents`(`id`, `playerID`, `matchID`, `isInStart`, `substitute`, `numberofGoals`, `isYellowCards`, `isRedCard`) VALUES (NULL,'$i','$Match','$start','$substitute','$goals','$ycards','$rcards')");
            }
        }
    $mysqli -> close();
    
    function getResult($array) {
        $resultArray = array();
        while(($row = $array -> fetch_assoc()) != false) { 
                $resultArray[] = $row;
        }
          return $resultArray;
      }
?>