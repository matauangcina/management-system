<?php

function generateUserId() {
    $rand_num = '0123456789';
    $len = strlen($rand_num);

    $user_id = 'USER';
    for ($i = 0; $i < 4; $i++) {
        $user_id .= $rand_num[rand(0, $len - 1)];
    }

    return $user_id;
}

function generateItemId() {
    $rand_num = '0123456789';
    $len = strlen($rand_num);

    $item_id = 'ITEM';
    for ($i = 0; $i < 4; $i++) {
        $item_id .= $rand_num[rand(0, $len - 1)];
    }

    return $item_id;
}