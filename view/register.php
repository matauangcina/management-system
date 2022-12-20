<?php
require_once('../controller/db_connect.php');
require_once('../config/rand_id.php');
require_once('../config/check_validity.php');

if ( $_SERVER['REQUEST_METHOD'] === 'POST' ) {
    $name = $_POST['username'];
    $phone_num = $_POST['phone-num'];
    $birth_date = $_POST['date-of-birth'];
    $email = $_POST['email'];
    $pass = $_POST['password'];
    $conf = $_POST['pass-conf'];

    $error_msg = [
        'username' => '',
        'phone_num' => '',
        'dob' => '',
        'email' => '',
        'pass' => '',
        'conf' => ''
    ];

    $isValid = 1;    

    if ( !checkUsername($name) ) {
        $error_msg['username'] = 'Username must be between 8 to 20 characters!';
        $isValid = 0;
    }
    if ( !checkPhoneNum($phone_num) ) {
        $error_msg['phone_num'] = 'Invalid phone number!';
        $isValid = 0;
    }
    if ( !checkBirthDate($birth_date) ) {
        $error_msg['dob'] = 'Invalid birth date (must be at least 18 years old)!';
        $isValid = 0;
    }
    if ( !checkEmail($email) ) {
        $error_msg['email'] = 'Invalid email address!';
        $isValid = 0;
    }
    if ( !checkPassword($pass) ) {
        $error_msg['pass'] = 'Password must be at least 8 characters and consists of uppercase, lowercase, number, and special characters!';
        $isValid = 0;
    }

    if ( $isValid ) {
        if ( $pass === $conf ) {
            $stmt = $conn->prepare("
                INSERT INTO users
                (user_id, user_name, phone_num, date_of_birth, email, password)
                VALUES
                (?, ?, ?, ?, ?, ?);
            ");
            
            $stmt->bind_param('ssssss', generateUserId(), $name, $phone_num, $birth_date, $email, $pass);
            
            $stmt->execute();
            
            header('Location: ./index.php');
        } else {
            $error_msg['conf'] = 'Password does not match!';
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="../assets/css/register.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">

    <title>Register</title>
</head>

<body>
    <div class="content">
        <h1>Register</h1>
  
        <form method="POST" action="" id="register">
            <div class="input-field">
                <?php if ( isset($error_msg['username'])) :?>
                    <div class="error"><?= $error_msg['username']; ?></div>
                <?php endif; ?>

                <input type="text" placeholder="Name" id="name" name="username" required>

                <?php if ( isset($error_msg['phone_num']) ) :?>
                    <div class="error"><?= $error_msg['phone_num']; ?></div>
                <?php endif; ?>
                        
                <input type="text" placeholder="Phone Number" id="phone-num" name="phone-num" required>

                <?php if ( isset($error_msg['dob'])) : ?>
                    <div class="error"><?= $error_msg['dob']; ?></div>
                <?php endif; ?>

                <input type="date" placeholder="Date Of Birth" id="dob" name="date-of-birth" required>

                <?php if ( isset($error_msg['email'])) : ?>
                    <div class="error"><?= $error_msg['email']; ?></div>
                <?php endif; ?>

                <input type="email" placeholder="Email" id="email" name="email" required>
                
                <?php if ( isset($error_msg['pass'])) : ?>
                    <div class="error"><?= $error_msg['pass']; ?></div>
                <?php endif; ?>

                <input type="password" placeholder="Password" id="password" name="password" required>

                <?php if ( isset($error_msg['conf'])) : ?>
                    <div class="error"><?= $error_msg['conf']; ?></div>
                <?php endif; ?>

                <input type="password" placeholder="Confirm Password" id="pass-conf" name="pass-conf" required>
            </div>
            
            <div class="btn">
                <button class="submit-btn" type="submit">Register</button>
            </div>
        </form>

        <div class="login">
            <p>Already have an account? <a href="login.html">Login</a></p>
        </div>
    </div>
</body>

</html>