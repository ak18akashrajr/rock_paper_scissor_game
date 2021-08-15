
//doms

let userScore=0;
let computerScore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const scoreBoard_div=document.querySelector(".score-board");
const result_p=document.querySelector(".result > p");
const rock_div=document.getElementById("rock");
const paper_div=document.getElementById("paper");
const scissor_div=document.getElementById("scissor");

//letters mentioning
function toWord(letter) {
    if(letter==="r") return "Rock";
    if(letter==="p") return "Paper";
    if(letter==="s") return "Scissor";
}
// //limits

// if (userScore===10) {
//     result_p.innerHTML=`You have won the Match and reached the max score`
// } else if(computerScore===10) {
//     result_p.innerHTML=`You lost the Match and and the computer reached the max score`
// }
//functions 


function getComputerChoice(params) {
    
    const choices=['r','p','s'];
    const randomNumber=(Math.floor(Math.random()*3));
    return (choices[randomNumber]);
}
// win,lose,draw
function win(userChoice,computerChoice) {
   const userChoice_div=document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    smallUserWord="user".fontsize(4).sub();
    smallcompWord="Comp".fontsize(4).sub();
    result_p.innerHTML=`${toWord(userChoice)} ${smallUserWord} beats ${toWord(computerChoice)} ${smallcompWord}, You Win 😀`;
    userChoice_div.classList.add('green-glow');
    setTimeout(function(){userChoice_div.classList.remove('green-glow')})
}

function lose(userChoice,computerChoice) {
   
    computerScore++;
    computerScore_span.innerHTML=computerScore;
    userScore_span.innerHTML=userScore;
    smallcompWord="Comp".fontsize(4).sub();
    smallUserWord="User".fontsize(4).sub();
    result_p.innerHTML=`${toWord(userChoice)} ${smallUserWord} loses to ${toWord(computerChoice)} ${smallcompWord}, You Lost 😥`
}

function draw(userChoice,computerChoice) {
    smallUserWord="User".fontsize(4).sub();
    smallcompWord="Comp".fontsize(4).sub();
    result_p.innerHTML=`${toWord(userChoice)} ${smallUserWord} equals ${toWord(computerChoice)} ${smallcompWord},That's a draw `;
}



function game(userChoice) {
    
    const computerChoice=getComputerChoice();
    console.log("User Choice=>"+userChoice);
    console.log("Computer Choice =>"+computerChoice);
    switch(userChoice+computerChoice){
        case "rs":
        case "sp":
        case "pr":
            win(userChoice,computerChoice);
            break
        case "ps":
        case "rp":
        case "sr":
            lose(userChoice,computerChoice);
            break
        case "pp":
        case "ss":
        case "rr":
            draw(userChoice,computerChoice);
    }
}


function main(params) {
    rock_div.addEventListener("click",function(){
        game('r');
    })
    
    paper_div.addEventListener("click",function(){
        game('p');
    })
    
    scissor_div.addEventListener("click",function(){
        game('s');
    })
}main()



