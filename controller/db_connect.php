<?php
require_once('../config/db.php');

function insertCookie($conn, $key, $user_id)
{
    $stmt = $conn->prepare("
        INSERT INTO user_auth
        (cookie_key, user_id)
        VALUES
        (?, ?);
    ");

    $stmt->bind_param('ss', $key, $user_id);

    $stmt->execute();
}

function getCookie($conn, $user_id)
{
    $stmt = $conn->prepare("
        SELECT
            *
        FROM user_auth
        WHERE user_id = ?;
    ");

    $stmt->bind_param('s', $user_id);

    $stmt->execute();

    $res = $stmt->get_result();
    $row = $res->fetch_assoc();

    if ( $row )
        return $row['cookie_key'];
    else
        return false;
}

function deleteCookie($conn, $user_id)
{
    $stmt = $conn->prepare("
        DELETE
        FROM user_auth
        WHERE user_id = ?;
    ");

    $stmt->bind_param('s', $user_id);

    $stmt->execute();
}

$conn = new mysqli(
    $config['server'],
    $config['username'],
    $config['password'],
    $config['database']
);