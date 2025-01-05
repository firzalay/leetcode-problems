/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function (...args) {
    console.log(args.length);
};

console.log(argumentsLength(1, 2, 3));


// let me cook, let me cook... 😈