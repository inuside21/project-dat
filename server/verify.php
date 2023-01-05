<?php

    // Database
    include("../config/config.php");



    // login
    $sql="select * FROM user_tbl where binary user_verifiedcode = '" . $_GET['code'] . "'"; 
    $rsgetacc=mysqli_query($connection,$sql);
    while ($rowsgetacc = mysqli_fetch_object($rsgetacc))
    {
        $sql="update user_tbl set
                user_verified = 1
                where 
            id = '" . $rowsgetacc->id . "'"; 
        $rsgetacc=mysqli_query($connection,$sql);

        // redirect
        header("Location: success.html");
        exit();
    }

    if (mysqli_num_rows($rsgetacc) <= 0 )
    {
        // redirect
        header("Location: failed.html");
        exit();
    }
?>