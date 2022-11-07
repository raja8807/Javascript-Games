let btns = document.querySelectorAll(".btn")

const result = document.getElementById('result')


let player = document.querySelector(".player")
let comp = document.querySelector(".comp")


var playerScore = 0;
var compScore = 0;

const playerScoreOut = document.getElementById('playerScore')

const compScoreOut = document.getElementById('compScore')


function play(choice){

const  options = ["Rock","Paper","Scissor"]
				
								player.choose = choice;
								
								player.style.backgroundImage = "url('./assets/images/"+player.choose+".png')"
								
								let rand = Math.floor(Math.random()*3)
							
								comp.choose = options[rand]
								comp.style.backgroundImage = "url('./assets/images/"+comp.choose+".png')"
	
								chkWin()
}


function chkWin(){
				if (comp.choose === player.choose) {
							result.innerText =	"Draw"
				}else if (player.choose === "Rock"){
								if (comp.choose === "Scissor") {
												result.innerText =	"Player Win"
												playerScore += 1;
								}else {
												result.innerText =	"Comp Win"
												compScore += 1;
								}
				}else if (player.choose === "Scissor") {
								if (comp.choose === "Paper") {
												result.innerText =	"Player Win"
												playerScore += 1;
								}else {
												result.innerText =	"Comp Win"
												compScore += 1;
								}
				}else if (player.choose === "Paper") {
								if (comp.choose === "Rock") {
												result.innerText =	"Player Win"
												playerScore += 1;
								}else {
								result.innerText =	"Comp Win"
								compScore += 1;
								}
				}
				playerScoreOut.innerText = playerScore
				compScoreOut.innerText = compScore
}

btns.forEach((btn)=>{

				btn.choice = btn.id
				btn.style.backgroundImage = "url('./assets/images/"+btn.choice+".png')"
			
				btn.addEventListener("click" , ()=>{
								play(btn.choice);
				})												
})
