function max(numbers) {
    let max = -Infinity;

    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] > max) {
            max = numbers[i];
        }
    }

    return max;
}

function max2(numbers) {
    return numbers.reduce((acc, el) => el > acc ? el : acc)
}

console.log(max([-1, -2, -32, -13])); 

console.log(max2([1, 2, 3, 4 ,5]));
