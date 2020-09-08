<?php
  require_once("conn.php");
  function escape($str){
    return htmlspecialchars($str, ENT_NOQUOTES);
  }

  function getUserFromUsername($username){
    global $conn;
    // $sql = sprintf("SELECT * FROM user WHERE username=%s", $username);
    // echo $sql;
    // $result = $conn->query($sql);
    $sql = "SELECT * FROM bngandan_users WHERE username=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s",$username);
    $result = $stmt->execute();
    $result = $stmt->get_result();
    $row = $result->fetch_assoc();
    
    return $row; //username, id, nickname, role
  }

?>
