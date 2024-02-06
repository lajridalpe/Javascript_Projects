let boxes= document.querySelectorAll(".box");
let resetBtn =document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-game");
let msgContainer =document.querySelector(".msg-container");
let msg =document.querySelector("#winner");


let turno =true;

const pattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,5,4],
    [6,7,8]
];
const resetGame=()=>{
    let turno =true;
    enabledBoxes();
    msgContainer.classList.add("hide");

}


 boxes.forEach((box)=> {
        box.addEventListener("click" , () =>{
            console.log("box is clicked");
            if(turno){
                box.innerText="O";
                turno =false;
            }
            else{
                box.innerText="X";
                turno=true;
            }
            box.disabled=true;
            checkWinner();//function t check if their is any winner with clicking an button
        });
 });
 const disabledBoxes =()=>{
    for(let box of boxes){
        box.disabled=true;
        //for no othe btn to beclick afte winner is idenitfied
    };
}
const enabledBoxes =()=>{
        for(let box of boxes){
            box.disabled=false;
            box.innerText="";
            //for no othe btn to beclick afte winner is idenitfied
        }
 };
 let showinner = (winner)=>{
    msg.innerText=`Congo Winner ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBtn();
 }
const checkWinner = ()=>{
    for(let patern of pattern){
        let pos0Val= boxes[patern[0]].innerText;
        let pos1Val= boxes[patern[1]].innerText;
        let pos2Val= boxes[patern[2]].innerText;


        if(pos0Val!="" && pos1Val!=""&& pos2Val!=""){
            if(pos0Val===pos1Val &&pos1Val===pos2Val){
                console.log("Winner winnner Chicken Dinner",pos0Val);
                showinner(pos0Val);
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);