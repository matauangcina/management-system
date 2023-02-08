<?php
require_once('../controller/session_manager.php');

$stat = validateSession();

if ( !$stat ) {
    destroyCookie();
    destroySession();
    ?>
        <script>
            alert('Session is invalid or has expired! Please re-login!');
            window.location.replace('./index.php');
        </script>
    <?php
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="../assets/css/add-data.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
    <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'>

    <script src="../assets/js/add-data.js" defer></script>
    <script src="../assets/js/menu.js" defer></script>

    <title>Item Management - Add Item</title>
</head>

<body>
    <header>
        <h1>Management System</h1>

        <div class="dropdown">
            <button class="valid link"><i class='valid bx bxs-user'></i><p class="valid"><?= $_SESSION['name']; ?></p><i class='valid bx bxs-down-arrow'></i></button>
            <div class="dropdown-menu">
                <a href="../controller/logout.php">Log out</a>
            </div>
        </div>
    </header>

    <div class="content">
        <div class="navbar">
            <div class="bx bx-menu" id="menu"></div>
            <ul>
                <a href="home.html"><li class="home"><i class='bx bxs-home'></i>Home</li></a>
                <a href="user.html"><li class="user"><i class='bx bxs-user-circle'></i>User Management</li></a>
                <a href="./item-list.php"><li class="purchase active"><i class='bx bxs-shopping-bag'></i>Item Management</li></a>
                <a href="#"><li class="vendor"><i class='bx bxs-package' ></i>Vendor Information</li></a>
                <a href="#"><li class="article"><i class='bx bx-paperclip' ></i>Article</li></a>
                <a href="#"><li class="soon"><i class='bx bxs-time' ></i>Coming Soon</li></a>
            </ul>
        </div>
        <div class="wrapper">
            <div class="fill">
                <div class="content-1">
                    <h1>Add Item</h1>
                    <div class="border"></div>
        
                    <div class="title"><i class='bx bxs-shopping-bag'></i>Add Item</div>

                </div>
                <form method="POST" action="../controller/item_controller.php" id="create" enctype="multipart/form-data">
                    <div class="table">
                        <!-- <div class="row">
                            <div class="column first"><label for="date">Date</label></div>
                            <div class="column second">:</div>
                            <div class="column third"><input required type="date" id="date" name="date-created"></div>
                        </div>

                        <div class="row">
                            <div class="column first"><label for="vendor">Vendor</label></div>
                            <div class="column second">:</div>
                            <div class="column third"><input required type="text" id="vendor" name="vendor"></div>
                        </div>

                        <div class="row">
                            <div class="column first"><label for="item-name">Item Name</label></div>
                            <div class="column second">:</div>
                            <div class="column third"><input required type="text" id="item-name" name="item-name"></div>
                        </div>

                        <div class="row">
                            <div class="column first"><label for="quantity">Quantity</label></div>
                            <div class="column second">:</div>
                            <div class="column third"><input required type="number" id="quantity" name="quantity"></div>
                        </div>

                        <div class="row">
                            <div class="column first"><label for="delivery">Delivery Date</label></div>
                            <div class="column second">:</div>
                            <div class="column third"><input required type="date" id="delivery" name="delivery-date"></div>
                        </div>

                        <div class="row">
                            <div class="column first"><label for="status">Status</label></div>
                            <div class="column second">:</div>
                            <div class="column third">
                                <select name="status" id="status" required>
                                    <option value="...">...</option>
                                    <option value="success">Success</option>
                                    <option value="progress">In Progress</option>
                                    <option value="hold">On Hold</option>
                                    <option value="draft">Draft</option>
                                    <option value="close">Closed</option>
                                </select>
                            </div>
                        </div>

                        <div class="row">
                            <div class="column first"><label for="amount">Amount</label></div>
                            <div class="column second">:</div>
                            <div class="column third"><input required type="number" id="amount" name="amount"></div>
                        </div> -->

                        <div class="row">
                            <div class="column first"><label for="pic">Picture</label></div>
                            <div class="column second">:</div>
                            <div class="column third"><input required type="file" id="pic" name="image" onchange="return validatePic()"></div>
                        </div>

                        <div class="row">
                            <div class="column first"></div>
                            <div class="column second"></div>
                            <div class="column third preview"></div>
                        </div>
                    </div>

                    <div class="error">Test</div>

                    <div class="button">
                        <button type="submit" class="submit">Submit</button>
                        <button type="button" class="back">Back</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</body>

</html>