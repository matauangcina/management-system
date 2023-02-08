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

function checkDOB($date) {
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

function checkImage($file) {
    $file_name = $file['name'];
    $file_size = $file['size'];
    $error = $file['error'];

    $file_extension = end(explode('.', $file_name));

    $max_file_size = 1024 * 1024 * 25;
    $valid_extension = ['jpeg', 'jpg', 'gif', 'png'];
    $valid_name = '/^[A-Za-z0-9_- ]+$/i';

    if ( $error == 4 ) {
        $_SESSION['error_msg']['image'] = 'There is no image!, Please insert an image for this item!';
        return false;
    }
    if ( !preg_match($valid_name, $file_name) ) {
        $_SESSION['error_msg']['image'] = 'File name must only contain characters, numbers, dashes, underscores, and spaces!';
        return false;
    }
    if ( !in_array($file_extension, $valid_extension) ) {
        $_SESSION['error_msg']['image'] = 'Image is invalid! Uploaded file must be a .jpg, .jpeg, .png, or .gif!';
        return false;
    }
    if ( $file_size > $max_file_size ) {
        $_SESSION['error_msg']['image'] = 'Image uploaded size limit is 25 MB!';
        return false;
    }

    return $file_name;
}