/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    let filteredArr = [];

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (fn(element, i)) {
            filteredArr.push(element);
        }
    }

    return filteredArr

};

const newArray = filter([0, 10, 20, 30], function greaterThan10(n) {
    return n > 10;
});

console.log(newArray);

