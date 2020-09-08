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
  <nav class="navbar">
    <div class="wrapper navbar__wrapper">
      <div class="navbar__site-name"><a href="index.php">Who's Blog</a></div>
      <ul class="navbar__list">
        <div>
          <li><a href="#">文章列表</a></li>
          <li><a href="#">分類專區</a></li>
          <li><a href="#">關於我</a></li>
        </div>
        <div>
          <li><a href="admin.html">管理後台</a></li>
          <li><a href="#">登出</a></li>
        </div>
      </ul>
    </div>
  </nav>

  <section class="banner">
    <div class="banner__wrapper">
      <h1>存放技術之地</h1>
      <h3>Welcome to my blog</h3>
    </div>
  </section>

  <div class="container__wrapper">
    <div class="posts">
      <div class="edit__post">
        <form action="" method="POST">
          <div class="edit__post-title">
            發表文章：
          </div>
          <div class="edit__post__input-wrapper">
            <input class="edit__post-input" placeholder="請輸入文章標題" />
          </div>
          <div class="edit__post__input-wrapper">
            <textarea rows="20" class="edit__post-content"></textarea>
          </div>
          <div class="edit__post__btn-wrapper">
            <div class="edit__post-btn">送出</div>
          </div>
      </div>
    </div>
  </div>

  <footer>Copyright © 2020 Who's Blog All Rights Reserved.</footer>


</body>
</html>