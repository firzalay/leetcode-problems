var findErrorNums = function(nums) {
    let set = new Set();
    let duplicate = -1;
    let n = nums.length;

    for (let num of nums) {
        if (set.has(num)) {
            duplicate = num;
        }
        set.add(num);
    }

    for (let i = 1; i <= n; i++) {
        if (!set.has(i)) {
            return [duplicate, i];
        }
    }
};