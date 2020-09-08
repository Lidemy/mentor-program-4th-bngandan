<?php
  session_start();
  require_once("conn.php");

  if(empty($_POST["nickname"])) {
    header("Location: index.php?errCode=1");
    die("資料不齊全");
  }

  $username = $_SESSION["username"];
  $nickname = $_POST["nickname"];

  $sql = "update bngandan_users set nickname=? where username=?";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param("ss", $nickname, $username);
  $result = $stmt->execute();
  if(!$result){
    die($conn->error);
  }

  $_SESSION["nickname"] = $nickname;
  header("Location: index.php");
?>