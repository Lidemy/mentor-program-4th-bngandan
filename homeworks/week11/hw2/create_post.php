<?php 
  session_start();
  require_once("conn.php");
  require_once("utils.php");
  require_once("check_permission.php");
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="normalize.css">
  <link rel="stylesheet" href="style.css">
  <title>Blog</title>
</head>
<body>
  <?php include_once("header.php") ?>

  <section class="banner">
    <div class="banner__wrapper">
      <h1>存放技術之地</h1>
      <h3>Welcome to my blog</h3>
    </div>
  </section>

  <div class="container__wrapper">
    <div class="posts">
      <div class="edit__post">
        <form action="handle_create-post.php" method="POST">
          <div class="edit__post-title">
            發表文章：
          </div>
          <div class="edit__post__input-wrapper">
            <input class="edit__post-input" placeholder="請輸入文章標題"  name="title" />
          </div>
          <div class="edit__post__input-wrapper">
            <textarea rows="20" class="edit__post-content" name="content"></textarea>
          </div>
          <div class="edit__post__btn-wrapper">
            <input type="submit" class="edit__post-btn" value="送出">
          </div>
      </div>
    </div>
  </div>

  <footer>Copyright © 2020 Who's Blog All Rights Reserved.</footer>


</body>
</html>