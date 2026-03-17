function findMismatch(nums) {
    const n = nums.length;
    const actualSum = nums.reduce((acc, curr) => acc + curr, 0);
    const uniqueSum = [...new Set(nums)].reduce((acc, curr) => acc + curr, 0);
    const expectedSum = (n * (n + 1)) / 2; // Formula for sum of 1 to n

    const duplicate = actualSum - uniqueSum;
    const missing = expectedSum - uniqueSum;

    return [duplicate, missing];
}