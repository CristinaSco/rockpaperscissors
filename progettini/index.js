let userChosen
let computerChosen
var result = results()
const displayResult = document.getElementById("result")
const computerChoice = document.getElementById("computer-choice")
const userChoice = document.getElementById("user-choice")
var randomNumber = Math.round(Math.random() * (3))
const possibleChoices = document.querySelectorAll(".choices")



//User
  possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    userChosen = e.target.id
    generatedComputerChoice()
    results()
    userChoice.innerHTML = textEmoji(userChosen)
    computerChoice.innerHTML = textEmoji(computerChosen)
    displayResult.innerHTML = result
    randomNumber = Math.round(Math.random() * (3))
  }))


//Scelta del Computer Random
function generatedComputerChoice(){
  if (randomNumber === 1) {
    return computerChosen = "sasso"
  } else if (randomNumber === 2) {
    return computerChosen = "carta"
  } else if (randomNumber === 3){
    return computerChosen = "forbici"
  }
}

function textEmoji(player){
  if (player === "sasso") {
    return "<img src=\"images/sasso.png\" width=\"70px\" height=\"70px\">"
  } else if (player === "carta") {
    return "<img src=\"images/carta.png\" width=\"70px\" height=\"70px\">"
  } else if (player === "forbici"){
    return "<img src=\"images/forbici.png\" width=\"70px\" height=\"70px\">"
  }
}

//Risultati
function results(){
  if (computerChosen === userChosen) {
    return result = "Pareggio!"
  } else if (computerChosen === "sasso" && userChosen === "carta"){
    return result = "Hai vinto!"
  } else if (computerChosen === "sasso" && userChosen === "forbici"){
    return result = "Hai perso!"
  } else if (computerChosen === "forbici" && userChosen === "carta"){
    return result = "Hai perso!"
  } else if (computerChosen === "forbici" && userChosen === "sasso"){
    return result = "Hai vinto!"
  } else if (computerChosen === "carta" && userChosen === "sasso"){
    return result = "Hai perso!"
  } else if (computerChosen === "carta" && userChosen === "forbici"){
    return result = "Hai vinto!"
  }
}
