//rock paper scissor

const choices = ["rock", "paper", "scissor"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(playerChoice){
  
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if(playerChoice === computerChoice){
    result = "Its a Tie";
  }
  else{
    switch(playerChoice){
      case "rock":
        result = (computerChoice === "scissor") ? "You Win!" : "You Lose 😒";
        break;
      case "paper":
        result = (computerChoice === "rock") ? "You Win!" : "You Lose 😒";
        break;
      case "scissor":
        result = (computerChoice === "paper") ? "You Win!" : "You Lose 😒";
        break;
    }
  }
  playerDisplay.textContent = playerChoice;
  computerDisplay.textContent = computerChoice;
  resultDisplay.textContent = result;

  //set the default black color
  resultDisplay.classList.remove("greenText");
  resultDisplay.classList.remove("redText");

  //with if statement..
  /*
  if(result === "You Win!"){
    resultDisplay.classList.add("greenText");
  }
  if(result === "You Lose 😒"){
    resultDisplay.classList.add("redText");
  }
  */
  //with switch
  switch(result){
    case "You Win!":
      resultDisplay.classList.add("greenText");
      break;
    case "You Lose 😒":
      resultDisplay.classList.add("redText");
  }

}