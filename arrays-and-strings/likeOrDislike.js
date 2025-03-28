// https://maxcode.dev/problems/like-dislike/


function likeOrDislike(buttons) {
    return buttons.reduce((acc, button) => {
        return acc === button ? acc = 'Nothing' : acc = button;
    } , 'Nothing')
}

console.log(likeOrDislike(["Dislike"])); // "Dislike"
console.log(likeOrDislike(["Like", "Like"])); // "Nothing"
console.log(likeOrDislike(["Dislike", "Like"])); // "Like"
console.log(likeOrDislike(["Like", "Dislike", "Dislike"])); // "Nothing"