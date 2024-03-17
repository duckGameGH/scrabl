let alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
let grid = [];
let aLetters = [];
let currentLetter = "";
let currentLetterIndex = undefined;
let gameno = "";
let sLetter = "";
let leftB = undefined;
let rightB = undefined;
let topB = undefined;
let bottomB = undefined;

let base = "---------------\n---------------\n---------------\n---------------\n---------------\n---------------\n---------------\n---------------\n---------------\n---------------\n---------------\n---------------\n---------------\n---------------\n---------------"

function scramble(i){
        console.log(i + "aa");
        sLetter = alpha[Math.floor(Math.random() * (25 - 0 + 1)) + 0];
        console.log("aa" + sLetter);
        document.getElementById('j' + i).innerHTML = sLetter;
        aLetters[i] = sLetter;
        console.log(aLetters[i]);
    }


function letter(id){
    currentLetterIndex = id;
    console.log(currentLetterIndex);
    currentLetter = aLetters[currentLetterIndex];
    aLetters[currentLetterIndex] = "";
    console.log(currentLetter);
    letters--;
}

function boardAdd(y,x){ 
    if(checkNear(x,y)){
        if(grid[y][x] == "-"){
            grid[y][x] = currentLetter;
            aLetters[currentLetterIndex] = ""
            document.getElementById("j" + currentLetterIndex).innerHTML = aLetters[currentLetterIndex];
            updateBoard();
            scramble(currentLetterIndex);
        }
        else{
            customAlert.alert('This tile already has a letter');
        }
    }
    else {
        customAlert.alert('The selected tile could not be added');
    }
}

function updateBoard(){
    console.log('updated1');
    for(i in grid){
        for(y in grid[i]){
            if(grid[i][y] != '-'){
            document.getElementById(i + "_" + y).innerHTML = grid[i][y];
            //document.getElementById(i + "_" + y).innerHTML = grid[i][y].classList.add("letter");
            console.log(i + "_" + y + " ! " + grid[i][y] + " ! " + document.getElementById(i + "_" + y).innerHTML);  
            sound("pop");
            }
        }
    }
    console.log('updated');
}

function gridW(n){
    let str = "";
    for(let i=0; i<15; i++){
        str = str + grid[i].toString() + "\n";
        console.log(grid[i], grid[i].toString());    
    }
    str = str.replace(/,/g, '');
    console.log(str);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "server/write.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            // La requête a réussi, vous pouvez traiter la réponse ici si nécessaire
            console.log(xhr.responseText);
        } else {
            // La requête a échoué
            console.error("La requête a échoué avec le statut : " + xhr.status);
        }
    };
    xhr.send("s=" + encodeURIComponent(str) + "&n=" + encodeURIComponent(document.getElementById("gameno").innerHTML));
}

function gridR(n){  
    if (document.getElementById("gameno").innerHTML.length == 0) {
        document.getElementById("txtHint").innerHTML = "";
        return;
      } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            readStr(this.responseText);
            updateBoard();
          }
        };
        xmlhttp.open("GET", "server/read.php?n=" + document.getElementById("gameno").innerHTML, true);
        xmlhttp.send();
      }
}
        
      


function readStr(inpStr){
    console.log("aaa" + inpStr);
    splitted = inpStr.split('\n'); 
    let i = 0;   
    for (l in splitted){
        grid[i] = splitted[i].split('');
        i++;
    }
}

function checkNear(x,y) {
    test = grid.toString().replace(/,/g, '');
    test = test.replace(/-/g, '');
    if(test != ''){
        if(grid[y][x-1] != undefined){
            leftB = grid[y][x-1];}
        if(grid[y][x+1] != undefined){
            rightB = grid[y][x+1];}
        if(grid[y-1][x] != undefined){
            topB = grid[y-1][x];}
        if(grid[y+1][x] != undefined){ 
            bottomB = grid[y+1][x];}
        if(leftB!="-" || rightB!="-" || topB!="-" || bottomB!="-"){
            return true;
        }
        else{return false;}
    }
    else{return true;}
}

function sound(effect){
    var snd = new Audio("sound/" + effect + ".wav"); // buffers automatically when created
    snd.play();
}

//----------------------------------------------------
function CustomAlert(){
    this.alert = function(message,title){
      document.body.innerHTML = document.body.innerHTML + '<div id="dialogoverlay"></div><div id="dialogbox" class="slit-in-vertical"><div><div id="dialogboxhead"></div><div id="dialogboxbody"></div><div id="dialogboxfoot"></div></div></div>';
  
      let dialogoverlay = document.getElementById('dialogoverlay');
      let dialogbox = document.getElementById('dialogbox');
      
      let winH = window.innerHeight;
      dialogoverlay.style.height = winH+"px";
      
      dialogbox.style.top = "100px";
  
      dialogoverlay.style.display = "block";
      dialogbox.style.display = "block";
      
      document.getElementById('dialogboxhead').style.display = 'block';
  
      if(typeof title === 'undefined') {
        document.getElementById('dialogboxhead').style.display = 'none';
      } else {
        document.getElementById('dialogboxhead').innerHTML = '<i class="fa fa-exclamation-circle" aria-hidden="true"></i> '+ title;
      }
      document.getElementById('dialogboxbody').innerHTML = message;
      document.getElementById('dialogboxfoot').innerHTML = '<button class="pure-material-button-contained active" onclick="customAlert.ok()">OK</button>';
    }
    
    this.ok = function(){
      document.getElementById('dialogbox').style.display = "none";
      document.getElementById('dialogoverlay').style.display = "none";
    }
  }
  
  let customAlert = new CustomAlert();

readStr(base);
if(document.getElementById('gameno').innerHTML != null){
    gameno = document.getElementById('gameno').innerHTML.split(';')[0];
}
console.log(document.getElementById('gameno').innerHTML + "gameno");
updateBoard();


