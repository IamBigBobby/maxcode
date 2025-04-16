// https://maxcode.dev/problems/format-words-into-sentence/

function formatWords(...arg) {
    if (arg.length === 0) {
        return '';
    }

    if (arg.length === 1) {
        [firstWord] = arg
        return `${firstWord}`;
    }

    if (arg.length === 2) {
        [firstWord, secondWord] = arg;
        return `${firstWord} and ${secondWord}`;
    }

    return arg.reduce((acc, word, index, arr) => {
        if (index === arr.length - 1 && arr.length > 2) {
            acc += `and ${word}`;
        } else if (index === arr.length - 2 && arr.length > 2){
            acc += `${word} `;
        }
         else {
            acc += `${word}, `;
        }
        return acc;
    }, '').trim();
}

console.log('empty ', formatWords()); // ""
console.log(formatWords("Natalie")); // "Natalie"
console.log(formatWords("Natalie", "Mila")); // "Natalie and Mila"
console.log(formatWords("Natalie", "Mila", "Vincent")); // "Natalie, Mila and Vincent"
console.log(formatWords("Natalie", "Mila", "Vincent", "Barbara")); // "Natalie, Mila, Vincent and Barbara"
