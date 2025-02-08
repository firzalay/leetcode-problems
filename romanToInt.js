/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (string) {
    let romans = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let sum = 0;

    for (let i = 0; i < string.length; i++) {
        let current = romans[string[i]];
        let next = romans[string[i + 1]];
        
        

        if (next > current) {
            sum += next - current;
            i++;
        } else {
            sum += current;
        }

    }
    
    return sum;
};

console.log(romanToInt("III"));
