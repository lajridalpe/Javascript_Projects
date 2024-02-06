let userScore=0;
let compScore=0;


const choices= document.querySelectorAll(".choice");
const msg =document.querySelector(".msg");
const userScorePara=document.querySelector(".userScore");
const compScorePara=document.querySelector(".compScore");



const genCompChoice=() =>{
    //creating an array with the use of math random methd
    const option=["rock","paper","scissors"];
    const randomId= Math.floor(Math.random()*3);
    return option[randomId];
};

const drawGame=()=>{
    console.log("Game is Draw");
    msg.innerText="Game is draw ,Play Again";
    msg.style.backgroundColor="#092635 ";
};

const showWinner=(userWin, compChoice, userChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("You Win");
        msg.innerText=`You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor=" #65B741";
    }
    else{
        console.log("You Lose");
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You Lose! ${compChoice} beats youre ${userChoice}`;
        msg.style.backgroundColor=" #B80000";
    }
};



const playGame=(userChoice) =>{
    console.log("user choice id:",userChoice);
    const compChoice=genCompChoice();
    console.log("comp choice is:",compChoice);

if(userChoice === compChoice){
    //then game will dear
    drawGame();
}
else {
let userWin=true;
if(userChoice==="rock"){
    userWin=compChoice=== "paper"? false :true;
}
else if(userChoice==="paper"){
        userWin = compChoice==="scissors"? false : true; 
    }
else {    
    userWin = compChoice === "rock"? false :true;
}
showWinner(userWin ,compChoice,userChoice);
}

};

choices.forEach((choice)=>{
    //console.log(choice);ptintinng div 
    choice.addEventListener("click",()=>{
        //for printing the id for choice as user click it -> 
        const userChoice =choice.getAttribute("id");
      //  console.log("button is click",choiceId) ;
      playGame(userChoice);
    });
    
});