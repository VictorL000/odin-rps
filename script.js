function getComputerChoice(){
    let choice = Math.floor( Math.random() * 3);
    const move = ["Rock", "Paper", "Scissors"];
    return move[choice];
}

function play(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        return "Tied!";
    }
    else if((playerSelection.toLowerCase() === "paper" && computerSelection === "Rock") || (playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors") ||
     (playerSelection.toLowerCase() === "scissors" && computerSelection === "Paper")){
        return `Player Win! ${playerSelection} beats ${computerSelection}`;
    }
    else{
        return `Computer Win! ${computerSelection} beats ${playerSelection}!`;
    }
}

function game(){
    for(;;){
        let playerSelection = prompt("Select your move");
        console.log(play(playerSelection, getComputerChoice()));
    }
}