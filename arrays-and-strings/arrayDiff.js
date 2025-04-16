// https://maxcode.dev/problems/array-diff/

function arrayDiff(a, b) {
    return a.filter((item) => {
        return !b.includes(item);
    })
}

console.log(arrayDiff([1, 2, 3, 4, 5, 6], [4, 6, 8, 0,])); // [1, 2, 3, 5]
console.log(arrayDiff([3, 1, 1, 1, 1, 2, 2, 2], [4, 4, 2, 7, 8, 8])); // [3, 1, 1, 1, 1] 
