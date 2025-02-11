/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
        }, t);
    };
};

const log = debounce(console.log, 100);

console.log(log("Hello"));
console.log(log("Hello"));
console.log(log("Hello"));
