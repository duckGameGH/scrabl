<?php $file = "gameno" . $_REQUEST['n'] . ".txt";
echo file_get_contents($file);?>