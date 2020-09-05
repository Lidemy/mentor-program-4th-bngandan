<?php
  session_start();
  require_once("conn.php");
  require_once("check_permission.php");
  require_once("utils.php");

  if(empty($_GET["id"])) {
    header("Location: admin.php?errCode=1");
    die("資料不齊全");
  }

  $username = $_SESSION["username"];
  $id = $_GET["id"];
  $user = getUserFromUsername($username);

  $sql = "update bngandan_posts set is_deleted=1 where id=? and username=?";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param("ss", $id, $username);
  $result = $stmt->execute();

  if(!$result) {
    die($conn->error);
  }

  header("Location: admin.php")

?>