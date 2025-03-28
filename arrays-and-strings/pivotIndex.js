// https://maxcode.dev/problems/pivot-index/

function pivotIndex(arr) {
 const sumArr = (partArr) => {
    return partArr.reduce((acc, number) => acc += number , 0);
 }

 const index = arr.reduce((acc, _, index) => {
    const leftArrSum = sumArr(arr.slice(0, index));
    const rightArrSum = sumArr(arr.slice(index + 1));
    
    if (leftArrSum === rightArrSum) {
        acc.push(index);
    }
                                            
    return acc;

 }, [])

 return index.length > 0 ? Math.min(...index) : -1;
}

console.log(pivotIndex([4, 2, -5, 3]));