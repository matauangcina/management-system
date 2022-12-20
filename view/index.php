<?php
session_start();

if ( isset($_SESSION['auth']) ) {
    if ( $_SESSION['auth'] === true ) {
        header('Location: ./item-list.php');
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

    <title>Login</title>
</head>

<body>
    <div class="content">
        <div class="container-1">
            <img src="../assets/imgs/login.jpg" alt="">
        </div>
        <div class="container-2">
            <h1>Login</h1>
            <form method="POST" action="../controller/auth_controller.php" id="login">
                <div class="input-field">
                    <input type="email" placeholder="Email" id="email" name="email" required>
                    <input class="last" type="password" placeholder="Password" id="password" name="password" required>

                    <?php if ( isset($_SESSION['error_msg']) ) : ?>
                        <div class="error"><?= $_SESSION['error_msg']; ?></div>
                        <?php unset($_SESSION['error_msg']); ?>
                    <?php endif; ?>
                </div>
                
                <div class="btn">
                    <button class="submit-btn" type="submit" name="submit">Login</button>
                </div>
            </form>
            
            <div class="register">
                <p>Don't have an account? <a href="./register.php">Register</a></p>
            </div>
        </div>
    </div>
</body>

</html>