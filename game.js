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
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
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
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      box.style.color = "#ff4081";
      box.style.backgroundColor = "#80cce8";
      turnO = false;
    } else {
      box.innerText = "X";
      box.style.color = "#3f51b5";
      box.style.backgroundColor = "#f55d9a";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const disableBoxes = () => {
  boxes.forEach(box => box.disabled = true);
};

const enableBoxes = () => {
  boxes.forEach(box => {
    box.disabled = false;
    box.innerText = "";
  });
};

function showWinner(winner) {
  msg.innerText = `Congratulations! Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  gameHead.classList.add("hide");
  disableBoxes();
}

function updatePoints(winner) {
  if (winner === "X") {
    player1Points++;
    document.getElementById('player1Points').textContent = player1Points;
  } else if (winner === "O") {
    player2Points++;
    document.getElementById('player2Points').textContent = player2Points;
  }
}

const checkWinner = () => {
  for (let pattern of winPattern) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
      showWinner(pos1);
      updatePoints(pos1);
    }
  }
};

newGameBtn.addEventListener("click", newGame);
resetBtn.addEventListener("click", resetGame);