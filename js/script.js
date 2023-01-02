let turn = 'X';
let bgSound = new Audio("sound/bg.mp3");
let gameOverSound = new Audio("sound/gameover.mp3");

//winner function
function checkWinner(){
    var data = document.querySelectorAll(".textBox");
    var temp = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    
    var status = false;
    temp.forEach((e,i)=>{
        console.log(data[e[0]].innerHTML);
        console.log(data[e[1]].innerHTML);
        console.log(data[e[2]].innerHTML);
        console.log("Prince");

        if((data[e[0]].innerHTML === data[e[1]].innerHTML) && 
           (data[e[1]].innerHTML === data[e[2]].innerHTML) &&
           (data[e[0]].innerHTML !== "" )){
            
            gameOverSound.play();
            console.log("WINNER");
            status = true;
        }
    });
    
    return status;
}


//nextTurn function
function nextTurn(){
    if(turn === 'X')
       turn = 'O';
    else
       turn = 'X';
}

//isDraw function
function isDraw(){
    return false;
}


//Reset
document.querySelector(".btn").addEventListener("click",function(){
    turn = 'X';
    var temp = document.querySelectorAll(".textBox");
    temp.forEach((element)=>{
        element.innerHTML = "";
    });

    document.querySelector(".info img").style.width = "0px";
    document.querySelector(".winner").innerHTML = "";
});

//Game logic
var boxes = document.querySelectorAll(".box");
Array.from(boxes).forEach((element)=>{
    
    element.addEventListener("click",function(){
        
        bgSound.play();
        element.querySelector(".textBox").innerHTML = turn;
        // console.log(element);
        if(checkWinner()){
            document.querySelector(".winner").innerHTML = `${turn} : Won`;
            document.querySelector(".winner").style.color = "red";
            document.querySelector(".info img").style.width = "236px";
        }

        nextTurn();
        document.querySelector(".playerTurn").innerHTML = `Turn for : ${turn}`;
    });
});
