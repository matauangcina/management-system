<?php
require_once('../utilities/geoip2.phar');
require_once(__DIR__ . '/./db_connect.php');

use GeoIp2\Database\Reader;

$reader = new Reader('../utilities/GeoLite2/GeoLite2-City.mmdb');
$record = $reader->city('8.25.96.28');

function destroySession()
{
    unset($_SESSION);

    session_unset();
    session_destroy();
}

function destroyCookie()
{
    global $conn;

    setcookie('token', '', time() - 3600, '/');
    deleteCookie($conn, $_SESSION['user_id']);
}

function fetchUser()
{
    global $record;
    $identity = [];

    $identity['ip_addr'] = '8.25.96.28';
    $identity['user_agent'] = $_SERVER['HTTP_USER_AGENT'];
    $identity['city'] = $record->city->name;
    $identity['postal_code'] = $record->postal->code;
    $identity['token'] = $_SESSION['token'];

    return $identity;
}

function compareValue($incoming, $stored)
{
    $flag = 0;

    if ( $incoming == array_intersect($incoming, $stored) )
        $flag = 1;

    return $flag;
}

function validateSession()
{
    $isValid = 1;

    if ( isset($_SESSION) ) {
        if ( compareValue(fetchUser(), $_SESSION) ) {
            $session_time = time() - $_SESSION['start_time'];
            $expire_time = 3600 * 2;
    
            if ( $session_time > $expire_time ) {
                $isValid = 0;
            }
        } else {
            $isValid = 0;
        }
    } else {
        $isValid = 0;
    }
    
    return $isValid;
}

session_start();