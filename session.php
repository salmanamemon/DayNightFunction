<?php
session_start();

if (!isset($_SESSION['background'])) {
    $_SESSION['background'] = 'white';
}

if (isset($_POST['toggle'])) {
    $_SESSION['background'] = ($_SESSION['background'] == 'white') ? 'dark' : 'white';
    echo json_encode(['background' => $_SESSION['background']]);
    exit;
}

// Handle unexpected requests or errors
http_response_code(400);
echo json_encode(['error' => 'Invalid request']);
exit;
?>