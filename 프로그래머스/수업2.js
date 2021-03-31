const solution = (n) => {
  let arr = [];
  let max = 0;
  let left = 0;
  let uniques = [];
  let itemsFound = {};
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < n; j++) {
      left = n - (i + j);
      max = Math.max(i, j, left);
      if (i + j + left === n) {
        if (max === i) {
          if (j + left > i) {
            arr.push([i, j, left]);
          }
        } else if (max === j) {
          if (i + left > j) {
            arr.push([i, j, left]);
          }
        } else {
          if (i + j > left) {
            arr.push([i, j, left]);
          }
        }
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i].sort((a, b) => a - b);
  }
  for (var i = 0, l = arr.length; i < l; i++) {
    let stringified = JSON.stringify(arr[i]);
    if (itemsFound[stringified]) {
      continue;
    }
    uniques.push(arr[i]);
    itemsFound[stringified] = true;
  }
  return uniques;
};
console.log(solution(100), `총 경우의 수 : ${solution(100).length}`);
1

let number = 4;

const solution = (a) => {
    if(a > number) return 0;
    if(a == number) return 1;
    let x = solution(a + 1)
    let y = solution(a + 2);
    let z = solution(a + 3);
    return x + y + z;
}

console.log(solution(0));