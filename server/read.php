<?php $file = "../save/gameno" . $_POST['n'] . ".txt";
echo file_get_contents($file);?>