function getConcatenation(nums) {
    const newElements = [...nums];
    for (let i = 0; i < newElements.length; i++) {
        nums[nums.length] = newElements[i];
    }
    console.log(nums)// [1, 2, 3, 4]
}

console.log(getConcatenation([1, 2, 1]));
