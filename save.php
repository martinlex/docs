<?php
require 'config.php';

$file = fopen($path, 'w') or die('Unable to open file!');

if (isset($_POST['data'])) {
  $text = $_POST['data'];
  $text = preg_replace('/\s+/', ' ', $text);
  echo $text;
}

fwrite($file, $text);
fclose($file);
