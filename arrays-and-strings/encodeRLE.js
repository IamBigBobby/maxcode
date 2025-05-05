// https://maxcode.dev/problems/rle-encode/

function encodeRLE(str) {
    const strObj = {};

    for (char of str) {
        if(char in strObj){
            strObj[char] += 1;
        } else {
            strObj[char] = 1;
        }
    }

    let resultStr = '';

    for (key in strObj) {
        resultStr += `${key}${strObj[key] === 1 ? '' : strObj[key]}`;
    }

    return resultStr;
}

console.log(encodeRLE("abc")); // "a2b3c5"
// console.log(encodeRLE("aaaaaaaaaax")); // "a10x"
