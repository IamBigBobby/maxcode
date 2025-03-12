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

console.log(shortestWord("lorem ipsum dolor sit amet"))