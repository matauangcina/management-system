<?php

function encrypt($string)
{
    return hash('sha256', $string);
}

function generateId($key)
{
    $num = '0123456789';
    $len = strlen($num);

    $id;
    if ( $key === 'user' )
        $id = 'USER';
    else if ( $key === 'item' )
        $id = 'ITEM';

    for ($i = 0; $i < 4; $i++) {
        $id .= $num[rand(0, $len - 1)];
    }

    return $id;
}

function generateKey($len)
{
    $characters = 'abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    $random_string = '';
    for ($i = 0; $i < $len; $i++) {
        $random_string .= $characters[rand(0, strlen($characters) - 1)];
    }

    return $random_string;
}