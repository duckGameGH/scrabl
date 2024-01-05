<head>
    <link rel="stylesheet" href="main.css">
    <link rel="stylesheet" href="alerts.css">
</head>
<body>
    <?php
    setcookie("user",$_GET['username']);
    if($_GET['g'] != 1000 && file_exists("gameno" . $_GET['g'] . ".txt")) {
        setcookie("gameno",$_GET['g']) ;
    }
    else if($_GET['create'] = 'on'){
        $gameno = rand(1000, 9999);
        setcookie("gameno", $gameno);
    }
    else {
        exit("Fatal error : unknown; trying to reach game number " . $_GET['g']);
    }
    
    $dest = 'gameno'. $_COOKIE['gameno'] . '.txt';
    const ALPHA = array('a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
    ?>
    <?php echo '<script src="main.js"></script>';?>
    <div class="column">
        <table>
            <?php 
            for ($line = 0; $line <15 ; ++$line) {
                echo '<tr id="' . $line . '">';
                for ($col =0; $col <15; ++$col) {
                    echo '<td class="box" onclick="boardAdd(' . $line . ',' . $col . ')" id="' . $line . '_' . $col . '" > ';
                }
            }
            ?>
        </table>
    </div>
    <div class="column">
        <?php echo "<h2>" . $_COOKIE['gameno'] . "</h2><h3>" . $_COOKIE['user'] . "</h3>";?>
        <table>
            <?php
            for($i = 0; $i < 8 ; ++$i) {
                echo '<td onclick="letter(' . $i . ')" class="box letter"  id="j' .$i. '">';
            }
            echo '<script>let letters = 0; 
            for (let i = 0; i < 8; i++) {
                console.log(i);
                scramble(i);
            }   
            </script>';
            ?>
            
        </table>
        <div id="errors"></div>
        <?php echo '<input type="button" onclick="gridW(\'' . $_COOKIE['gameno'] . '\')"></input>'?>
        <?php echo '<input type="button" onclick="gridR(\'' . $_COOKIE['gameno'] . '\')"></input>'?>
    </div>
    
    
        