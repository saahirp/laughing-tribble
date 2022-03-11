document.getElementById("player1name").innerHTML = localStorage.getItem("player1");
document.getElementById("player2name").innerHTML = localStorage.getItem("player2");
function SendValue()
{
    number1 = document.getElementById("inputnum1").value;
    number2 = document.getElementById("inputnum2").value;
    actualanswer = parseInt(number1) * parseInt(number2);

    document.getElementById("num1").innerHTML = number1;
    document.getElementById("num2").innerHTML = number2;
}

function AnswerCheck(){
    ygyagsydgy = document.getElementById("weqweq").value;
    if(ygyagsydgy == actualanswer){
        
    }
}