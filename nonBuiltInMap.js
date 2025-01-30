/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const map = (arr, fn) => {
    let returnedArr = [];

    for (let i = 0; i < arr.length; i++) {
        returnedArr.push(fn(arr[i], i));
    }

    return returnedArr;
};

const newArray = map([1, 2, 3], function plusone(n) {
    return n + 1;
});

console.log(newArray)
