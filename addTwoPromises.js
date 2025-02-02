/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
    // promise1.then((value) => {
    //     return value;
    // });

    // promise2.then((value) => {
    //     return value;
    // });

    // const data1 = await promise1;
    // const data2 = await promise2;

    // return data1 + data2;

    //* Solution 2
    // const data = Promise.all([promise1, promise2]).then((values) => {
    //     return values;
    // });

    // const [data1, data2] = await data;

    // return data1 + data2;

    //* Solution 3
    const data1 = await promise1;
    const data2 = await promise2;

    return data1 + data2;

    
    

    
};

addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log); // 4
