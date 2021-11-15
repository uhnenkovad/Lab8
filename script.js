var userScore = 0;
var compScore = 0;

function writeName(){
	var user = prompt("Input your name");
	document.getElementById('user').textContent = user;
	if(user == "")
	user = "user";
	document.getElementById('user').textContent = user;
}

function game(){
	if (userScore == 3 || compScore == 3) {
		alert("Game over, press F5 and test your luck again");
		return
	}
	var usersValue = Math.floor(Math.random()*10+1);
	var compValue = Math.floor(Math.random()*10+1);


	if(usersValue>compValue){
		userScore++;
	}
	else if(usersValue<compValue){
		compScore++;
	}
	

	if (userScore == 3) {
		alert("My congratulations, you win");
	}
	if(compScore==3){
		alert("You lose, try to win next time");
	}
	
	if(usersValue==compValue){
		alert("Draw");
	}
	document.getElementById('uRanValue').textContent=usersValue;
	document.getElementById('cRanValue').textContent=compValue;
	document.getElementById('uScore').textContent=userScore;
	document.getElementById('cScore').textContent=compScore;
}



// document.body.innerHTML=`
// 		<div class = "fBlock">
// 			<p>User<\p>
// 			<p>Score<\p>
// 			<div class = "points"></div>
// 		</div>
// 		<div class = "sBlock" >
// 			<button></button>
// 		</div>
// 		<div class = "tBlock">
// 			<p>User<\p>
// 			<p>Score<\p>
// 			<div class = "points"></div>
// 		</div>
// `;


// document.querySelector('img').onclick = function ball() {
// if(question.value.length==0){
//     alert("Введіть, будь ласка, своє запитання");}
//     else{
// 	document.querySelector('img').classList.add('animation');
    
//     let clearAnimatiom = setTimeout(function() {
//         document.querySelector('img').classList.remove('animation');
//       }, 1500)
//     let returnAnswer = phrases[Math.floor(Math.random()*phrases.length)];
//     document.querySelector('.answer').innerHTML = returnAnswer;
// }
// }
/*<div class = "result">
						<span  class = "answer"></span>
</div>*/