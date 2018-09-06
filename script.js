
var game = document.getElementById('game');
var EndGame = false;

for (var i = 1; i <= 9; i++) {
		game.innerHTML += '<li class="gameBlock" id="'+i+'">_</li>';
}

var count = 0;
var gamer;
var symbol = 'O';
var space = '_';
game.onclick = function(e){
	if(!EndGame){
    	console.log(e);
    	if ((e.target.className == 'gameBlock')&&(e.target.innerHTML!=symbol)&&(e.target.innerHTML==space)) {
    		//e.target.className = 'gameBlockAdvance';
    		if (count % 2 == 0) {
    	  		symbol = 'O';
    	  		e.target.style = 'color:black;';
    		} else {
   	   			symbol = 'X';
    	  		e.target.style = 'color:black;';
    		}
    		count++;
    		e.target.innerHTML=symbol;
    		if(count>4) checkWin(symbol);
		}
		
	}
}

function checkWin(s){
	var gameField = document.getElementsByClassName('gameBlock');
	var endCount = 0;
	console.log(gameField);	

	for (var i = 0; i < 9; i += 3) {
      if (gameField[i].innerHTML == s && gameField[i+1].innerHTML == s && gameField[i+2].innerHTML == s){
      	EndGame = true;
      }
    }
    for (i = 0; i < 3; i++) {
      if (gameField[i].innerHTML == s && gameField[i+3].innerHTML == s && gameField[i+6].innerHTML == s){
      	EndGame = true;		 
      }
    } 
    if (gameField[0].innerHTML == s && gameField[4].innerHTML == s && gameField[8].innerHTML == s){
        EndGame = true;		
    }
    if (gameField[2].innerHTML == s &&gameField[4].innerHTML == s && gameField[6].innerHTML == s) {
       	EndGame = true;		
    }


    if (s=="X") {gamer=2;} else {gamer=1;}
    if(EndGame) game.innerHTML += '<div class="restart" style="background-color:white;">выйграл игрок '+gamer+' за '+count+' ходов </div><br><a class="restart" href="index.html">ЗАНОВО</a>';



    for (var i = 0; i < 9; i++) {
    	if (gameField[i].innerHTML!="_") {endCount++;}
    }
    if ((endCount==9)&&(!EndGame)) {EndGame = true; if(EndGame) game.innerHTML += '<div class="restart" style="background-color:white;">НИЧЬЯ</div> <br><a class="restart" href="index.html">ЗАНОВО</a>';}

    
  }
