<?php 
  session_start();
  require_once("conn.php");
  require_once("utils.php");
  require_once("check_permission.php");


  $stmt =$conn->prepare("SELECT P.id as id, P.title as title, P.content as content, P.created_at as created_at, U.nickname as nickname, U.username as username FROM bngandan_posts as P LEFT JOIN bngandan_users as U on P.username = U.username WHERE P.is_deleted IS NULL order by P.id desc ");
  $result = $stmt->execute();
  if(!$result){
    die("Error:" . $conn->error);
  }
  $result = $stmt->get_result();
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
    <div class="admin__posts">
      <?php while ($row = $result->fetch_assoc()) { ?>
        <div class="admin__post">
          <h1 class="admin__post-title"><?php echo escape($row["title"]) ?></h1>
          <div class="admin__post-info">
            <div class="admin__post__created-at"><?php echo escape($row["created_at"]) ?></div>
            <a class="admin__post-btn" href="update_post.php?id=<?php echo escape($row['id']) ?>">編輯</a>
            <a class="admin__post-btn" href="handle_delete.php?id=<?php echo escape($row['id']) ?>">刪除</a>
          </div>
        </div>
      <?php } ?>
      
    </div> 
  </div>

  <footer>Copyright © 2020 Who's Blog All Rights Reserved.</footer>

</body>
</html>