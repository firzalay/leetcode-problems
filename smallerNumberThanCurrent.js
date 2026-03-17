/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
    let answer = [];
    for (let i = 0; i < nums.length; i++) { 
        let count = 0
        for (let j = 0; j < nums.length; j++) {
            if(j != i && nums[j] < nums[i]) {
                count++
            }
        }

        answer.push(count)
    }

    return answer;

};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
