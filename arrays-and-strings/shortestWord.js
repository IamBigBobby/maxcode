// https://maxcode.dev/problems/shortest-word/

function shortestWord(str) {

    const arrStr = str.split(' ');

    const accStr = arrStr[0];

    return arrStr.reduce((acc, element) => {
        if(element.length < acc.length){
            acc = element;
        }
        return acc;
    }, accStr).length;
}

function shortestWord2(str) {
    const arr = str.split(' ');
    const firstWord = arr[0];

    return arr.reduce((acc, value) => {
        if (value.length < acc) {
            return value.length;
        }
        return acc;
    }, firstWord.length);
}

console.log(shortestWord("lorem ipsum dolor sit amet"));
console.log(shortestWord2('lorem ipsum dolor sit amet hi'));