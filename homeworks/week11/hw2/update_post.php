<?php 
  session_start();
  require_once("conn.php");
  require_once("utils.php");
  require_once("check_permission.php");

  $id = $_GET["id"];
  $username = $_SESSION["username"];

  $sql = "SELECT * FROM bngandan_posts WHERE id = ? and username = ?";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param("ss", $id, $username);
  $result = $stmt->execute();

  if(!$result){
    die("ERROR:" . $conn->error);
  }

  $result = $stmt->get_result();
  $row = $result->fetch_assoc();
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
        <form action="handle_update-post.php" method="POST">
          <div class="edit__post-title">
            編輯文章：
          </div>
          <?php
            if(!empty($_GET["errCode"])){
              if($_GET["errCode"] === "1"){
                echo "<div class='error'>錯誤：資料不齊全</div>";
              }
            }
          ?>
          <div class="edit__post__input-wrapper">
            <input class="edit__post-input" placeholder="請輸入文章標題"  name="title"  value="<?php echo escape($row["title"]) ?>" />
          </div>
          <div class="edit__post__input-wrapper">
            <textarea rows="20" class="edit__post-content" name="content"><?php echo escape($row["content"]) ?></textarea>
          </div>
          <input type="hidden" name="id" value="<?php echo escape($row["id"]) ?>">
          <div class="edit__post__btn-wrapper">
            <input type="submit" class="edit__post-btn" value="送出">
          </div>
          <input type="hidden" name="page" value="<?php echo $_SERVER['HTTP_REFERER'] ?>">
      </div>
    </div>
  </div>

  <footer>Copyright © 2020 Who's Blog All Rights Reserved.</footer>


</body>
</html>