// https://maxcode.dev/problems/balance-checking/

function balance(book) {
    const punctuation = ['.', ',', '!', '?', ':', ';', '-', '—', '(', ')', '[', ']', '{', '}', '\'', '"', '/', '\\', '@', '#', '$', '%', '^', '&', '*', '_', '+', '=', '<', '>', '|', '`', '~'];

    const checkingSymbolds = (char) => !punctuation.includes(char);

    const fixSimbolsArr = book.split('\n').filter((str) => str !== '').map((str, index) => {
        if(index > 0) {
            const parts = str.split(' ');
            [number, town, value] = parts;
            town = town.split('').filter((char) => checkingSymbolds(char)).join('');
            value = value.split('.').map((part, index) => {
                part = part.split('').filter((char) => checkingSymbolds(char)).join('');
                if(index === 1){
                    if (part.length < 2){
                        part += '0';
                    }
                }
                return part;
            }).join('.');
            return [number, town, value];
        } else {
            value = str.split('.').map((part, index) => {
                part = part.split('').filter((char) => checkingSymbolds(char)).join('');
                if(index === 1){
                    if (part.length < 2){
                        part += '0';
                    }
                }
                return part;
            }).join('.');
            return value;
        }
    });

    let originalBalance;
    const addBalanceStr = fixSimbolsArr.map((str, index) => {
        if (index === 0) {
            originalBalance = Number(str);
            return `Original Balance: ${Number(str).toFixed(2)}`;
        } else {
            const value = Number(str[2]);
            const newBalance = originalBalance - value;
            originalBalance = newBalance
            str.push(`Balance ${(originalBalance).toFixed(2)}`)
            return str;
        }
    });
    

    let totalExpense = 0;
    
    addBalanceStr.forEach((element, index) => {
        if(index > 0) {
            const spending = Number(element[2]);
            totalExpense += spending;
        }
    });

    const resultStr = addBalanceStr.map((str, index) => {
        if(index > 0) {
            return str.join(' ');
        } else {
            return str;
        }
    })

    const productCount = resultStr.length - 1;

    resultStr.push(`Total expense ${totalExpense.toFixed(2)}`);
    resultStr.push(`Average expense ${(totalExpense / productCount).toFixed(2)}`);


    return resultStr.join('\n');
}

const input = `1000.00!=

125 Market !=:125.45
126 Hardware =34.95
127 Video! 7.45

128 Book :14.32
129 Gasoline ::16.10
`;

console.log(balance(input));
