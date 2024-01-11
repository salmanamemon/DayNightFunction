<?php
session_start();

if (!isset($_SESSION['background'])) {
    $_SESSION['background'] = 'white';
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Day Night Session</title>
    <link rel='stylesheet' href='style.css'>
</head>
<body class="<?php echo $_SESSION['background']."-background"; ?>">
    <a href="about.php">ABOUT PAGE</a>
    <button class="toggle" aria-pressed="false" title="Toggle Dark Mode" id="toggle_button_graphic">
        <?php include "daynight.php"; ?>
    </button>

    <script src="script.js"></script>
</body>
</html>