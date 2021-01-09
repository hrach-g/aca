function getBigWord(sentence) {
    let words = sentence.split(/[\s,-]+/);
    let maxWord = words[0];

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxWorld.length) {
            maxWord = words[i];
        }
    }

    return maxWord;
}

getBigWord("Which would be worse - to live as a monster, or to die as a good man?");



// EX_2

function EX_2(arr) {
    let numbers = 0;
    let strings = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == "number") {
            numbers++;
        }
        else if (typeof arr[i] == "string") {
            strings++;
        }
    }

    return 'Numbers: ' + numbers + ' ' + 'Strings: ' + ' ' + strings;
}

EX_2([1, '10', 'hi', 2, 3]);

// EX_7
function ex_7(arr) {
    let result;
    let negativeNumbers = [];

    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            if (!Array.isArray(arr[i])) {
                result = 'Invalid argument';
                break;
            }
            else {
                for (let j = 0; j < arr[i].length; j++) {
                    if (arr[i][j] < 0) {
                        negativeNumbers.push(arr[i][j]);
                    }
                }
            }
        }
    }
    else {
        result = 'Invalid argument';
    }

    if (negativeNumbers) {
        negativeNumbers.sort((a, b) => {
            return a - b;
        });

        result = negativeNumbers[negativeNumbers.length - 1] * negativeNumbers[negativeNumbers.length - 2];
    }
    else {
        result = 'No negatives';
    }

    return result;
}

ex_7([[2, -9, -3, 0], [1, 2], [-4, -11, 0]]);



// EX_6
function ex_6(text) {
    let arrays = [];

    let startIndex = 0;
    let endIndex = 3;
    for (let i = 0; i < Math.ceil(text.length / 3); i++) {
        let letters = text.slice(startIndex, endIndex).split('');

        if (letters.length == 3) {
            letters.push(letters[0]); // awea
            letters.shift(); // wea
        }

        arrays.push(letters.join('')); // ['w', 'e', 'a'] => ['wea']

        startIndex += 3;
        endIndex += 3;
    }
    return arrays.join('');
}

ex_6("asdfgh");