// https://maxcode.dev/problems/count-smiley-faces/

function countSmileys(arr) {
    const eyes = [':', ';'];
    const noses = ['-', '~'];
    const mouths = [')', 'D'];
    let smileCount = 0;

    if (arr.length > 1) {
        for (let i = 0; i < arr.length; i++){
            if (arr[i].length === 2){
                if(eyes.includes(arr[i][0]) && mouths.includes(arr[i][1])){
                    smileCount += 1;
                }
            }
            if (arr[i].length === 3){
                if(eyes.includes(arr[i][0]) && noses.includes(arr[i][1]) && mouths.includes(arr[i][2])) {
                    smileCount += 1;
                }
            }
        }
    }

    return smileCount;
}

console.log(countSmileys([":-)", ";D", ".(", ")))"])); // 2
