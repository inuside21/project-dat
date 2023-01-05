<?php

    // Database
    include("../config/config.php");

    // check
    if (!isset($_GET['mode'])) {
        echo json_encode(array("status" => "error", "message" => "Mode Error"));
        exit();
    }


    /*
        $last_id = mysqli_insert_id($connection);
    */




    /*
        ======================================
        MODES
        ======================================
    */
    // User - Login
    // ----------------------
    if ($_GET['mode'] == '1')
    {
        $resData = JSONGet();

        // check
        {
            if (!isset($resData->dUser) || !isset($resData->dPass)) 
            {
                // result
                JSONSet("error", "Login Error", "Check your input1.");
            }

            if (ctype_space($resData->dUser) || ctype_space($resData->dPass) || $resData->dUser == "" || $resData->dPass == "")
            {
                // result
                JSONSet("error", "Login Error", "Check your input2.");
            }
        }

        // login
        $sql="select * FROM user_tbl where binary user_uname = '" . $resData->dUser . "' and binary user_pword = '" . $resData->dPass . "'"; 
        $rsgetacc=mysqli_query($connection,$sql);
        while ($rowsgetacc = mysqli_fetch_object($rsgetacc))
        {
            if ($rowsgetacc->user_verified != "1")
            {
                // result
                JSONSet("error", "Login Error", "verify your email.");
            }

            if ($rowsgetacc->user_active == "0")
            {
                // result
                JSONSet("error", "Login Error", "Account is on hold.");
            }

            JSONSet("ok", "", "", $rowsgetacc);
        }

        // result
        JSONSet("error", "Login Error", "Check your input3.");
    }

    // User - Register
    // ----------------------
    if ($_GET['mode'] == '2')
    {
        $resData = JSONGet();

        // check
        {
            if (!isset($resData->dUser) || !isset($resData->dPass) || !isset($resData->dFname) || !isset($resData->dContact) || !isset($resData->dAddress)) 
            {
                // result
                JSONSet("error", "Register Error", "Check your input1.");
            }

            if (ctype_space($resData->dUser) || ctype_space($resData->dPass) || $resData->dUser == "" || $resData->dPass == "")
            {
                // result
                JSONSet("error", "Register Error", "Check your input2.");
            }
        }

        // check exist
        {
            $sql="select * FROM user_tbl where binary user_uname = '" . $resData->dUser . "'"; 
            $rsgetacc=mysqli_query($connection,$sql);
            while ($rowsgetacc = mysqli_fetch_object($rsgetacc))
            {
                // result
                JSONSet("error", "Register Error", "User already exist.");
            }
        }

        // code
        $code = GUID();

        // register
        {
            $sql = "insert into user_tbl
                        (
                            user_date,
                            user_uname,
                            user_pword,
                            user_fname,
                            user_contact,
                            user_address,
                            user_verifiedcode
                        )
                    values
                        (
                            '" . $dateResult . "',
                            '" . $resData->dUser . "',
                            '" . $resData->dPass . "',
                            '" . $resData->dFname . "',
                            '" . $resData->dContact . "',
                            '" . $resData->dAddress . "',
                            '" . $code . "'
                        )
            ";
            $rsgetacc=mysqli_query($connection,$sql);
        }

        // send email
        $to = $resData->dUser;
        $subject = "DAT - Verify Email";
        $txt = "
                <center>
                    verify here: http://agri-dat.online/server/verify.php?code=" . $code . "
                </center>
        ";        
        $headers = "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
        $headers .= "From: admin@agri-dat.online";
        mail($to,$subject,$txt,$headers);
        
        // result
        JSONSet("ok", "Registration Success!", "Please check your email account for verification.");
    }

    // User - List
    // ----------------------
    if ($_GET['mode'] == 'userlist')
    {
        $resData = JSONGet();

        // set
        $rData = array();

        // Category
        $sql="select * FROM user_tbl where user_admin != '1'"; 
        $rsgetcat=mysqli_query($connection,$sql);
        while ($rowsgetcat = mysqli_fetch_object($rsgetcat))
        {
            // User
            $rData[] = $rowsgetcat;
        }

        // result
        JSONSet("ok", "", "", $rData);
    }

    // User - Hold
    // ----------------------
    if ($_GET['mode'] == 'userhold')
    {
        $resData = JSONGet();

        // set
        $rData = array();

        $sql="update user_tbl set user_active = '0' where id = '" . $resData->uid . "'"; 
        $rsgetcat=mysqli_query($connection,$sql);

        // Category
        $sql="select * FROM user_tbl where user_admin != '1'"; 
        $rsgetcat=mysqli_query($connection,$sql);
        while ($rowsgetcat = mysqli_fetch_object($rsgetcat))
        {
            // User
            $rData[] = $rowsgetcat;
        }

        // result
        JSONSet("ok", "Account Update", "Account successfully hold.", $rData);
    }

    // User - Unhold
    // ----------------------
    if ($_GET['mode'] == 'userunhold')
    {
        $resData = JSONGet();

        // set
        $rData = array();

        $sql="update user_tbl set user_active = '1' where id = '" . $resData->uid . "'"; 
        $rsgetcat=mysqli_query($connection,$sql);

        // Category
        $sql="select * FROM user_tbl where user_admin != '1'"; 
        $rsgetcat=mysqli_query($connection,$sql);
        while ($rowsgetcat = mysqli_fetch_object($rsgetcat))
        {
            // User
            $rData[] = $rowsgetcat;
        }

        // result
        JSONSet("ok", "Account Update", "Account successfully unhold.", $rData);
    }

    // User - Delete
    // ----------------------
    if ($_GET['mode'] == 'userdelete')
    {
        $resData = JSONGet();

        // set
        $rData = array();

        $sql="deletet from user_tbl where id = '" . $resData->uid . "'"; 
        $rsgetcat=mysqli_query($connection,$sql);

        //
        $sql="deletet from trading_tbl where user_id = '" . $resData->uid . "'"; 
        $rsgetcat=mysqli_query($connection,$sql);

        //
        $sql="deletet from equipment_tbl where user_id = '" . $resData->uid . "'"; 
        $rsgetcat=mysqli_query($connection,$sql);

        //
        $sql="deletet from support_tbl where user_id = '" . $resData->uid . "'"; 
        $rsgetcat=mysqli_query($connection,$sql);

        //
        $sql="deletet from transaction_tbl where trans_seller = '" . $resData->uid . "' or trans_buyer = '" . $resData->uid . "'"; 
        $rsgetcat=mysqli_query($connection,$sql);

        //
        $sql="deletet from message_tbl where msg_to = '" . $resData->uid . "' or msg_from = '" . $resData->uid . "'"; 
        $rsgetcat=mysqli_query($connection,$sql);

        // Category
        $sql="select * FROM user_tbl where user_admin != '1'"; 
        $rsgetcat=mysqli_query($connection,$sql);
        while ($rowsgetcat = mysqli_fetch_object($rsgetcat))
        {
            // User
            $rData[] = $rowsgetcat;
        }

        // result
        JSONSet("ok", "Account Update", "Account successfully removed.", $rData);
    }

    // User - Transaction Report Data List
    // ----------------------
    if ($_GET['mode'] == 'transreportlist')
    {
        $resData = JSONGet();

        // set
        $rData = array();

        // Category
        $sql="select * FROM transactionreport_tbl"; 
        $rsgetcat=mysqli_query($connection,$sql);
        while ($rowsgetcat = mysqli_fetch_object($rsgetcat))
        {
            // Category
            $sql="select * FROM user_tbl where id = '" . $rowsgetcat->trans_seller . "'"; 
            $rsgetuser=mysqli_query($connection,$sql);
            while ($rowsgetuser = mysqli_fetch_object($rsgetuser))
            {
                // User
                $rowsgetcat->useller = $rowsgetuser;
                $rData[] = $rowsgetcat;
            }
        }

        // result
        JSONSet("ok", "", "", $rData);
    }
    
    // User - Transaction Report Data View
    // ----------------------
    if ($_GET['mode'] == 'transreport')
    {
        $resData = JSONGet();

        // set
        $rData = new stdClass();

        // Category
        $sql="select * FROM transactionreport_tbl where id = '" . $resData->tid . "'"; 
        $rsgetcat=mysqli_query($connection,$sql);
        while ($rowsgetcat = mysqli_fetch_object($rsgetcat))
        {
            // Category
            $sql="select * FROM transactionreportimg_tbl where trans_report_id = '" . $rowsgetcat->id . "'"; 
            $rsgetimg=mysqli_query($connection,$sql);
            while ($rowsgetimg = mysqli_fetch_object($rsgetimg))
            {
                // User
                $rowsgetcat->timg[] = $rowsgetimg;
                $rData = $rowsgetcat;
            }
        }

        // result
        JSONSet("ok", "", "", $rData);
    }

    // User - Transaction Report Data Create
    // ----------------------
    if ($_GET['mode'] == 'transreportcreate')
    {
        $resData = JSONGet();

        // set
        $rData = new stdClass();

        // Category
        $sql="insert into transactionreport_tbl
                (
                    id,
                    trans_type,
                    trans_item,
                    trans_seller,
                    trans_buyer,
                    trans_status,
                    trans_return,
                    trans_date,
                    trans_amt,
                    trans_qty,
                    trans_report_msg
                )
            values
                (
                    '" . $resData->tdata->id . "',
                    '" . $resData->tdata->trans_type . "',
                    '" . $resData->tdata->trans_item . "',
                    '" . $resData->tdata->trans_seller . "',
                    '" . $resData->tdata->trans_buyer . "',
                    '" . $resData->tdata->trans_status . "',
                    '" . $resData->tdata->trans_return . "',
                    '" . $resData->tdata->trans_date . "',
                    '" . $resData->tdata->trans_amt . "',
                    '" . $resData->tdata->trans_qty . "',
                    '" . $resData->tmsg . "'
                )
            "; 
        $rsgetcat=mysqli_query($connection,$sql);

        // image
        foreach($resData->timg as $img)
        {
            $fileId = GUID() . ".png";
            file_put_contents("image/" . $fileId, base64_decode($img->base64));

            // insert
            {
                $sql = "insert into transactionreportimg_tbl
                            (
                                trans_report_id,
                                trans_report_img
                            )
                        values
                            (
                                '" . $resData->tid . "',
                                '" . $fileId . "'
                            )
                ";
                $rsgetacc=mysqli_query($connection,$sql);
            }
        }

        // result
        JSONSet("ok", "", "", $rData);
    }

    // User - List
    // ----------------------
    if ($_GET['mode'] == '3')
    {
        $resData = JSONGet();

        // set
        $rData = array();

        // Category
        $sql="select * FROM user_dept_tbl"; 
        $rsgetcat=mysqli_query($connection,$sql);
        while ($rowsgetcat = mysqli_fetch_object($rsgetcat))
        {
            // User
            $resArray = array();
            $sql="select * FROM user_tbl where user_dept = '" . $rowsgetcat->dept_name . "' and id != '" . $resData->id . "'"; 
            $rsgetacc=mysqli_query($connection,$sql);
            while ($rowsgetacc = mysqli_fetch_object($rsgetacc))
            {
                // notif
                {
                    // action: report
                    if ($resData->aMode == "0")
                    {
                        $rowsgetacc->isNotif = "0";
                        $sql="select count(*) as nCount FROM notif_tbl where notif_user = '" . $resData->id . "' and notif_ref = '" . $rowsgetacc->id . "' and notif_type = 'report'"; 
                        $rsgetnotif=mysqli_query($connection,$sql);
                        while ($rowsgetnotif = mysqli_fetch_object($rsgetnotif))
                        {
                            $rowsgetacc->isNotif = $rowsgetnotif->nCount;
                        }
                    }
                }

                // out
                $resArray[] = $rowsgetacc;
            }

            // Insert
            if (count($resArray) > 0)
            {
                $tempData = new stdClass();
                $tempData->title = $rowsgetcat->dept_name;
                $tempData->data = $resArray;

                $rData[] = $tempData;
            }
        }

        // result
        JSONSet("ok", "", "", $rData);
    }

    // User - Update
    // ----------------------
    if ($_GET['mode'] == '4')
    {
        
        $resData = JSONGet();

        // check
        {

            if (ctype_space($resData->formPword) || $resData->formPword == "") 
            {
                // result
                JSONSet("error", "Account Update Failed", "Check input1.");
            }

            if (ctype_space($resData->formFname) || $resData->formFname == "") 
            {
                // result
                JSONSet("error", "Account Update Failed", "Check input2.");
            }

            if (ctype_space($resData->formGender) || $resData->formGender == "") 
            {
                // result
                JSONSet("error", "Account Update Failed", "Check input4.");
            }

            if (ctype_space($resData->formContact) || $resData->formContact == "") 
            {
                // result
                JSONSet("error", "Account Update Failed", "Check input5.");
            }

            if (ctype_space($resData->formAddress) || $resData->formAddress == "") 
            {
                // result
                JSONSet("error", "Account Update Failed", "Check input6.");
            }
        }

        // image?
        if ($resData->formImage != "")
        {
            // update image
            $fileId = GUID() . ".png";
            file_put_contents("image/" . $fileId, base64_decode($resData->formImage));

            // insert
            $sql="update user_tbl set
                        user_pword = '" . $resData->formPword . "',
                        user_fname = '" . $resData->formFname . "',
                        user_gender = '" . $resData->formGender . "',
                        user_contact = '" . $resData->formContact . "',
                        user_address = '" . $resData->formAddress . "',
                        user_pic = '" . $fileId . "'
                where
                    id = '" . $resData->uid . "'
            "; 
            $rssetreport=mysqli_query($connection,$sql);
        }
        else
        {
            // insert
            $sql="update user_tbl set
                        user_pword = '" . $resData->formPword . "',
                        user_fname = '" . $resData->formFname . "',
                        user_gender = '" . $resData->formGender . "',
                        user_contact = '" . $resData->formContact . "',
                        user_address = '" . $resData->formAddress . "'
                where
                    id = '" . $resData->uid . "'
            "; 
            $rssetreport=mysqli_query($connection,$sql);
        }

        JSONSet("ok", "Account Update Success", "Your account is successfully updated.");
    }

    // User - Reset
    // ----------------------
    if ($_GET['mode'] == '5')
    {
        
        $resData = JSONGet();

        // check
        {
            if (ctype_space($resData->dUser) || $resData->dUser == "") 
            {
                // result
                JSONSet("error", "Account Update Failed", "Check input.");
            }
        }

        // login
        $sql="select * FROM user_tbl where binary user_uname = '" . $resData->dUser . "'"; 
        $rsgetacc=mysqli_query($connection,$sql);
        while ($rowsgetacc = mysqli_fetch_object($rsgetacc))
        {
             // code
            $code = GUID();

            $sql="update user_tbl set
                user_pword = '" . $code . "'
                where 
            id = '" . $rowsgetacc->id . "'"; 
        $rsgetacc=mysqli_query($connection,$sql);

            // send email
            $to = $resData->dUser;
            $subject = "DAT - New Pass";
            $txt = "
                    <center>
                        new pass: " . $code . "
                    </center>
            ";        
            $headers = "MIME-Version: 1.0\r\n";
            $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
            $headers .= "From: admin@agri-dat.online";
            mail($to,$subject,$txt,$headers);
        }

        

        JSONSet("ok", "Account Updated", "Your new pass was sent to your email");
    }

    // User - View
    // ----------------------
    if ($_GET['mode'] == '6')
    {
        $resData = JSONGet();

        // login
        $sql="select * FROM user_tbl where id = '" . $resData->id . "'"; 
        $rsgetacc=mysqli_query($connection,$sql);
        while ($rowsgetacc = mysqli_fetch_object($rsgetacc))
        {
            JSONSet("ok", "", "", $rowsgetacc);
        }
    }



    // Category 
    // ----------------------
    if ($_GET['mode'] == '10')
    {
        $resData = JSONGet();
        
        // Trading Category
        if ($resData->sid == "0")
        {
            $resArr = array();

            $sql="select * FROM trading_cat_tbl"; 
            $rsgetacc=mysqli_query($connection,$sql);
            while ($rowsgetacc = mysqli_fetch_object($rsgetacc))
            {
                $tempObj = new stdClass();
                $tempObj->dName = $rowsgetacc->cat_name;

                $resArr[] = $tempObj;
            }

            JSONSet("ok", "", "", $resArr);
        }

        // Trading Classification
        if ($resData->sid == "1")
        {
            $resArr = array();

            $sql="select * FROM trading_status_tbl"; 
            $rsgetacc=mysqli_query($connection,$sql);
            while ($rowsgetacc = mysqli_fetch_object($rsgetacc))
            {
                $tempObj = new stdClass();
                $tempObj->dName = $rowsgetacc->status_name;

                $resArr[] = $tempObj;
            }

            JSONSet("ok", "", "", $resArr);
        }

        // Equipment Category
        if ($resData->sid == "2")
        {
            $resArr = array();

            $sql="select * FROM equipment_cat_tbl"; 
            $rsgetacc=mysqli_query($connection,$sql);
            while ($rowsgetacc = mysqli_fetch_object($rsgetacc))
            {
                $tempObj = new stdClass();
                $tempObj->dName = $rowsgetacc->cat_name;

                $resArr[] = $tempObj;
            }

            JSONSet("ok", "", "", $resArr);
        }

        // Equipment Classification
        if ($resData->sid == "3")
        {
            $resArr = array();

            $sql="select * FROM equipment_status_tbl"; 
            $rsgetacc=mysqli_query($connection,$sql);
            while ($rowsgetacc = mysqli_fetch_object($rsgetacc))
            {
                $tempObj = new stdClass();
                $tempObj->dName = $rowsgetacc->status_name;

                $resArr[] = $tempObj;
            }

            JSONSet("ok", "", "", $resArr);
        }

        // Support Category
        if ($resData->sid == "4")
        {
            $resArr = array();

            $sql="select * FROM support_cat_tbl"; 
            $rsgetacc=mysqli_query($connection,$sql);
            while ($rowsgetacc = mysqli_fetch_object($rsgetacc))
            {
                $tempObj = new stdClass();
                $tempObj->dName = $rowsgetacc->cat_name;

                $resArr[] = $tempObj;
            }

            JSONSet("ok", "", "", $resArr);
        }
    }


    // Trading - Add
    // ----------------------
    if ($_GET['mode'] == '20')
    {
        $resData = JSONGet();

        // check
        {
            if (!is_numeric($resData->formQty) || $resData->formQty <= 0) 
            {
                // result
                JSONSet("error", "Error", "Check your input1.");
            }
        }

        // update
        {
            $sql = "insert into trading_tbl
                        (
                            user_id,
                            trading_cat,
                            trading_status,
                            trading_name,
                            trading_location,
                            trading_desc,
                            trading_qty,
                            trading_uom
                        )
                    values
                        (
                            '" . $resData->uid . "',
                            '" . $resData->formCat . "',
                            '" . $resData->formClass . "',
                            '" . $resData->formName . "',
                            '" . $resData->formLocation . "',
                            '" . $resData->formDesc . "',
                            '" . $resData->formQty . "',
                            '" . $resData->formUnit . "'
                        )
            ";
            $rsgetacc=mysqli_query($connection,$sql);
            $getId = mysqli_insert_id($connection);
        }

        // image
        foreach($resData->formImage as $rData)
        {
            $fileId = GUID() . ".png";
            file_put_contents("image/" . $fileId, base64_decode($rData->base64));

            // insert
            {
                $sql = "insert into trading_img_tbl
                            (
                                trading_id,
                                img_name
                            )
                        values
                            (
                                '" . $getId . "',
                                '" . $fileId . "'
                            )
                ";
                $rsgetacc=mysqli_query($connection,$sql);
            }
        }
        
        // result
        JSONSet("ok", "New Post Added!", "Your new post is successfully added.");
    }

    // Trading - Update
    // ----------------------
    if ($_GET['mode'] == '21')
    {
        $resData = JSONGet();

        // check
        {
            if (!is_numeric($resData->formQty) || $resData->formQty <= 0) 
            {
                // result
                JSONSet("error", "Error", "Check your input1.");
            }
        }

        // update
        {
            $sql = "update trading_tbl set
                        trading_cat = '" . $resData->formCat . "',
                        trading_status = '" . $resData->formClass . "',
                        trading_name = '" . $resData->formName . "',
                        trading_location = '" . $resData->formLocation . "',
                        trading_desc = '" . $resData->formDesc . "',
                        trading_qty = '" . $resData->formQty . "',
                        trading_uom = '" . $resData->formUnit . "'
                    where id = '" . $resData->pid . "'
            ";
            $rsgetacc=mysqli_query($connection,$sql);
        }
        
        // result
        JSONSet("ok", "Post Updated!", "Your post is successfully updated.");
    }

    // Trading - View
    // ----------------------
    if ($_GET['mode'] == '22')
    {
        $resData = JSONGet();

        // 
        $tradingData = new stdClass();

        // data
        $sql="select * FROM trading_tbl where id = '" . $resData->id . "'"; 
        $rsgetacc=mysqli_query($connection,$sql);
        while ($rowsgetacc = mysqli_fetch_object($rsgetacc))
        {
            $tradingData->info = $rowsgetacc;
            $tradingData->type = 0;
        }

        // user
        $sql="select * FROM user_tbl where id = '" . $tradingData->info->user_id . "'"; 
        $rsgetacc=mysqli_query($connection,$sql);
        while ($rowsgetacc = mysqli_fetch_object($rsgetacc))
        {
            $tradingData->user = $rowsgetacc;
        }

        // img
        $sql="select * FROM trading_img_tbl where trading_id = '" . $resData->id . "'"; 
        $rsgetacc=mysqli_query($connection,$sql);
        while ($rowsgetacc = mysqli_fetch_object($rsgetacc))
        {
            $tradingData->img[] = $rowsgetacc;
        }

        // return
        JSONSet("ok", "", "", $tradingData);
    }

    // Trading - Search
    // ----------------------
    if ($_GET['mode'] == '23')
    {
        $resData = JSONGet();

        // 
        $tradingData = new stdClass();

        // category
        $sql = "select * from trading_cat_tbl where cat_name like '%" . $resData->sCat . "%'";
        $rsgetcat=mysqli_query($connection,$sql);
        while ($rowscat = mysqli_fetch_object($rsgetcat))
        {
            $tradingData->cat = $rowscat;
            $tradingData->smode = "22";
        }

        // list
        $sql="select * FROM trading_tbl where trading_cat like '%" . $resData->sCat . "%' and trading_status like '%" . $resData->sSta . "%' order by id asc"; 
        $rsgetacc=mysqli_query($connection,$sql);
        while ($rowsgetacc = mysqli_fetch_object($rsgetacc))
        {
             // image
             $targetimage = "none.png";
             $sql="select * FROM trading_img_tbl where trading_id = '" . $rowsgetacc->id . "'"; 
             $rsgetimg=mysqli_query($connection,$sql);
             while ($rowsimg = mysqli_fetch_object($rsgetimg))
             {
                 $targetimage = $rowsimg->img_name;
             }

            // user
            $sql = "select * from user_tbl where id = '" . $rowsgetacc->user_id . "'";
            $rsgetuser=mysqli_query($connection,$sql);
            while ($rowsuser = mysqli_fetch_object($rsgetuser))
            {
                $rowsgetacc->user = $rowsuser;
                $rowsgetacc->img = $targetimage;
            }

            $tradingData->list[] = $rowsgetacc;
        }

        // return
        JSONSet("ok", "", "", $tradingData);
    }

    // Trading - Delete
    // ----------------------
    if ($_GET['mode'] == '24')
    {
        $resData = JSONGet();

        // update
        {
            $sql = "delete from trading_tbl where id = '" . $resData->pid . "'";
            $rsgetacc=mysqli_query($connection,$sql);

            $sql = "delete from message_tbl where msg_prod_id = '" . $resData->pid . "' and msg_prod_type = '0'";
            $rsgetacc=mysqli_query($connection,$sql);

            $sql = "delete from transaction_tbl where trans_item = '" . $resData->pid . "' and trans_type = '0'";
            $rsgetacc=mysqli_query($connection,$sql);
        }
        
        // result
        JSONSet("ok", "Post Updated!", "Your post is successfully removed.");
    }


    // Equipment - Add
    // ----------------------
    if ($_GET['mode'] == '30')
    {
        $resData = JSONGet();

        // check
        {
            if (!is_numeric($resData->formQty) || $resData->formQty <= 0) 
            {
                // result
                JSONSet("error", "Error", "Check your input1.");
            }

            if (!is_numeric($resData->formPrice) || $resData->formPrice <= 0) 
            {
                // result
                JSONSet("error", "Error", "Check your input1.");
            }
        }

        // update
        {
            $sql = "insert into equipment_tbl
                        (
                            user_id,
                            trading_cat,
                            trading_status,
                            trading_name,
                            trading_location,
                            trading_desc,
                            trading_qty,
                            trading_uom,
                            trading_price
                        )
                    values
                        (
                            '" . $resData->uid . "',
                            '" . $resData->formCat . "',
                            '" . $resData->formClass . "',
                            '" . $resData->formName . "',
                            '" . $resData->formLocation . "',
                            '" . $resData->formDesc . "',
                            '" . $resData->formQty . "',
                            '" . $resData->formUnit . "',
                            '" . $resData->formPrice . "'
                        )
            ";
            $rsgetacc=mysqli_query($connection,$sql);
            $getId = mysqli_insert_id($connection);
        }

        // image
        foreach($resData->formImage as $rData)
        {
            $fileId = GUID() . ".png";
            file_put_contents("image/" . $fileId, base64_decode($rData->base64));

            // insert
            {
                $sql = "insert into equipment_img_tbl
                            (
                                equipment_id,
                                img_name
                            )
                        values
                            (
                                '" . $getId . "',
                                '" . $fileId . "'
                            )
                ";
                $rsgetacc=mysqli_query($connection,$sql);
            }
        }
        
        // result
        JSONSet("ok", "New Post Added!", "Your new post is successfully added.");
    }

    // Equipment - Update
    // ----------------------
    if ($_GET['mode'] == '31')
    {
        $resData = JSONGet();

        // check
        {
            if (!is_numeric($resData->formQty) || $resData->formQty <= 0) 
            {
                // result
                JSONSet("error", "Error", "Check your input1.");
            }

            if (!is_numeric($resData->formPrice) || $resData->formPrice <= 0) 
            {
                // result
                JSONSet("error", "Error", "Check your input1.");
            }
        }

        // update
        {
            $sql = "update equipment_tbl set
                        trading_cat = '" . $resData->formCat . "',
                        trading_status = '" . $resData->formClass . "',
                        trading_name = '" . $resData->formName . "',
                        trading_location = '" . $resData->formLocation . "',
                        trading_desc = '" . $resData->formDesc . "',
                        trading_qty = '" . $resData->formQty . "',
                        trading_uom = '" . $resData->formUnit . "',
                        trading_price = '" . $resData->formPrice . "'
                    where id = '" . $resData->pid . "'
            ";
            $rsgetacc=mysqli_query($connection,$sql);
        }
        
        // result
        JSONSet("ok", "Post Updated!", "Your post is successfully updated.");
    }

    // Equipment - View
    // ----------------------
    if ($_GET['mode'] == '32')
    {
        $resData = JSONGet();

        // 
        $tradingData = new stdClass();

        // data
        $sql="select * FROM equipment_tbl where id = '" . $resData->id . "'"; 
        $rsgetacc=mysqli_query($connection,$sql);
        while ($rowsgetacc = mysqli_fetch_object($rsgetacc))
        {
            $tradingData->info = $rowsgetacc;
            $tradingData->type = 1;
        }

        // user
        $sql="select * FROM user_tbl where id = '" . $tradingData->info->user_id . "'"; 
        $rsgetacc=mysqli_query($connection,$sql);
        while ($rowsgetacc = mysqli_fetch_object($rsgetacc))
        {
            $tradingData->user = $rowsgetacc;
        }
        
        // img
        $sql="select * FROM equipment_img_tbl where equipment_id = '" . $resData->id . "'"; 
        $rsgetacc=mysqli_query($connection,$sql);
        while ($rowsgetacc = mysqli_fetch_object($rsgetacc))
        {
            $tradingData->img[] = $rowsgetacc;
        }

        // return
        JSONSet("ok", "", "", $tradingData);
    }

    // Equipment - Search
    // ----------------------
    if ($_GET['mode'] == '33')
    {
        $resData = JSONGet();

        // 
        $tradingData = new stdClass();

        // category
        $sql = "select * from equipment_cat_tbl where cat_name like '%" . $resData->sCat . "%'";
        $rsgetcat=mysqli_query($connection,$sql);
        while ($rowscat = mysqli_fetch_object($rsgetcat))
        {
            $tradingData->cat = $rowscat;
            $tradingData->smode = "32";
        }

        // list
        $sql="select * FROM equipment_tbl where trading_cat like '%" . $resData->sCat . "%' and trading_status like '%" . $resData->sSta . "%' order by id asc"; 
        $rsgetacc=mysqli_query($connection,$sql);
        while ($rowsgetacc = mysqli_fetch_object($rsgetacc))
        {
            // image
            $targetimage = "none.png";
            $sql="select * FROM equipment_img_tbl where equipment_id = '" . $rowsgetacc->id . "'"; 
            $rsgetimg=mysqli_query($connection,$sql);
            while ($rowsimg = mysqli_fetch_object($rsgetimg))
            {
                $targetimage = $rowsimg->img_name;
            }

            // user
            $sql = "select * from user_tbl where id = '" . $rowsgetacc->user_id . "'";
            $rsgetuser=mysqli_query($connection,$sql);
            while ($rowsuser = mysqli_fetch_object($rsgetuser))
            {
                $rowsgetacc->user = $rowsuser;
                $rowsgetacc->img = $targetimage;
            }

            $tradingData->list[] = $rowsgetacc;
        }

        // return
        JSONSet("ok", "", "", $tradingData);
    }

    // Equipment - Delete
    // ----------------------
    if ($_GET['mode'] == '34')
    {
        $resData = JSONGet();

        // update
        {
            $sql = "delete from equipment_tbl where id = '" . $resData->pid . "'";
            $rsgetacc=mysqli_query($connection,$sql);

            $sql = "delete from message_tbl where msg_prod_id = '" . $resData->pid . "' and msg_prod_type = '1'";
            $rsgetacc=mysqli_query($connection,$sql);

            $sql = "delete from transaction_tbl where trans_item = '" . $resData->pid . "' and trans_type = '1'";
            $rsgetacc=mysqli_query($connection,$sql);
        }
        
        // result
        JSONSet("ok", "Post Updated!", "Your post is successfully removed.");
    }


    // Support - Add
    // ----------------------
    if ($_GET['mode'] == '40')
    {
        $resData = JSONGet();

        // check
        {

        }

        // update
        {
            $sql = "insert into support_tbl
                        (
                            user_id,
                            trading_cat,
                            trading_name,
                            trading_location,
                            trading_desc
                        )
                    values
                        (
                            '" . $resData->uid . "',
                            '" . $resData->formCat . "',
                            '" . $resData->formName . "',
                            '" . $resData->formLocation . "',
                            '" . $resData->formDesc . "'
                        )
            ";
            $rsgetacc=mysqli_query($connection,$sql);
            $getId = mysqli_insert_id($connection);
        }

        // image
        foreach($resData->formImage as $rData)
        {
            $fileId = GUID() . ".png";
            file_put_contents("image/" . $fileId, base64_decode($rData->base64));

            // insert
            {
                $sql = "insert into support_img_tbl
                            (
                                support_id,
                                img_name
                            )
                        values
                            (
                                '" . $getId . "',
                                '" . $fileId . "'
                            )
                ";
                $rsgetacc=mysqli_query($connection,$sql);
            }
        }
        
        // result
        JSONSet("ok", "New Post Added!", "Your new post is successfully added.");
    }

    // Support - Update
    // ----------------------
    if ($_GET['mode'] == '41')
    {
        $resData = JSONGet();

        // update
        {
            $sql = "delete from support_tbl where id = '" . $resData->pid . "'
            ";
            $rsgetacc=mysqli_query($connection,$sql);
        }
        
        // result
        JSONSet("ok", "Post Removed!", "Your post is successfully removed.");
    }

    // Support - View
    // ----------------------
    if ($_GET['mode'] == '42')
    {
        $resData = JSONGet();

        // 
        $tradingData = new stdClass();

        // data
        $sql="select * FROM support_tbl where id = '" . $resData->id . "'"; 
        $rsgetacc=mysqli_query($connection,$sql);
        while ($rowsgetacc = mysqli_fetch_object($rsgetacc))
        {
            $tradingData->info = $rowsgetacc;
            $tradingData->type = 2;
        }

        // user
        $sql="select * FROM user_tbl where id = '" . $tradingData->info->user_id . "'"; 
        $rsgetacc=mysqli_query($connection,$sql);
        while ($rowsgetacc = mysqli_fetch_object($rsgetacc))
        {
            $tradingData->user = $rowsgetacc;
        }

        // img
        $sql="select * FROM support_img_tbl where support_id = '" . $resData->id . "'"; 
        $rsgetacc=mysqli_query($connection,$sql);
        while ($rowsgetacc = mysqli_fetch_object($rsgetacc))
        {
            $tradingData->img[] = $rowsgetacc;
        }

        // return
        JSONSet("ok", "", "", $tradingData);
    }

    // Support - Search
    // ----------------------
    if ($_GET['mode'] == '43')
    {
        $resData = JSONGet();

        // 
        $tradingData = new stdClass();

        // category
        $sql = "select * from support_cat_tbl where cat_name like '%" . $resData->sCat . "%'";
        $rsgetcat=mysqli_query($connection,$sql);
        while ($rowscat = mysqli_fetch_object($rsgetcat))
        {
            $tradingData->cat = $rowscat;
            $tradingData->smode = "42";
        }

        // list
        $sql="select * FROM support_tbl where trading_cat like '%" . $resData->sCat . "%' order by id asc"; 
        $rsgetacc=mysqli_query($connection,$sql);
        while ($rowsgetacc = mysqli_fetch_object($rsgetacc))
        {
            // image
            $targetimage = "none.png";
            $sql="select * FROM support_img_tbl where support_id = '" . $rowsgetacc->id . "'"; 
            $rsgetimg=mysqli_query($connection,$sql);
            while ($rowsimg = mysqli_fetch_object($rsgetimg))
            {
                $targetimage = $rowsimg->img_name;
            }

            // user
            $sql = "select * from user_tbl where id = '" . $rowsgetacc->user_id . "'";
            $rsgetuser=mysqli_query($connection,$sql);
            while ($rowsuser = mysqli_fetch_object($rsgetuser))
            {
                $rowsgetacc->user = $rowsuser;
                $rowsgetacc->img = $targetimage;
            }

            $tradingData->list[] = $rowsgetacc;
        }

        // return
        JSONSet("ok", "", "", $tradingData);
    }

    // Support - Delete
    // ----------------------
    if ($_GET['mode'] == '44')
    {
        $resData = JSONGet();

        // update
        {
            $sql = "delete from support_tbl where id = '" . $resData->pid . "'";
            $rsgetacc=mysqli_query($connection,$sql);

            $sql = "delete from message_tbl where msg_prod_id = '" . $resData->pid . "' and msg_prod_type = '2'";
            $rsgetacc=mysqli_query($connection,$sql);

            $sql = "delete from transaction_tbl where trans_item = '" . $resData->pid . "' and trans_type = '2'";
            $rsgetacc=mysqli_query($connection,$sql);
        }
        
        // result
        JSONSet("ok", "Post Updated!", "Your post is successfully removed.");
    }


    // Calendar Season - List
    // ----------------------
    if ($_GET['mode'] == '50')
    {
        $resData = JSONGet();

        // set
        $rData = array();
        $sql="select * from calendar_season_tbl"; 
        $rsgetnotif=mysqli_query($connection,$sql);
        while ($rowsgetnotif = mysqli_fetch_object($rsgetnotif))
        {
            $rData[] = $rowsgetnotif;
        }

        // result
        JSONSet("ok", "", "", $rData);
    }

    // Calendar Calendar - List
    // ----------------------
    if ($_GET['mode'] == '51')
    {
        $resData = JSONGet();

        // set
        $rData = array();
        $sql="select * from calendar_month_tbl where season_id = '" . $resData->sid . "'"; 
        $rsgetnotif=mysqli_query($connection,$sql);
        while ($rowsgetnotif = mysqli_fetch_object($rsgetnotif))
        {
            $rData[] = $rowsgetnotif;
        }

        // result
        JSONSet("ok", "", "", $rData);
    }

    // Calendar Prodcut - List
    // ----------------------
    if ($_GET['mode'] == '52')
    {
        $resData = JSONGet();

        // set
        $rData = array();
        $sql="select * from calendar_product_tbl where product_season = '" . $resData->sid . "' and product_month = '" . $resData->mid . "'"; 
        $rsgetnotif=mysqli_query($connection,$sql);
        while ($rowsgetnotif = mysqli_fetch_object($rsgetnotif))
        {
            $rData[] = $rowsgetnotif;
        }

        // result
        JSONSet("ok", "", "", $rData);
    }


    // Pest - List
    // ----------------------
    if ($_GET['mode'] == '60')
    {
        $resData = JSONGet();

        // set
        $rData = array();
        $sql="select * from pest_tbl where pest_name like '%" . $resData->stxt . "%'"; 
        $rsgetnotif=mysqli_query($connection,$sql);
        while ($rowsgetnotif = mysqli_fetch_object($rsgetnotif))
        {
            $rData[] = $rowsgetnotif;
        }

        // result
        JSONSet("ok", "", "", $rData);
    }

    // Pest Pesticide - List
    // ----------------------
    if ($_GET['mode'] == '61')
    {
        $resData = JSONGet();

        // set
        $rData = array();
        $sql="select * from pest_pesticide_tbl where pest_id = '" . $resData->pid . "'"; 
        $rsgetnotif=mysqli_query($connection,$sql);
        while ($rowsgetnotif = mysqli_fetch_object($rsgetnotif))
        {
            $sql="select * from pesticide_tbl where id = '" . $rowsgetnotif->pesticide_id . "'"; 
            $rs=mysqli_query($connection,$sql);
            while ($rows = mysqli_fetch_object($rs))
            {
                $rowsgetnotif->detail = $rows;
            }

            $rData[] = $rowsgetnotif;
        }

        // result
        JSONSet("ok", "", "", $rData);
    }


    // Message - List
    // ----------------------
    if ($_GET['mode'] == '70')
    {
        $resData = JSONGet();

        // set
        $messageData = array();

        // transaction
        $sql="select * from transaction_tbl where trans_seller = '" . $resData->uid . "' or trans_buyer = '" . $resData->uid . "'"; 
        $rs=mysqli_query($connection,$sql);
        while ($rowstrans = mysqli_fetch_object($rs))
        {
            // message
            $sql="select * from message_tbl where transaction_id = '" . $rowstrans->id . "'"; 
            $rsmsg=mysqli_query($connection,$sql);
            while ($rows = mysqli_fetch_object($rsmsg))
            {
                // get user (other)
                {
                    // check
                    if ($rows->msg_to != $resData->uid)
                    {
                        $sql="select * FROM user_tbl where id = '" . $rows->msg_to . "'"; 
                    }

                    if ($rows->msg_from != $resData->uid)
                    {
                        $sql="select * FROM user_tbl where id = '" . $rows->msg_from . "'"; 
                    }

                    // user
                    $rsgetacc=mysqli_query($connection,$sql);
                    while ($rowsgetacc = mysqli_fetch_object($rsgetacc))
                    {
                        $rows->userinfo = $rowsgetacc;
                    }
                }

                // get product
                {
                    // trading
                    if ($rowstrans->trans_type == "0")
                    {
                        $sql="select * FROM trading_tbl where id = '" . $rowstrans->trans_item . "'"; 
                    }

                    // equipment
                    if ($rowstrans->trans_type == "1")
                    {
                        $sql="select * FROM equipment_tbl where id = '" . $rowstrans->trans_item . "'"; 
                    }

                    // support
                    if ($rowstrans->trans_type == "2")
                    {
                        $sql="select * FROM support_tbl where id = '" . $rowstrans->trans_item . "'"; 
                    }

                    $rsgetacc=mysqli_query($connection,$sql);
                    while ($rowsgetacc = mysqli_fetch_object($rsgetacc))
                    {
                        $rows->productinfo = $rowsgetacc;
                    }
                }

                // get transaction (if theres any message)
                $rows->transactioninfo = $rowstrans;
                
                $messageData[] = $rows;
                break;
            }
        }

        // return
        JSONSet("ok", "", "", $messageData);
    }

    // Message - View
    // ----------------------
    if ($_GET['mode'] == '71')
    {
        $resData = JSONGet();

        // set
        $messageData = new stdClass();

        // get transction
        {
            $sql="select * from transaction_tbl where id = '" . $resData->txnid . "'"; 
            $rs=mysqli_query($connection,$sql);
            while ($rows = mysqli_fetch_object($rs))
            {
                $messageData->trans = $rows;
            }
        }
        
        // get product
        {
            // trading
            if ($messageData->trans->trans_type == "0")
            {
                $sql="select * FROM trading_tbl where id = '" . $messageData->trans->trans_item . "'"; 
                $sql2="select * FROM trading_img_tbl where trading_id = '" . $messageData->trans->trans_item . "'"; 
            }

            // equipment
            if ($messageData->trans->trans_type == "1")
            {
                $sql="select * FROM equipment_tbl where id = '" . $messageData->trans->trans_item . "'"; 
                $sql2="select * FROM equipment_img_tbl where equipment_id = '" . $messageData->trans->trans_item . "'"; 
            }

            // support
            if ($messageData->trans->trans_type == "2")
            {
                $sql="select * FROM support_tbl where id = '" . $messageData->trans->trans_item . "'"; 
                $sql2="select * FROM support_img_tbl where support_id = '" . $messageData->trans->trans_item . "'"; 
            }

            $rsgetacc=mysqli_query($connection,$sql);
            while ($rowsgetacc = mysqli_fetch_object($rsgetacc))
            {
                $messageData->product = $rowsgetacc;
            }

            // img
            $rsgetacc=mysqli_query($connection,$sql2);
            while ($rowsgetacc = mysqli_fetch_object($rsgetacc))
            {
                $messageData->product->img = $rowsgetacc;
            }

        }

        // get user buyer
        {
            $sql="select * from user_tbl where id = '" . $messageData->trans->trans_buyer . "'"; 
            $rs=mysqli_query($connection,$sql);
            while ($rows = mysqli_fetch_object($rs))
            {
                $messageData->userbuyer = $rows;
            }
        }

        // get user seller
        {
            $sql="select * from user_tbl where id = '" . $messageData->trans->trans_seller . "'"; 
            $rs=mysqli_query($connection,$sql);
            while ($rows = mysqli_fetch_object($rs))
            {
                $messageData->userseller = $rows;
            }
        }

        // get message
        {
            $sql="select * from message_tbl where transaction_id = '" . $messageData->trans->id . "' order by id desc"; 
            $rs=mysqli_query($connection,$sql);
            while ($rows = mysqli_fetch_object($rs))
            {
                $messageData->msg[] = $rows;
            }
        }

        // return
        JSONSet("ok", "", "", $messageData);
    }

    // Message - Send
    // ----------------------
    if ($_GET['mode'] == '72')
    {
        $resData = JSONGet(); 
    
        // send
        {
            $sql = "insert into message_tbl
                    (
                        msg_date,
                        msg_to,
                        msg_from,
                        msg_body,
                        transaction_id
                    )
                    values
                    (
                        '" . $dateResult . "',
                        '" . $resData->fUIdTo . "',
                        '" . $resData->fUIdFrom . "',
                        '" . $resData->fMessage . "',
                        '" . $resData->ftxn . "'
                    )
            ";
            $rs = mysqli_query($connection, $sql);
        }

        // return
        JSONSet("ok", "", "");
    }

    // Message - Create TXN
    // ----------------------
    if ($_GET['mode'] == 'msginit')
    {
        $resData = JSONGet(); 

        // set
        $messageData = new stdClass();

        $sql="insert into transaction_tbl
                (
                    trans_type,
                    trans_item,
                    trans_seller,
                    trans_buyer,
                    trans_date
                )
            values
                (
                    '" . $resData->titype . "',
                    '" . $resData->tiid . "',
                    '" . $resData->tseller . "',
                    '" . $resData->tbuyer . "',
                    '" . $dateOnlyResult . "'
                )
        "; 
        $rs=mysqli_query($connection,$sql);
        $id = mysqli_insert_id($connection);

        $sql="select * from transaction_tbl where id = '" . $id . "'"; 
        $rs=mysqli_query($connection,$sql);
        while ($rows = mysqli_fetch_object($rs))
        {
            $messageData = $rows;
        }

        // return
        JSONSet("ok", "", "", $messageData);
    }

    // Product - View Trading
    // ----------------------
    if ($_GET['mode'] == '80')
    {
        $resData = JSONGet();

        // 
        $productList = array();

        // trading
        {
            $sql="select * FROM trading_tbl where user_id = '" . $resData->uid . "'"; 
            $rsgetacc=mysqli_query($connection,$sql);
            while ($rowsgetacc = mysqli_fetch_object($rsgetacc))
            {
                // image
                $targetimage = "none.png";
                $sql="select * FROM trading_img_tbl where trading_id = '" . $rowsgetacc->id . "'"; 
                $rsgetimg=mysqli_query($connection,$sql);
                while ($rowsimg = mysqli_fetch_object($rsgetimg))
                {
                    $targetimage = $rowsimg->img_name;
                }

                // user
                $sql="select * FROM user_tbl where id = '" . $rowsgetacc->user_id . "'"; 
                $rs=mysqli_query($connection,$sql);
                while ($rows = mysqli_fetch_object($rs))
                {
                    $rowsgetacc->user = $rows;
                }

                // set
                $rowsgetacc->type = 0;
                $rowsgetacc->img = $targetimage;
                $productList[] = $rowsgetacc;
            }
        }

        /*
        // equipment
        {
            $sql="select * FROM equipment_tbl where user_id = '" . $resData->uid . "'"; 
            $rsgetacc=mysqli_query($connection,$sql);
            while ($rowsgetacc = mysqli_fetch_object($rsgetacc))
            {
                // user
                $sql="select * FROM user_tbl where id = '" . $rowsgetacc->user_id . "'"; 
                $rs=mysqli_query($connection,$sql);
                while ($rows = mysqli_fetch_object($rs))
                {
                    $rowsgetacc->user = $rows;
                }

                // set
                $rowsgetacc->type = 1;
                $productList[] = $rowsgetacc;
            }
        }

        // support
        {
            $sql="select * FROM support_tbl where user_id = '" . $resData->uid . "'"; 
            $rsgetacc=mysqli_query($connection,$sql);
            while ($rowsgetacc = mysqli_fetch_object($rsgetacc))
            {
                // user
                $sql="select * FROM user_tbl where id = '" . $rowsgetacc->user_id . "'"; 
                $rs=mysqli_query($connection,$sql);
                while ($rows = mysqli_fetch_object($rs))
                {
                    $rowsgetacc->user = $rows;
                }

                // set
                $rowsgetacc->type = 2;
                $productList[] = $rowsgetacc;
            }
        }
        */

        // return
        JSONSet("ok", "", "", $productList);
    }

    // Product - View Equipment
    // ----------------------
    if ($_GET['mode'] == '81')
    {
        $resData = JSONGet();

        // 
        $productList = array();

        /*
        // trading
        {
            $sql="select * FROM trading_tbl where user_id = '" . $resData->uid . "'"; 
            $rsgetacc=mysqli_query($connection,$sql);
            while ($rowsgetacc = mysqli_fetch_object($rsgetacc))
            {
                // user
                $sql="select * FROM user_tbl where id = '" . $rowsgetacc->user_id . "'"; 
                $rs=mysqli_query($connection,$sql);
                while ($rows = mysqli_fetch_object($rs))
                {
                    $rowsgetacc->user = $rows;
                }

                // set
                $rowsgetacc->type = 0;
                $productList[] = $rowsgetacc;
            }
        }
        */

        // equipment
        {
            $sql="select * FROM equipment_tbl where user_id = '" . $resData->uid . "'"; 
            $rsgetacc=mysqli_query($connection,$sql);
            while ($rowsgetacc = mysqli_fetch_object($rsgetacc))
            {
                // image
                $targetimage = "none.png";
                $sql="select * FROM equipment_img_tbl where equipment_id = '" . $rowsgetacc->id . "'"; 
                $rsgetimg=mysqli_query($connection,$sql);
                while ($rowsimg = mysqli_fetch_object($rsgetimg))
                {
                    $targetimage = $rowsimg->img_name;
                }

                // user
                $sql="select * FROM user_tbl where id = '" . $rowsgetacc->user_id . "'"; 
                $rs=mysqli_query($connection,$sql);
                while ($rows = mysqli_fetch_object($rs))
                {
                    $rowsgetacc->user = $rows;
                }

                // set
                $rowsgetacc->type = 1;
                $rowsgetacc->img = $targetimage;
                $productList[] = $rowsgetacc;
            }
        }

        /*
        // support
        {
            $sql="select * FROM support_tbl where user_id = '" . $resData->uid . "'"; 
            $rsgetacc=mysqli_query($connection,$sql);
            while ($rowsgetacc = mysqli_fetch_object($rsgetacc))
            {
                // user
                $sql="select * FROM user_tbl where id = '" . $rowsgetacc->user_id . "'"; 
                $rs=mysqli_query($connection,$sql);
                while ($rows = mysqli_fetch_object($rs))
                {
                    $rowsgetacc->user = $rows;
                }

                // set
                $rowsgetacc->type = 2;
                $productList[] = $rowsgetacc;
            }
        }
        */

        // return
        JSONSet("ok", "", "", $productList);
    }

    // Product - View Equipment Borrowed
    // ----------------------
    if ($_GET['mode'] == '81a')
    {
        $resData = JSONGet();

        // 
        $productList = array();

        // equipment
        {
            $sql="select * FROM transaction_tbl where trans_seller = '" . $resData->uid . "' and trans_status = 'complete'"; 
            $rsgettrans=mysqli_query($connection,$sql);
            while ($rowsgettrans = mysqli_fetch_object($rsgettrans))
            {
                // equipment
                if ($rowsgettrans->trans_type == "1")
                {
                    $sql="select * FROM equipment_tbl where id = '" . $rowsgettrans->trans_item . "'"; 
                    $rsgetacc=mysqli_query($connection,$sql);
                    while ($rowsgetacc = mysqli_fetch_object($rsgetacc))
                    {
                        // image
                        $targetimage = "none.png";
                        $sql="select * FROM equipment_img_tbl where equipment_id = '" . $rowsgetacc->id . "'"; 
                        $rsgetimg=mysqli_query($connection,$sql);
                        while ($rowsimg = mysqli_fetch_object($rsgetimg))
                        {
                            $targetimage = $rowsimg->img_name;
                        }

                        // seller
                        $sql="select * FROM user_tbl where id = '" . $rowsgettrans->trans_seller . "'"; 
                        $rs=mysqli_query($connection,$sql);
                        while ($rows = mysqli_fetch_object($rs))
                        {
                            $rowsgetacc->user = $rows;
                        }

                        $rowsgetacc->search = 32;
                        $rowsgetacc->transact = $rowsgettrans;
                        $rowsgetacc->img = $targetimage;
                        $productList[] = $rowsgetacc;
                    }
                }
            }
        }

        /*
        // support
        {
            $sql="select * FROM support_tbl where user_id = '" . $resData->uid . "'"; 
            $rsgetacc=mysqli_query($connection,$sql);
            while ($rowsgetacc = mysqli_fetch_object($rsgetacc))
            {
                // user
                $sql="select * FROM user_tbl where id = '" . $rowsgetacc->user_id . "'"; 
                $rs=mysqli_query($connection,$sql);
                while ($rows = mysqli_fetch_object($rs))
                {
                    $rowsgetacc->user = $rows;
                }

                // set
                $rowsgetacc->type = 2;
                $productList[] = $rowsgetacc;
            }
        }
        */

        // return
        JSONSet("ok", "", "", $productList);
    }

    // Product - View Receive List
    // ----------------------
    if ($_GET['mode'] == '82')
    {
        $resData = JSONGet();

        // 
        $productList = array();

        /*
        // trading
        {
            $sql="select * FROM trading_tbl where user_id = '" . $resData->uid . "'"; 
            $rsgetacc=mysqli_query($connection,$sql);
            while ($rowsgetacc = mysqli_fetch_object($rsgetacc))
            {
                // user
                $sql="select * FROM user_tbl where id = '" . $rowsgetacc->user_id . "'"; 
                $rs=mysqli_query($connection,$sql);
                while ($rows = mysqli_fetch_object($rs))
                {
                    $rowsgetacc->user = $rows;
                }

                // set
                $rowsgetacc->type = 0;
                $productList[] = $rowsgetacc;
            }
        }
        */

        // equipment
        {
            $sql="select * FROM transaction_tbl where trans_buyer = '" . $resData->uid . "' and trans_status = 'deliver'"; 
            $rsgettrans=mysqli_query($connection,$sql);
            while ($rowsgettrans = mysqli_fetch_object($rsgettrans))
            {
                // trading
                if ($rowsgettrans->trans_type == "0")
                {
                    $sql="select * FROM trading_tbl where id = '" . $rowsgettrans->trans_item . "'"; 
                    $rsgetacc=mysqli_query($connection,$sql);
                    while ($rowsgetacc = mysqli_fetch_object($rsgetacc))
                    {
                        // image
                        $targetimage = "none.png";
                        $sql="select * FROM trading_img_tbl where trading_id = '" . $rowsgetacc->id . "'"; 
                        $rsgetimg=mysqli_query($connection,$sql);
                        while ($rowsimg = mysqli_fetch_object($rsgetimg))
                        {
                            $targetimage = $rowsimg->img_name;
                        }

                        // seller
                        $sql="select * FROM user_tbl where id = '" . $rowsgettrans->trans_seller . "'"; 
                        $rs=mysqli_query($connection,$sql);
                        while ($rows = mysqli_fetch_object($rs))
                        {
                            $rowsgetacc->user = $rows;
                        }
                        
                        $rowsgetacc->search = 22;
                        $rowsgetacc->transact = $rowsgettrans;
                        $rowsgetacc->img = $targetimage;
                        $productList[] = $rowsgetacc;
                    }
                }

                // equipment
                if ($rowsgettrans->trans_type == "1")
                {
                    $sql="select * FROM equipment_tbl where id = '" . $rowsgettrans->trans_item . "'"; 
                    $rsgetacc=mysqli_query($connection,$sql);
                    while ($rowsgetacc = mysqli_fetch_object($rsgetacc))
                    {
                        // image
                        $targetimage = "none.png";
                        $sql="select * FROM equipment_img_tbl where equipment_id = '" . $rowsgetacc->id . "'"; 
                        $rsgetimg=mysqli_query($connection,$sql);
                        while ($rowsimg = mysqli_fetch_object($rsgetimg))
                        {
                            $targetimage = $rowsimg->img_name;
                        }

                        // seller
                        $sql="select * FROM user_tbl where id = '" . $rowsgettrans->trans_seller . "'"; 
                        $rs=mysqli_query($connection,$sql);
                        while ($rows = mysqli_fetch_object($rs))
                        {
                            $rowsgetacc->user = $rows;
                        }

                        $rowsgetacc->search = 32;
                        $rowsgetacc->transact = $rowsgettrans;
                        $rowsgetacc->img = $targetimage;
                        $productList[] = $rowsgetacc;
                    }
                }
            }
        }

        /*
        // support
        {
            $sql="select * FROM support_tbl where user_id = '" . $resData->uid . "'"; 
            $rsgetacc=mysqli_query($connection,$sql);
            while ($rowsgetacc = mysqli_fetch_object($rsgetacc))
            {
                // user
                $sql="select * FROM user_tbl where id = '" . $rowsgetacc->user_id . "'"; 
                $rs=mysqli_query($connection,$sql);
                while ($rows = mysqli_fetch_object($rs))
                {
                    $rowsgetacc->user = $rows;
                }

                // set
                $rowsgetacc->type = 2;
                $productList[] = $rowsgetacc;
            }
        }
        */

        // return
        JSONSet("ok", "", "", $productList);
    }

    // Product - Order
    // ----------------------
    if ($_GET['mode'] == '120')
    {
        $resData = JSONGet();

        // check
        {
            if (!is_numeric($resData->pqty) || (float)$resData->pqty <= 0)
            {
                // result
                //JSONSet("error", "Quantity Error", "Check your input1.");
            }
        }

        // trading
        {
            if ($resData->smode == "0")
            {
                $sql="update trading_tbl set trading_qty = trading_qty - " . $resData->pqty . " where id = '" . $resData->pid . "'"; 
                $rsgetacc=mysqli_query($connection,$sql);
            }
        }

        // equipment
        {
            if ($resData->smode == "1")
            {
                $sql="update equipment_tbl set trading_qty = trading_qty - " . $resData->pqty . " where id = '" . $resData->pid . "'"; 
                $rsgetacc=mysqli_query($connection,$sql);
            }
        }

        // transaction
        $sql = "update transaction_tbl set
                    trans_status = 'deliver',
                    trans_qty = trans_qty + '" . $resData->pqty . "'
                where id = '" . $resData->tid . "'
        ";
        $rsgetacc=mysqli_query($connection,$sql);

        // return
        JSONSet("ok", "Confirmed Delivery", "Please deliver and wait for barterer acknowledge/receive.");
    }

    // Product - Received
    // ----------------------
    if ($_GET['mode'] == '121')
    {
        $resData = JSONGet();

        // check
        {
            
        }

        // transaction
        $sql = "update transaction_tbl set
                    trans_status = 'complete'
                where id = '" . $resData->tid . "'
        ";
        $rsgetacc=mysqli_query($connection,$sql);

        // transaction
        $sql = "select * from transaction_tbl where id = '" . $resData->tid . "'";
        $rsgetacc=mysqli_query($connection,$sql);
        while ($rowsres = mysqli_fetch_object($rsgetacc)) {
            // return
            JSONSet("ok", "Confirmed Received", "Transaction fulfilled!", $rowsres);
        }
    }

    // Product - Return
    // ----------------------
    if ($_GET['mode'] == '122')
    {
        $resData = JSONGet();
        

        // transaction
        $sql = "select * from transaction_tbl where id = '" . $resData->tid . "'";
        $rsgetacc=mysqli_query($connection,$sql);
        while ($rowsres = mysqli_fetch_object($rsgetacc)) 
        {
            if ($rowsres->trans_return == "0") 
            {
                // transaction
                $sql = "update transaction_tbl set
                            trans_return = '1'
                        where id = '" . $resData->tid . "'
                ";
                $rsgetacc = mysqli_query($connection, $sql);

                // QTY
                $sql = "update equipment_tbl set
                            trading_qty = trading_qty + " . $rowsres->$trans_qty . "
                        where id = '" . $resData->trans_item . "'
                ";
                $rsgetacc = mysqli_query($connection, $sql);
            }

            // return
            JSONSet("ok", "Returned Product", "Transaction fulfilled!", $rowsres);
        }
    }


    // Top - Calendar
    // ----------------------
    if ($_GET['mode'] == '130')
    {
        $resData = JSONGet();

        // set
        $rData = array();
        $sql="select * from calendar_month_tbl"; 
        $rsgetnotif=mysqli_query($connection,$sql);
        while ($rowsgetnotif = mysqli_fetch_object($rsgetnotif))
        {
            $rData[] = $rowsgetnotif;
        }

        // result
        JSONSet("ok", "", "", $rData);
    }

    // Top - Transaction
    // ----------------------
    if ($_GET['mode'] == '131')
    {
        $resData = JSONGet();

        // set
        $tradingData = new stdClass();

        // month
        $month = $resData->month;

        // list
        $sql="select sum(trans_qty) as a, trans_item from transaction_tbl where trans_type = 0 and trans_date like '%" . $dateOnlyResultYear . "-" . $month . "-%' and trans_qty > 0 and trans_status = 'complete' group by trans_item order by a desc"; 
        $rsgettop=mysqli_query($connection,$sql);
        while ($rowstop = mysqli_fetch_object($rsgettop))
        {
            // list
            $sql="select * FROM trading_tbl where id = '" . $rowstop->trans_item . "'"; 
            $rsgetacc=mysqli_query($connection,$sql);
            while ($rowsgetacc = mysqli_fetch_object($rsgetacc))
            {
                // image
                $targetimage = "none.png";
                $sql="select * FROM trading_img_tbl where trading_id = '" . $rowstop->trans_item . "'"; 
                $rsgetimg=mysqli_query($connection,$sql);
                while ($rowsimg = mysqli_fetch_object($rsgetimg))
                {
                    $targetimage = $rowsimg->img_name;
                }

                // user
                $sql = "select * from user_tbl where id = '" . $rowsgetacc->user_id . "'";
                $rsgetuser=mysqli_query($connection,$sql);
                while ($rowsuser = mysqli_fetch_object($rsgetuser))
                {
                    $rowsgetacc->user = $rowsuser;
                    $rowsgetacc->img = $targetimage;
                    $rowsgetacc->transactCount = $rowstop->a;
                }

                $tradingData->list[] = $rowsgetacc;
            }
        }

        // return
        JSONSet("ok", "", "", $tradingData);
    }


    if ($_GET['mode'] == '10000')
    {
        $sql="select * from pesticide_tbl"; 
        $rsgettop=mysqli_query($connection,$sql);
        while ($rowstop = mysqli_fetch_object($rsgettop))
        {
            $sql="select * from pest_tbl"; 
            $rspet=mysqli_query($connection,$sql);
            while ($rowspet = mysqli_fetch_object($rspet))
            {
                $sql="insert into pest_pesticide_tbl (pest_id, pesticide_id) values ('" . $rowspet->id . "', '" . $rowstop->id . "')"; 
                $rsnn=mysqli_query($connection,$sql);
            }
        }
    }
    

    /*
        ======================================
        FUNCTIONS
        ======================================
    */

    // JSON - Get
    // ---------------------------------------
    function JSONGet()
    {
        // get json
        $json = file_get_contents('php://input');
        $data = json_decode($json);
        return $data;
    }

    // JSON - Set     
    // ---------------------------------------
    function JSONSet($resStatus, $resTitle = "", $resMsg = "", $resData = "")
    {
        /*
            status:
                ok      - success
                error   - error

            title:
                return any notif title

            message:
                return any notif msg
            
            data:
                return any result
        */
        echo json_encode(array("status" => $resStatus, "title" => $resTitle, "message" => $resMsg, "data" => $resData));
        exit();
    }

    // IDs
    // ---------------------------------------
    function GUID()
    {
        if (function_exists('com_create_guid') === true)
        {
            return trim(com_create_guid(), '{}');
        }

        return sprintf('%04X%04X', mt_rand(0, 65535), mt_rand(0, 65535));
    }
?>