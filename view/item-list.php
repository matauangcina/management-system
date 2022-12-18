<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="../assets/css/management.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
    <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'>

    <script src="../assets/js/management.js" defer></script>
    <script src="../assets/js/menu.js" defer></script>

    <title>Purchase Management</title>
</head>

<body>
    <header>
        <h1>UAS - Web Based Application Development (Aplikasi Pembelian)</h1>

        <div class="dropdown">
            <button class="valid link"><i class='valid bx bxs-user'></i><p class="valid">Administrator</p><i class='valid bx bxs-down-arrow'></i></button>
            <div class="dropdown-menu">
                <a href="login.html">Log out</a>
            </div>
        </div>
    </header>

    <div class="content">
        <div class="navbar">
            <div class="bx bx-menu" id="menu"></div>
            <ul>
                <a href="home.html"><li class="home"><i class='bx bxs-home'></i>Home</li></a>
                <a href="user.html"><li class="user"><i class='bx bxs-user-circle'></i>User Management</li></a>
                <a href="#"><li class="purchase active"><i class='bx bxs-shopping-bag'></i>Purchase Management</li></a>
                <a href="#"><li class="vendor"><i class='bx bxs-package' ></i>Vendor Information</li></a>
                <a href="#"><li class="article"><i class='bx bx-paperclip' ></i>Article</li></a>
                <a href="#"><li class="soon"><i class='bx bxs-time' ></i>Coming Soon</li></a>
            </ul>
        </div>
        <div class="wrapper">
            <div class="fill">
                <div class="content-1">
                    <h1>Purchase Management</h1>
                    <div class="border"></div>
        
                    <div class="title"><i class='bx bxs-shopping-bag'></i>Items</div>
        
                    <a href="add-item.html"><i class='bx bx-plus'></i>Add New Data</a>
        
                    <div class="search-bar">
                        <label for="search">Search: </label>
                        <input type="search" id="search" placeholder="name">
                    </div>
                </div>
    
                <div class="table item">
                    <div class="header">
                        <div class="column asc no">No.<button class="sort"><i class='bx bxs-up-arrow'></i><i class='bx bxs-down-arrow'></i></button></div>
                        <div class="column pic">Picture</div>
                        <div class="column name">Item Name<button class="sort"><i class='bx bxs-up-arrow'></i><i class='bx bxs-down-arrow'></i></div>
                        <div class="column quantity">Quantity<button class="sort"><i class='bx bxs-up-arrow'></i><i class='bx bxs-down-arrow'></i></div>
                        <div class="column creator">Created By<button class="sort"><i class='bx bxs-up-arrow'></i><i class='bx bxs-down-arrow'></i></div>
                        <div class="column date">Date Created<button class="sort"><i class='bx bxs-up-arrow'></i><i class='bx bxs-down-arrow'></i></div>
                        <div class="column action">Action</div>
                    </div>
                    <div class="body"></div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>