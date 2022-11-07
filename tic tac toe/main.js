const cells = document.querySelectorAll('.cell')
const result = document.getElementById('result')
const xResult = document.getElementById('xResult')
const oResult = document.getElementById('oResult')
const drawResult = document.getElementById('drawResult')


document.getElementById('resetBtn').addEventListener('click',reset)

var scoreX = 0
var scoreO = 0
var draw = 0

var x = []
var o = []

var turnX = true


function clear(){
				setTimeout(()=>{
								x = []
				o = []
				
				turnX = true
				
				cells.forEach((cell,index)=>{
				    cell.removeEventListener("click" , play)
								cell.classList.remove('occupied-x')
								cell.classList.remove('occupied-o')

								cell.index = index+1
								
								cell.addEventListener("click",play)
				})
				},500)
}

clear()

function reset(){
				scoreX = 0
 				scoreO = 0
  			draw = 0
  			xResult.innerText = scoreX
oResult.innerText = scoreO
drawResult.innerText = draw
result.innerText = ""
  			clear()
}


const patterns = [
				[1,2,3],
				[4,5,6],
				[7,8,9],
				
				[1,4,7],
				[2,5,8],
				[3,6,9],
				
				[1,5,9],
				[3,5,7],
]


function play(){

this.removeEventListener("click" , play)

				
				if(turnX) {
								this.classList.add('occupied-x')
								x.push(this.index)
								if (checkWin(x)) {
												scoreX += 1
												result.innerText = "X Won"
												xResult.innerText = scoreX
												clear()
												
								}
				}else{
								this.classList.add('occupied-o')
								o.push(this.index)
								if (checkWin(o)) {
												scoreO += 1
												result.innerText = "O Won"
												oResult.innerText = scoreO
												clear()
								}
				}				
}

function checkWin(arr){

				let all = x.concat(o)
				turnX = !turnX

				let isWon = patterns.some((pattern)=>{
								return pattern.every((value)=>{
												return arr.includes(value)
								})
				})

				if(!isWon){
								if(all.length == 9) {
												clear()
								draw += 1
								result.innerText = "Draw"
								drawResult.innerText = draw;
								return
								}
				}else {
								return isWon
				}

				
}
