<?php 
  session_start();
  require_once("conn.php");
  require_once("utils.php");
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

  <div class="login__wrapper">
    <h1>Log In</h1>
    <form action="handle_login.php" method="POST">
      <?php 
      if(!empty($_GET["errCode"])) {
        if($_GET["errCode"] == "1") {
          echo "<div class='error'>錯誤：輸入資料不齊全</div>";
        } else {
          echo "<div class='error'>錯誤：帳號或密碼輸入錯誤</div>";
        }
      }?>

      <div class="input__wrapper">
        <div class="input__label">USERNAME</div>
        <input class="input__field" type="text" name="username">
      </div>

      <div class="input__wrapper">
        <div class="input__label">PASSWORD</div>
        <input class="input__field" type="password" name="password">
      </div>

      <input type="submit" value="SIGN IN">
    </form>
  </div>
  
  <div class="empty"></div>

  <footer>Copyright © 2020 Who's Blog All Rights Reserved.</footer>


</body>
</html>