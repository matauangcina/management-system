<?php

require_once('../config/db.php');

$conn = new mysqli(
    $config['server'],
    $config['username'],
    $config['password'],
    $config['database']
);