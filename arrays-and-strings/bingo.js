// https://maxcode.dev/problems/lottery-ticket/

function bingo(ticket) {
    return ticket.reduce((acc, item) => {
        [word, code] = item;

        const isMatched = word.split('').some((char) => char.charCodeAt(0) === code);
        
        if (isMatched) {
            acc += 1;
        }

        return acc;
    }, 0);
}

console.log(bingo([["IZDD", 68], ["PGAOC", 68], ["IIWVC", 68]])); // 2 
