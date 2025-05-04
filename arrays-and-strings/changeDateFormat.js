// https://maxcode.dev/problems/change-date-format/

function changeDateFormat(str) {
    const strArr = str.split('').map((element, index, arr) => {
        if(element === '/' && typeof Number(arr[index - 1]) === 'number' && typeof Number(arr[index + 1]) === 'number') {
            element = '.';
        }
        return element;
    });
    return strArr.join('');
}

const str = "World War I or the First World War (07/28/1914 – 11/11/1918) was a global conflict between two coalitions: the Allies and the Central Powers.";

console.log(changeDateFormat(str));
// "World War I or the First World War (28.07.1914 – 11.11.1918) was a global conflict between two coalitions: the Allies and the Central Powers.";
