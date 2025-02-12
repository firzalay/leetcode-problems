/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function (functions) {
    return Promise.all(functions.map((fn) => fn()));
};

const promise = promiseAll([() => new Promise((res) => res(42))]);
console.log(promise.then(console.log)); // [42]
