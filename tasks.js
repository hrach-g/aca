function ex_1(arr, num){
    let result = [];
    for(let i = 0 ; i < arr.length; i++){
        if(arr[i] > num){
            result.push(arr[i]);
        }
    }
    if(result.length !== 0 ){
        return result;
    }

    return "SUch values do not exist";
}
// Task 2
function foo(arr){
    let maxNum = arr[0];
    let numIndex = 0;
    for(let i = 0 ; i < arr.length; i++ ){
        if(maxNum <= arr[i]){
            numIndex = i
            maxNum = arr[i];
        }
    }
    let max2 = arr[0];
    let max2Index = 0;
    arr.splice(maxNum, 1);
    for(let i = 0; i < arr.length; i++){
        if(max2 < arr[i]){
            max2Index = i;

        }
    }
    return max2Index;


}
function ex_3 (min , max , interval){
    let result = [min];
    let step = (max - min) / (interval - 1);
    if(isFinite(step)){
        while(result[result.length - 1] < max){
            result.push(((result[result.length - 1] + step) * 10) / 10);
        }
    }
    return result;
}
function ex_4(arr, padAmount , repeat){
    let result = arr;
    if(padAmount <= arr.length){
        let start = arr.slice(0, padAmount);
        let end = [...arr].reverse().slice(0, padAmount).reverse();

        for(let i = 0 ; i < repeat; i++){
            result.unshift(...start);
            result.push(...end);
        }
        return result;
    }
    return result = "Invalid padding amount";
}