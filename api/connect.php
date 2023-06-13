<?php
// db credentials

    $connect = mysqli_connect("localhost", "root", "", "angular");

    if(!$connect){
      die("failed:".mysqli_connect_error());
  }else{
      return 'database connected';
  }
?>