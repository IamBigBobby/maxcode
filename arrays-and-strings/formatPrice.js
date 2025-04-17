// https://maxcode.dev/problems/format-price/

function formatPrice(price) {
    const strPrice = price.toString().split('').reverse().join('');
    const resultStr = [];

    for (let i = 0; i < strPrice.length; i++) {
        if (i % 3 === 0) {
            resultStr.push(' ');
        }
        resultStr.push(strPrice[i]);
    }

    return resultStr.reverse().join('').trim();
}

// console.log(formatPrice(100)); // "100"
// console.log(formatPrice(2000)); // "2 000"
// console.log(formatPrice(345678)); // "345 678"
// console.log(formatPrice(1000000)); // "1 000 000"
console.log(formatPrice(1234567890)); // "1 234 567 890"
