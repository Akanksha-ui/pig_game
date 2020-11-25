
var scores, roundScore, activePlayer, gamePlaying;

init();


document.querySelector('.btn-roll').addEventListener('click', function() {

	if(gamePlaying) {
		//1. Random Number
	var dice = Math.floor(Math.random() * 6) + 1;

	//2. Dispaly the Result
	var diceDom = document.querySelector('.dice');
	diceDom.style.display = 'block';
	diceDom.src = 'dice-' + dice + '.png';


	//3. Update the round score If the rolled number was not 1
	if(dice !== 1) {
		//Add Score
		roundScore += dice;
		document.querySelector('#current-' + activePlayer).textContent = roundScore;
	}else {
		//Next Player
		nextPlayer();
	}
	}
	
});


document.querySelector('.btn-hold').addEventListener('click', function() {

	if(gamePlaying) {
		//Add current score to global score
	scores[activePlayer] += roundScore;

	//update the UI
	document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

	//Check if player won the game
	if(scores[activePlayer] >= 100) {
		document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
		document.querySelector('.dice').style.display = 'none';
		document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
		document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
		gamePlaying = false;
	}else {
		//Next Player
	nextPlayer();
	}
	}
	

});

document.querySelector('.btn-new').addEventListener('click', init);

document.querySelector('.btn-inst').addEventListener('click', toggleModal);
document.querySelector('#close').addEventListener('click', close);




function nextPlayer() {
	//Next Player
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
		roundScore = 0;

		document.getElementById('current-0').textContent = 0;
		document.getElementById('current-1').textContent = 0;

		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');

		document.querySelector('.dice').style.display = 'none';
}



function init() {
	scores = [0,0];
	roundScore = 0;
	activePlayer = 0;
	gamePlaying = true;

	document.querySelector('.dice').style.display = 'none';
	document.querySelector('.modal').style.visibility = "hidden";

	document.getElementById('score-0').textContent = 0;
	document.getElementById('score-1').textContent = 0;
	document.getElementById('current-0').textContent = 0;
	document.getElementById('current-1').textContent = 0;
	document.querySelector('#name-0').textContent = 'Player1';
	document.querySelector('#name-1').textContent = 'Player2';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
	document.querySelector('.player-1-panel').classList.remove('active');
}


function toggleModal() {
	document.querySelector('.modal').style.visibility = "visible";
}


//close when x click
function close() {
	document.querySelector('.modal').style.visibility = "hidden";
}


