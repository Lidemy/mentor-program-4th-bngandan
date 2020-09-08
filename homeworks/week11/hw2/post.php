<?php 
  session_start();
  require_once("conn.php");
  require_once("utils.php");
  // require_once("check_permission.php");

  if(empty($_GET["id"])){
    header("Location: index.php?errCode=1");
    die("資料不齊全");
  }

  $id =  intval($_GET["id"]);


  $stmt =$conn->prepare("SELECT P.id as id, P.title as title, P.content as content, P.created_at as created_at, U.nickname as nickname, U.username as username FROM bngandan_posts as P LEFT JOIN bngandan_users as U on P.username = U.username WHERE P.id = ? order by P.id desc ");
  $stmt->bind_param("i", $id);
  $result = $stmt->execute();
  if(!$result){
    die("Error:" . $conn->error);
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
      <article class="post">
        <div class="post__header">
          <h1><?php echo escape($row["title"]) ?></h1>
          <div class="post__actions">
            <?php if(!empty($_SESSION["username"])) { ?>
              <a href="update_post.php?id=<?php echo escape($row["id"]) ?>" class="post__action">編輯</a>
              <a href="handle_delete.php?id=<?php echo escape($row["id"]) ?>" class="post__action">刪除</a>
            <?php } ?>
          </div>
        </div>
        <div class="post__info">
          <img src="image/watch-later-24-px@3x.png" srcset="img/watch-later-24-px@2x.png 2x,img/watch-later-24-px@3x.png 3x" class="watch_later-24px post__info-tag">
          <div class="post__time post__info-tag"><?php echo escape($row["created_at"]) ?></div>
          <img src="image/folder-24-px@3x.png" srcset="img/folder-24-px@2x.png 2x,img/folder-24-px@3x.png 3x" class="folder-24px post__info-tag">
          <div class="post__info-tag">歷史公告</div>
        </div>
        <p class="post__content"><?php echo escape($row["content"]) ?></p>
       
      </article>
      
    </div>
  </div>

  <footer>Copyright © 2020 Who's Blog All Rights Reserved.</footer>


</body>
</html>