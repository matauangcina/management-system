<?php
session_start();

require_once('./db_connect.php');

if ( $_SERVER['REQUEST_METHOD'] === 'POST' ) {
    if ( isset($_POST['email']) && isset($_POST['password']) ) {
        $email = $_POST['email'];
        $password = $_POST['password'];

        $stmt = $conn->prepare("
            SELECT
                *
            FROM users
            WHERE email = ?
            AND password = ?
        ");

        $stmt->bind_param('ss', $email, $password);

        $stmt->execute();

        $res = $stmt->get_result();
        $row = $res->fetch_assoc();

        if ( $row ) {
            $user_agent = $_SERVER['HTTP_USER_AGENT'];
            $last_login = time();

            $_SESSION['auth'] = true;
            $_SESSION['user_id'] = $row['user_id'];
            $_SESSION['username'] = $row['user_name'];
            $_SESSION['user_agent'] = $user_agent;
            $_SESSION['start_time'] = $last_login;
            $_SESSION['expire_time'] = $_SESSION['start_time'] + (3600 * 12);

            header('Location: ../view/item-list.php');
        } else {
            $_SESSION['error_msg'] = 'Wrong username or password!';

            header('Location: ../view/index.php');
        }
    }
}