<?php

function checkUsername($username) {
    $flag = 1;

    if ( strlen($username) < 5 || strlen($username) > 20 )
        $flag = 0;

    return $flag;
}

function checkPhoneNum($phone_num) {
    $flag = 1;

    $num = preg_match('/08[0-9]{9,11}/', $phone_num);

    if ( !$num )
        $flag = 0;

    return $flag;
}

function checkBirthDate($date) {
    $flag = 1;

    $birth_date = time() - strtotime($date);
    $age = floor($birth_date / (3600 * 24 * 365));

    if ( $age < 18 || time() < strtotime($date) )
        $flag = 0;

    return $flag;
}

function checkEmail($email) {
    $flag = 1;

    if ( !filter_var($email, FILTER_VALIDATE_EMAIL) )
        $flag = 0;

    return $flag;
}

function checkPassword($password) {
    $flag = 1;

    $uppercase = preg_match('@[A-Z]@', $password);
    $lowercase = preg_match('@[a-z]@', $password);
    $number = preg_match('@[0-9]@', $password);
    $special_chars = preg_match('@[^\w]@', $password);

    if ( !$uppercase || !$lowercase || !$number || !$special_chars || strlen($password) < 8 )
        $flag = 0;

    return $flag;
}