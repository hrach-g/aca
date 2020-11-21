const array = ["wish", "slightly", "understand", "longer", "unexpected", "heart"];

function ex_4(data) {
    let max = data[0].length;
    let min = data[0].length;
    for (let i = 1; i < data.length; i++) {
        if (data[i].length > max) {
            max = data[i].length;
        }
        else {
            if (data[i].length < min) {
                min = data[i].length;
            }
        }
    }
    console.log(min + max);
}

ex_4(array);




Task 8
const array = [[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8 ,-1]];
const array2 = [[8, 35, 2], [8], [5, 6 ,-5, -6], [1, 3, -9, 0, -1]];
const array3 = [[1], [2], [3], [4]];


function ex_8(data) {
    let a = [];
    let result = [];
    for(let i = 0; i < data.length; i++) {
        a.push(data[i]);
        let sum = 0;
        for (let j = 0; j < a[i].length; j++) {
            sum += a[i][j];
        }
        result.push([sum]);
    }
    console.log(result);
}

ex_8(array);
ex_8(array2);
ex_8(array3);





const array = [1, '10', 'hi', 2, 3];

function ex_3(data) {
    // Task 3
    let numCount = 0;
    let strCount = 0;
    for (let i = 0; i < data.length; i++) {
        if (typeof data[i] === 'string') {
            strCount++;
        }
        else {
            numCount++;
        }
    }
    console.log(`Numbers: ${numCount}, Strings: ${strCount}`);
}

ex_3(array);


let string1 = "If at _ you don't _, try, try _";
const pieces = ["first ", "suceed", "again"];
 Task 1
function ex_1(text, data){
    let arrIndex = 0;

    while (text.indexOf("_") !== -1){
        const index = text.indexOf("_");
        text = text.slice(0, index) + data[arrIndex++] + text.slice(index + 1 , text.length);
    }
    console.log(text)

}
ex_1(string1 , pieces);
const array = [8, 0, 1, 'hey', 12, 5, true, '2', null, 7, 3];






function ex_2(data) {
Task 2
    let zuyg = [];
    let kent = [];

    for (let i = 0; i < data.length; i++) {
        if (typeof data[i] === 'number') {
            if (data[i] % 2 === 0) {
                zuyg.push(data[i]);
            }
            else {
                kent.push(data[i]);
            }
        }
    }
    const result = [...kent, ...zuyg];
    console.log(result);
}

ex_2(array);

const array = [4, 3, 0, 9];

function ex_7(data) {
Task 7
    let sortedArray = [];

    for (let i = 0; i < data.length; i++) {
        sortedArray[data[i]] = data[i];
    }

    for (let i = 0; i < sortedArray.length; i++) {
        if (typeof sortedArray[i] !== 'number') {
            sortedArray[i] = undefined;
        }
    }

    console.log(sortedArray);
}

ex_7(array);



const arr1 = [21,-9,15, 2116, -71 ,33];
const n1 = -71;

function ex_5(data, num) {
// Task 5
    let index = 0;
    let minDistance = Math.abs(data[0] - num);
    for( let i = 0 ; i < data.length; i++){
        if(Math.abs(data[i] - num ) < minDistance){
            minDistance = Math.abs(data[i] - num);
            index = i;


        }
    console.log(index);

    }

}
ex_5(arr1,n1);



