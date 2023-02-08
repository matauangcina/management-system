<?php
require_once('../config/check_validity.php');
require_once('../config/utilities.php');
require_once('./session_manager.php');

if ( $_SERVER['REQUEST_METHOD'] === 'POST' ) {
    if ( isset($_POST['date-created']) && 
         isset($_POST['vendor']) &&
         isset($_POST['item-name']) &&
         isset($_POST['quantity']) &&
         isset($_POST['delivery-date']) &&
         isset($_POST['status']) &&
         isset($_POST['amount']) &&
         isset($_FILES['image'])
    ) {
        $date_created = $_POST['date-created'];
        $vendor = $_POST['vendor'];
        $item_name = $_POST['item-name'];
        $quantity = $_POST['quantity'];
        $delivery_date = $_POST['delivery-date'];
        $status = $_POST['status'];

        $image = checkImage($_FILES['image']);

        $error_msg = array();
        $isValid = 1;

        if ( strlen($item_name) < 5 || strlen($item_name) > 50 ) {
            $error_msg['item_name'] = 'Item name must be at least 5 characters and at most 50 characters!';
            $isvalid = 0;
        }
        if ( strlen($vendor) < 5 || strlen($vendor) > 50 ) {
            $error_msg['vendor'] = 'Vendor name must be at least 5 characters and at most 50 characters!';
            $isValid = 0;
        }
        if ( strtotime($date_created) > time() ) {
            $error_msg['date_created'] = 'Invalid item creation date (ngaco lu! serius dikit ngisinya!)';
            $isValid = 0;
        }
        if ( strtotime($delivery_date) < strtotime($date_created) || strtotime($delivery_date) > time() ) {
            $error_msg['delivery_date'] = 'Invalid item delivery date (bruhh, seriusan dikit lu! think!)';
            $isValid = 0;
        }
        if ( $quantity < 1 ) {
            $error_msg['quantity'] = 'Must at least consist of 1 items!';
            $isValid = 0;
        }
        if ( !$image ) {
            $isValid = 0;
        }

        if ( !$isValid ) {
            $_SESSION['error_msg'] = $error_msg;
            die;
        } else {
            $file_name = generateKey(200) . '.' . pathinfo($image, PATHINFO_EXTENSION);

            $tmp_path = $_FILES['image']['tmp_name'];
            $new_path = '../assets/uploads/' . $file_name;

            move_uploaded_file($tmp_path, $new_path);

            // insert data into database
        }
    }
}