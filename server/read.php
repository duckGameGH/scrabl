<?php $file = "../save/gameno" . $_GET['n'] . ".txt";
echo file_get_contents($file);?>