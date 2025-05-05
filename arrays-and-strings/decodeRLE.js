// https://maxcode.dev/problems/rle-decode/

function decodeRLE(str) {
    let resultStr = '';
    for (let i = 0; i < str.length; i++) {
        const currentChar = str[i];
        const nextChar = str[i + 1];
        if(isNaN(Number(currentChar)) && !isNaN(Number(nextChar))){
            let number = '';
            for(j = i + 1;;j++) {
                if(Number(str[j]) || str[j] === '0') {
                    number += str[j];
                } else {
                    break;
                }
            }
            resultStr += `${currentChar.repeat(Number(number))}`;
        } else if(isNaN(Number(currentChar))) {
            resultStr += currentChar;
        }
    }

    return resultStr;
}

// console.log(decodeRLE("a4b6c3")); // "aaaabbbbbbccc"
// console.log(decodeRLE("a10b2")); // "aaaaaaaaaabb"
console.log(decodeRLE("abc")); // "abc"
// console.log(decodeRLE("abc11")); // "abccccccccccc"
