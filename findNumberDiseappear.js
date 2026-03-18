const findMissing = (nums) => {
    const missingArr = [];

    for (let i = 1; i <= nums.length; i++) {
        if (!nums.includes(i)) {
            missingArr.push(i);
        }
    }

    return missingArr;
};

console.log(findMissing([1, 15]));
