// Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

// The class has three public methods:

// set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

// get(key): if an un-expired key exists, it should return the associated value. Otherweis it should return -1.

// count(): returns the count of un-expired keys.

class TimeLimitedCache {
    constructor() {
        this.cache = new Map();
    }
    /**
     * @param {number} key
     * @param {number} value
     * @param {number} duration time until expiration in ms
     * @return {boolean} if un-expired key already existed
     */
    set(key, value, duration) {
        const found = this.cache.has(key);

        if (found) {
            clearTimeout(this.cache.get(key).timerId);
        }

        this.cache.set(key, {
            value, value,
            timerId: setTimeout(() => {
                this.cache.delete(key)
            }, duration)
        })

        return found;
    }
    /**
     * @param {number} key
     * @return {number} value associated with key
     */
    get(key) {
        if (this.cache.has(key)) {
            return this.cache.get(key).value
        } else {
            return -1;
        }

    }
    /**
     * @return {number} count of non-expired keys
     */
    count() {
        return this.cache.size; 
    }
}

const timeLimitedCache = new TimeLimitedCache();
timeLimitedCache.set(1, 42, 1000); // false
timeLimitedCache.get(1); // 42
timeLimitedCache.count(); // 1
