<?php
  session_start();
  require_once("conn.php");
  require_once("utils.php");

  if(empty($_POST["content"]) || empty($_POST["title"])){
    header("Location: create_post.php?errCode=1"); //創建文章有少資料就顯示資料不齊全
    die("資料不齊全");
  }

  $username = $_SESSION["username"];
  $user = getUserFromUsername($username);

  $content = $_POST["content"];
  $title = $_POST["title"];

  $sql = "INSERT INTO bngandan_posts(username, title, content) VALUES (?, ?, ?)";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param("sss", $username, $title, $content);
  $result = $stmt->execute();

  if(!$result){
    die($conn->error);
  }

  header("Location: admin.php");
?>