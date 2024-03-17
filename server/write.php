<?php
$file = fopen("../save/gameno" . $_POST['n'] . ".txt", "w");
fwrite($file, $_POST['s']);
?>