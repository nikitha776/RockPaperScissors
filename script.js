let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg_container");
let userScore = 0;
let compScore = 0;
let userMsgScore = document.querySelector("#user_score");
let compMsgScore = document.querySelector("#comp_score");

const genCompChoice = () => {
    let options = ["rock","paper","scissors"];
    let compNum = Math.floor(Math.random()*3);
    console.log(`comp choice is ${options[compNum]}`)
    return options[compNum];
};

const showDraw = () => {
    msg.innerText = "Game was a Draw. Play again!"
    msg.style.backgroundColor = "#593F62";
}

const showWinner = (userChoice,compChoice,userWin) => {
    if(userWin) {
        userScore++;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor = "Green";
        userMsgScore.innerHTML = userScore;
    }
    else {
        compScore++;
        msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compMsgScore.innerHTML = compScore;
    }
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    let userWin = true;

    if(compChoice === userChoice) {
        console.log("Draw");
        showDraw();
        return;
    }
    else if(userChoice === "rock") {
        //comp choice may be paper or scissor
        userWin = compChoice === "paper" ? false : true;
    }
    else if(userChoice === "paper") {
        //comp choice may be rock or scissor
        userWin = compChoice === "rock" ? true : false;
    }
    else {
        //comp choice may be rock or paper
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userChoice,compChoice,userWin);
}

choices.forEach( (choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        console.log(`user choice is ${userChoice}`);
        playGame(userChoice);
    });
});