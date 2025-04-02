// https://maxcode.dev/problems/homogenous-arrays/

function filterHomogenous(arrays) {
    return arrays.filter((arr) => {
        const typeArr = typeof arr[0];
        const checkType = arr.every((element) => typeof element === typeArr);
        return arr.length > 0 && checkType;
    });
}

console.log(filterHomogenous([
    [1, 2, 3],
    [],
    [5, true, 8],
    ["qwe", "yyy"],
    ["uio", 6],
  ])); // [[1, 2, 3],  ["qwe", "yyy"]]
  