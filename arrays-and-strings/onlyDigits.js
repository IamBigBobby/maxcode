function onlyDigits(str) {
    return str.split('').every((element) => typeof Number(element) === 'number' && !isNaN(Number(element)));
}

console.log(onlyDigits("123")); // true
console.log(onlyDigits("qwerty")); // false
console.log(onlyDigits("5!")); // false
console.log(onlyDigits("2e2")); // false
console.log(onlyDigits("1234567890"));
