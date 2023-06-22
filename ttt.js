console.log("Welcome to tic tac toe");
let turn=new Audio("on click.mp3");
let gameoveraudio=new Audio("gameover.mp3");
let chance='X';
let gameover=false;
//function to change turn
const changeturn= () =>{
    if(chance=='X'){
        return 'O';
    }
    else{
        return 'X';
    }
}
//function to check win
const checkwin= () =>{
    console.log("wait");
    let boxtext=document.getElementsByClassName("boxtext");
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[2]].innerText===boxtext[e[1]].innerText) &&(boxtext[e[0]].innerText!="")){
            document.querySelector('.info').innerText=boxtext[e[0]].innerText+" WON";
            gameover=true;
            document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width="200px"
            gameoveraudio.play();
        }
    })
}

//main game logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext=element.querySelector(".boxtext");
    element.addEventListener("click",()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=chance;
            chance=changeturn();
            turn.play();
            checkwin();
            if(gameover===false){
                document.getElementsByClassName("info")[0].innerText="Turn For " + chance;
            }
        }
    })
})
reset.addEventListener('click',()=>{
    let boxtext=document.querySelectorAll(".boxtext");
    Array.from(boxtext).forEach(element=>{
        element.innerText="";
    });
    chance="X";
    gameover=false;
    document.getElementsByClassName("info")[0].innerText="Turn For " + chance;
    document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width="0px"
})