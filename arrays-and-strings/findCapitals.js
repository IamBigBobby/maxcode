// https://maxcode.dev/problems/find-capitals/

function findCapitals(word) {
    const sintacChar = ['.',',','!','?',';',':','@'];
    return word.split('').reduce((acc, item, index) => {
        if(item === item.toUpperCase() && !sintacChar.includes(item) && !(item >= '0' && item <= '9')) {
            acc.push(index);
        }

        return acc;
    }, []);
}

console.log(findCapitals("MaxCode")); // [0, 3]
console.log(findCapitals('Stop!'));
console.log(findCapitals('123456'));
