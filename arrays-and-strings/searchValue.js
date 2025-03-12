function searchValue(matrix, min) {
    return matrix.flat(Infinity).some((word) => word.length >= min);
}

const matrix = [
    ["lorem", "ipsum", "dolor", "sit", "amet"],
    ["consectetur", "adipiscing", "elit", "mauris", "urna"],
    ["mauris,", "accumsan", "quis", "mauris", "in"],
];

console.log(searchValue(matrix, 6)); // true
console.log(searchValue(matrix, 11)); // true
console.log(searchValue(matrix, 200)); // false