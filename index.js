function digitContain(a , b){
    // Task 1
    let isExists = false;
    for (let i = 0; i < a; i++){
        if (a[i] / b === 1 ){
            isExists = true;
        }
    }
    if(isExists === true){
        alert("yes");
    }else{
        alert("no")
    }
}

function reverse(stringOfNumber){
    // Task 2
    let string = "";
    if(stringOfNumber.length === 2) {
        string += stringOfNumber[1];
        string += stringOfNumber[0];

    } else if(stringOfNumber.length > 2) {
        string += stringOfNumber[stringOfNumber.length - 1];
        for( let i = 1 ; i < stringOfNumber.length -1 ; i++) {
           string += stringOfNumber[i];
        }
        string += stringOfNumber[0];

    } else {
        string = stringOfNumber;
    }

    alert(string);

}

function differenceOfNumbers(number){
    // Task 3
    let stringNum = number + "";
    let max = 0 ;
    let min = 9;
    for(let i = 0; i < stringNum.length ; i++ ){
        if(stringNum[i] > max){
            max = stringNum[i];
        }

        if(stringNum[i] < min){
            min = stringNum[i];
        }
    }
    alert(max - min);
}

function isPrime(){
    // Task 4
    let number = +prompt("Number",);
    if( number % 2 === 1){
        alert("yes");
    }else{
        alert("no");
    }
}

function rockPaperScissors(){
    // Task 5
    let player1 = prompt("Rock-Paper-Scissors" );
    let player2 = prompt("Rock-Paper-Scissors" );
    let rock = "Rock";
    let paper = "Paper";
    let scissors = "Scissors";
    let drawText = "Draw! Enter new values";
    if(player1 !== rock && player1 !== paper && player1 !== scissors){
        alert("Invalid input, enter correct value.");
        return rockPaperScissors();


    }
    if(player2 !== rock && player2 !== paper && player2 !== scissors){
        alert("Invalid input, enter correct value.");
        return rockPaperScissors();

    }


    if(player1 === player2){
        alert(drawText);
        return rockPaperScissors();

    }

    switch(player1){
        case rock:
            if(player2 === paper ){
                alert("“2nd player wins!”");
            }else {
                alert("1st win")
            }

            break;
        case paper:
            if(player2 === scissors ){
                alert("2nd player wins!");
            }else{
                alert("1st player win");
            }
            break;
        case scissors:
            if(player2 === rock){
                alert("“2nd player wins!”");


            }else{
                alert("1st player win");
            }
            break;
        default:
            console.log("deafoult case");

    }
}

function fibonacci(num) {
    // Task 6
    let a = 1;
    b = 1;
    for( let i = 3; i <= num; i++){
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

function sequence(n){
    // Task 8
    let  result = 0;
    let plusOrMinus = "+";
    for ( let i = 1; i <= n ; i = i + 2 ){

        if( plusOrMinus === "+"){
            result += 1 / i;
            plusOrMinus = "-";
        }else if (plusOrMinus === "-") {
            result -= 1 / i;
            plusOrMinus = "+";

        }

    }
    return result;
}


function digitCombinations() {
    // Task 9
    let num = "0";
    let comma = ",";
    let result = "";
    for(let i = 0; i < 100; i++ ){
        if(i < 10 ){
            result += num + i + comma;


        }
        else if( i === 99){
            result += i;
        }


        else {
            result += i + comma;
        }

    }
    console.log(result);
}
