<?php
  session_start();
  require_once("conn.php");
  require_once("utils.php");

  if(empty($_GET["id"])) {
    header("Location: index.php?errCode=1");
    die("資料不齊全");
  }

  $username = $_SESSION["username"];
  $id = $_GET["id"];
  $user = getUserFromUsername($username);

  $sql = "update bngandan_comments set is_deleted=1 where id=? and username=?";
  if(isAdmin($user)){
    $sql = "update bngandan_comments set is_deleted=1 where id=?";
  }
  $stmt = $conn->prepare($sql);
  if(isAdmin($user)){
    $stmt->bind_param("i", $id);
  }else{
    $stmt->bind_param("is", $id, $username);
  }
  
  $result = $stmt->execute();
  if(!$result){
    die($conn->error);
  }

  header("Location: index.php");
?>