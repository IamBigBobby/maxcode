function searchValue(matrix, min) {
    return matrix.flat(Infinity).some((word) => word.length >= min);
}

function searchValue2(matrix, min) {
    let isStringExisted = false
    
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i].some((el) => el.length >= min)) {
            isStringExisted = true;
            break;
        }
    }

    return isStringExisted;
}

const matrix = [
    ["lorem", "ipsum", "dolor", "sit", "amet"],
    ["consectetur", "adipiscing", "elit", "mauris", "urna"],
    ["mauris,", "accumsan", "quis", "mauris", "in"],
];

// console.log(searchValue2(matrix, 6)); // true
// console.log(searchValue2(matrix, 11)); // true
console.log(searchValue2(matrix, 200)); // false