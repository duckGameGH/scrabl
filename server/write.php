<?php $file = fopen("gameno" . $_COOKIE['gameno'] . ".txt", "w");
fwrite($file, $_POST['s']);?>