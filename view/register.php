<?php
require_once('../controller/db_connect.php');
require_once('../config/rand_id.php');

session_start();

if ( $_SERVER['REQUEST_METHOD'] === 'POST' ) {
    $name = $_POST['username'];
    $phone_num = $_POST['phone-num'];
    $birth_date = $_POST['date-of-birth'];
    $email = $_POST['email'];
    $pass = $_POST['password'];
    $conf = $_POST['pass-conf'];
    
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
        $_SESSION['error_msg'] = 'Password does not match!';
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="../assets/css/index.css">
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
                <input type="text" placeholder="Name" id="name" name="username" required>
                <input type="text" placeholder="Phone Number" id="phone-num" name="phone-num" required>
                <input type="date" placeholder="Date Of Birth" id="dob" name="date-of-birth" required>
                <input type="email" placeholder="Email" id="email" name="email" required>
                <input type="password" placeholder="Password" id="password" name="password" required>
                <input type="password" placeholder="Confirm Password" id="pass-conf" name="pass-conf" required>
            </div>
            
            <div class="btn">
                <button class="submit-btn" type="submit">Register</button>
            </div>
        </form>

        <?php if ( isset($_SESSION['error_msg']) ) :?>
            <div class="error"><?= $_SESSION['error_msg']; ?></div>
        <?php endif; ?>

        <div class="login">
            <p>Already have an account? <a href="login.html">Login</a></p>
        </div>
    </div>

</body>

</html>