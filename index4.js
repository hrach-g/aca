
function ex_1(num1 , num2 ){
    let numbers = [];
    for( let i = num1; i <= num2; i++){
        if(i % 2 == 0){
            numbers.push(i);
        }
    }
    console.log(numbers.toString());
}
ex_1(19, 47);

function ex_2 (array , letter){
    let result = [];
    for(let i = 0; i < array.length; i++){
        if(array[i][0].toLowerCase() !== letter && array[i][0].toUpperCase()){
            result.push(array[i]);
        }
    }
    console.log(result);
}
ex_2(["Machester City" ,"MIlan " , "Marselie" ], "m");

function ex_3(array, min, max) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > min && array[i] < max ) {
            result.push(array[i]);
        }
    }
    console.log(result);
}
ex_3([-10, -8, 0, 10, 20], -100, 15);


function ex_4(text) {
    const string = text.replace(' ', '').split('');
    let number = [];
    if (string[0] === '+') {
        if(string.length === 11) {
            for (let i = 1; i < string.length; i++) {
                if (isNaN(parseInt(string[i]))) {
                    console.log("Bad number");
                }
                else {
                    number.push(string[i]);
                }
            }
        }
        else {
            console.log("Bad number");
        }
    }
    else {
        if (string.length === 10) {
            for (let i = 0; i < string.length; i++) {
                if (isNaN(parseInt(string[i]))) {
                    console.log("Bad number");
                }
                else {
                    number.push(string[i]);
                }
            }
        }
        else {
            console.log("Bad Number");
        }
    }
    console.log(number.join(''));
}
ex_4("234242342");