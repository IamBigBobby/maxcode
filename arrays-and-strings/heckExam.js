// https://maxcode.dev/problems/check-the-exam/

function checkExam(correctAnswers, studentAnswers) {
    const points = studentAnswers.reduce((acc, answer, index) => {
        const correctAnswer = correctAnswers[index];
        
        if(answer === '') {
            return acc;
        }

        if (answer === correctAnswer) {
            acc += 4;
        }

        if (answer !== correctAnswer) {
            acc -= 1;
        }

        return acc;
    }, 0);

    return points < 0 ? 0 : points;
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])); // 6
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", "" ])); // 7
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"])); // 16
console.log(checkExam(["b", "c", "b", "a"], ["" , "a", "a", "c"])); // 0

console.log(checkExam(["a","b","b","b","a","a","c","b","a","a"], ["b","c","c","c","b","b","b","b","","b"]));
