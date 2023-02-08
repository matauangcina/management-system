<?php
require_once('./session_manager.php');

destroyCookie();

destroySession();

header('Location: ../view/index.php');