<?php

require_once('./db_connect.php');

if ( $_SERVER['REQUEST_METHOD'] === 'POST' ) {
    
    $email = $_POST['email'];
    $password = $_POST['password'];

    
}