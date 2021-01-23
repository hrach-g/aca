//ex1
function check(string){
if(string){
    if(+string[0] % 2 == 0){
        return console.log(false);

    }
    else{
        check(string.slice(1,100));
    }

}
else{
    console.log(true);
}

}

//ex 3
function checkINdex(array,start){
    if(!start){
        var start = 0;
    }

    if(array[start]){
        if(array[start] > array[start + 1]){
            return console.log(strat + 1);
        }
        else{
            checkINdex(array, start + 1);
        }
    }
    else{
        console.log(-1);
    }

}


//ex 4

function fibonacci(num){
    if(num == 1){
        return 0;
    }
    else if(num == 2){
        return 1;
    }
    else{
        return fibonacci(num-1) + fibonacci(num -2 );
    }

}