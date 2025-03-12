function max(numbers) {
    let max = -Infinity;

    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] > max) {
            max = numbers[i];
        }
    }

    return max;
}

console.log(max([-1, -2, -32, -13])); 
