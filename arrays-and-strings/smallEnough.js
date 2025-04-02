// https://maxcode.dev/problems/small-enough/

function smallEnough(numbers, limit) {
    return numbers.every((element) => element <= limit);
}

console.log(smallEnough([1, 2, 3], 5)); // true
console.log(smallEnough([-5, 5], 5)); // true
console.log(smallEnough([1, 12, 3], 5)); // false
console.log(-5 < 5)
