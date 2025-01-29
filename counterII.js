function createCounter(init) {
    let currentCount = init;

    return {
        increment() {
            currentCount++;
            return currentCount;
        },
        decrement() {
            currentCount--;
            return currentCount;
        },
        reset() {
            currentCount = init
            return currentCount;
        },
    };
}

const counter = createCounter(0);

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
console.log(counter.reset());
