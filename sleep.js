/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
  let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello")
    }, millis);
  });

  return await myPromise;


}

let t = Date.now();
sleep(500).then(() => console.log(Date.now() - t)); // 100

