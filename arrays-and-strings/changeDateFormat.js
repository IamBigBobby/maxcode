// https://maxcode.dev/problems/change-date-format/

function changeDateFormat(str) {
    const parts = str.split(' ');
    const newParts = parts.map(part => {
        const clean = part.replace(/[()–]/g, '');
        const segments = clean.split('/');

        if (segments.length === 3 && 
            segments[0].length === 2 && 
            segments[1].length === 2 && 
            segments[2].length === 4) {

            const newDate = `${segments[1]}.${segments[0]}.${segments[2]}`;
            return part.replace(clean, newDate);
        }

        return part;
    });

    return newParts.join(' ');
}


const str = "World War I or the First World War (07/28/1914 – 11/11/1918) was a global conflict between two coalitions: the Allies and the Central Powers.";

console.log(changeDateFormat(str));
// "World War I or the First World War (28.07.1914 – 11.11.1918) was a global conflict between two coalitions: the Allies and the Central Powers.";
