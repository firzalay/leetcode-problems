function except(val) {
    let result = {
        toBe: function (params) {
            if (val === params) {
                return true;
            } else {
                throw "Not Equal";
            }
        },
        notToBe: function (params) {
            if (val !== params) {
                return true;
            } else {
                throw "Equal";
            }
        },
    };
    return result
}

console.log(except(5).toBe(5));
console.log(except(5).toBe());