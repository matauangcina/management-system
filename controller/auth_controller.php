<?php
require_once('./session_manager.php');
require_once('../config/utilities.php');
require_once('./db_connect.php');
require_once('../utilities/geoip2.phar');

use GeoIp2\Database\Reader;

$reader = new Reader('../utilities/GeoLite2/GeoLite2-City.mmdb');
$record = $reader->city('8.25.96.28');

if ( $_SERVER['REQUEST_METHOD'] === 'POST' ) {
    if ( isset($_POST['email']) && isset($_POST['password']) ) {
        $email = $_POST['email'];
        $encrypted_pass = encrypt($_POST['password']);

        $stmt = $conn->prepare("
            SELECT
                *
            FROM users
            WHERE email = ?
            AND password = ?
        ");

        $stmt->bind_param('ss', $email, $encrypted_pass);

        $stmt->execute();

        $res = $stmt->get_result();
        $row = $res->fetch_assoc();

        if ( $row ) {
            $_SESSION['auth'] = true;
            $_SESSION['user_id'] = $row['user_id'];
            $_SESSION['name'] = $row['user_name'];
            $_SESSION['start_time'] = time();
            $_SESSION['ip_addr'] = '8.25.96.28';
            $_SESSION['user_agent'] = $_SERVER['HTTP_USER_AGENT'];
            $_SESSION['city'] = $record->city->name;
            $_SESSION['postal_code'] = $record->postal->code;
            $_SESSION['token'] = generateKey(30);

            if ( isset($_POST['remember-me']) ) {
                setcookie('token', $_SESSION['token'], time() + (3600 * 2), '/');
    
                insertCookie($conn, $_COOKIE['token'], $_SESSION['user_id']);
            }

            header('Location: ../view/item-list.php');
        } else {
            $_SESSION['error_msg'] = 'Wrong username or password!';

            header('Location: ../view/index.php');
        }
    }
}