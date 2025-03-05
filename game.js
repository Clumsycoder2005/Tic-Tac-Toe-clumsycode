let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#messg");
let gameHead = document.querySelector(".game-heading");
let player1Points = 0;
let player2Points = 0;

let turnO = true;
const winPattern = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
  ];
  
const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
  gameHead.classList.remove("hide");
};

const newGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
  gameHead.classList.remove("hide");
  player1Points = 0;
  player2Points = 0;
  document.getElementById('player1Points').textContent = player1Points;
  document.getElementById('player2Points').textContent = player2Points;
};


boxes.forEach((box) => {
  box.addEventListener("click",() => {
    console.log("box was clicked");
    if(turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    
    checkWinner();
  });
}); 

const disableBoxes =  () => {
  for(let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes =  () => {
  for(let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

function shoWinner(winner) {
  msg.innerText = `Congratulations Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  gameHead.classList.add("hide");
  disableBoxes();
};

function updatePoints(winner) {
  if (winner === "X") {
    player1Points++;
    document.getElementById('player1Points').textContent = player1Points;
  } else if (winner === "O") {
    player2Points++;
    document.getElementById('player2Points').textContent = player2Points;
  }
};

const checkWinner = () => {
  for(let pattern of winPattern) {
    
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("winner",pos1Val);
        let winPlay = pos1Val;
        shoWinner(pos1Val); 
        updatePoints(winPlay);
      }
    }
  }
};

newGameBtn.addEventListener("click",newGame);
resetBtn.addEventListener("click",resetGame);