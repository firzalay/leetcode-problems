const findMissing = (num) => {
    const missingArr = []
    const minNum = Math.min(...num); 
    const maxNum = Math.max(...num); 

  for(let i=minNum; i<= maxNum; i++) {
    if(!num.includes(i)) { 
      missingArr.push(i); 
    }
  }
  return missingArr;
}

console.log(findMissing([1,15]))