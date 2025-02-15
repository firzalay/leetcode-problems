function chunkArr2(arr, size) {
    if (size <= 0) throw new Error("Chunk size must be a positive integer");
    return arr.reduce((acc, _, i) => {
        if (i % size === 0) acc.push(arr.slice(i, i + size));
        return acc;
    }, []);
}
console.time("reduce");
console.log(chunkArr2(arr, 2));
console.timeEnd("reduce");
