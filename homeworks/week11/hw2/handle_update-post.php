<?php
  session_start();
  require_once("conn.php");
  require_once("check_permission.php");

  $page = $_POST["page"];

  if(empty($_POST["id"]) || empty($_POST["title"]) ||empty($_POST["content"])) {
    header("Location: update_post.php?errCode=1&id=".$_POST["id"]);
    die("資料不齊全");
  }

  $username = $_SESSION["username"];
  $id = $_POST["id"];
  $title = $_POST["title"];
  $content = $_POST["content"];


  $sql = "UPDATE bngandan_posts SET title = ?, content = ? WHERE id = ? and username = ?";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param("ssis", $title, $content, $id, $username);
  $result = $stmt->execute();

  if(!$result) {
    die($conn->error);
  }

  header("Location:" . $page);
?>