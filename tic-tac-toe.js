var turn=0;
var isWin=0;
var gameOn=0;
var val1
var val2

function get(name){
    if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
       return decodeURIComponent(name[1]);
}

function  restore() {
    val1=get("p1");
    val2=get("p2");
    if(val1!=undefined && val2!=undefined){
        document.getElementById("p1").value=val1;
        document.getElementById("p2").value=val2;
        gameOn=1
    }
    
}
function startGame(){
    gameOn=1;
    val1=document.getElementById("p1").value;
    val2=document.getElementById("p2").value;
    return true
}

function f(id){
    if(gameOn==0){
        alert("Please enter names of players & click on start game!!!")
        return false;
    }
    if(document.getElementById(id).innerHTML!="-" || gameOn==0)
        return;
    turn++;
    if(turn<=9 && isWin==0){
        if(turn&1){
            document.getElementById(id).innerHTML="0";
        }
        else{
            document.getElementById(id).innerHTML="X";
        }
        if(turn>=5)
            checkForWinner();
    }
}

function checkForWinner(){
    var obj=[0,0,0,0,0,0,0,0,0,0];
    for(var i=1;i<=9;i++){
        obj[i]=document.getElementById(i);
    }

    //horizontal case
    for(var i=1;i<=9;i+=3){
        if(obj[i].innerHTML=="-")
            continue;
        if(obj[i].innerHTML==obj[i+1].innerHTML && obj[i+1].innerHTML==obj[i+2].innerHTML){
            if(obj[i].innerHTML=="0")
                document.getElementById("result").innerHTML=document.getElementById("p1").value + " is winner!!!Game Over";
            else
                document.getElementById("result").innerHTML=document.getElementById("p2").value + " is winner!!!Game Over";
            isWin=1;
            return;
        }
    }

    //vertical case
    for(var i=1;i<=3;i++){
        if(obj[i].innerHTML=="-")
            continue;
        if(obj[i].innerHTML==obj[i+3].innerHTML && obj[i+6].innerHTML==obj[i+3].innerHTML){
            if(obj[i].innerHTML=="0")
                document.getElementById("result").innerHTML=document.getElementById("p1").value + " is winner!!! Game Over";
            else
                document.getElementById("result").innerHTML=document.getElementById("p2").value + " is winner!!! Game Over";
            isWin=1;
            return;
        }
    }

    //diagonal case
    if(obj[1].innerHTML!="-"){
        if(obj[1].innerHTML==obj[5].innerHTML && obj[5].innerHTML==obj[9].innerHTML){
            if(obj[1].innerHTML=="0")
                document.getElementById("result").innerHTML=document.getElementById("p1").value + " is winner!!! Game Over";
            else
                document.getElementById("result").innerHTML=document.getElementById("p2").value + " is winner!!! Game Over";
            isWin=1;
            return;
        }
    }
    if(obj[3].innerHTML!="-"){
        if(obj[3].innerHTML==obj[5].innerHTML && obj[5].innerHTML==obj[7].innerHTML){
            if(obj[3].innerHTML=="0")
                document.getElementById("result").innerHTML=document.getElementById("p1").value + " is winner!!! Game Over";
            else
                document.getElementById("result").innerHTML=document.getElementById("p2").value + " is winner!!! Game Over";
            isWin=1;
            return;
        }
    }

    //continue or end game based on #turns
    if(isWin==0){
        if(turn==9)
            document.getElementById("result").innerHTML="No Winner!!! Game Over";
    }
}