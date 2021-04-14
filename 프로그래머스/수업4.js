const solution = (arr) => {
  arr.splice(0, 1);
  let max = Math.max(...arr);
  let counters = new Array(max+1).fill(0);
  for(let i = 0 ; i < arr.length; i++){
      counters[arr[i]]++;
  }
  console.log(counters);
  let result = [];
  for(let i = 0; i < counters.length; i++){
      if(counters[i] > 0){
          let subArr = new Array(counters[i]);
          subArr.fill(i);
          result = result.concat(subArr)
      }
  }
  console.log(result)
};
solution([7, 3, 1, 5, 3, 2, 4, 1]);


