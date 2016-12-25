<?php
require 'config.php';

$file = fopen($path, 'r') or die('Unable to open file!');
$textContent = fread($file, filesize($path));
fclose($file);
?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Lexelius Docs</title>
    <link rel="stylesheet" href="css/style.min.css">
  </head>

  <body>
    <div class="success is-hidden">
      <span class="success__copy">Saved &#x2713;</span>
    </div>

    <article class="doc" contenteditable="true">
      <?php echo $textContent; ?>
    </article>

    <script src="js/script.min.js"></script> 
  </body>
</html>