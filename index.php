<head>
    <link rel="stylesheet" href="static/main.css">
    <link rel="stylesheet" href="static/alerts.css">
</head>
<body>
    <?php
    $user = $_GET['username'];
    if(isset($_GET['create'])) {
        $create = true;
        echo "a ";
    }
    else{
        $create = false;
        echo "ab ";
    }
    if($_GET['g'] != 1000 && file_exists("save/gameno" . $_GET['g'] . ".txt") && $create == false) {
        echo "b ";
        $gameno = $_GET['g'];
    }
    else if($create == true){
        echo "lol";
        $gameno = rand(1000, 9999);
        echo "bb ";
    }
    else {
        exit("Fatal error : unknown; trying to reach game number " . $_GET['g']);
        echo "c ";
    }
    
    $dest = '/save/gameno'. $gameno . '.txt';
    const ALPHA = array('a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
    ?>
    <?php echo '<script src="static/main.js"></script>';?>
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
        <?php echo $gameno; echo "<h2 id='gameno'>" . $gameno . "</h2><h3 id='user'>" . $user . "</h3>";?>
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
        <?php echo '<input type="button" onclick="gridW(\'' . $gameno . '\')">Save</input>'?>
        <?php echo '<input type="button" onclick="gridR(\'' . $gameno . '\')">Load</input>'?>
    </div>
    
    
        