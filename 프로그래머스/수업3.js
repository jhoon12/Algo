const solution = (a, b) => {
  let diff;
  let sum;
  if (b > -1 && a > -1) {
    diff = b - a;
  } else if (b < 0 && a > 0) {
    diff = a - b;
  } else if (b > 0 && a < 0) {
    diff = a - b;
    diff *= -1;
  } else {
    diff = b - a;
    diff *= -1;
  }
  let count = 0;
  while (1) {
    if (diff === 0) break;
    switch (
      Math.min(Math.abs(diff - 10), Math.abs(diff - 5), Math.abs(diff - 1))
    ) {
      case Math.abs(diff - 10): {
        if (diff > 0) diff -= 10;
        else diff += 10;
        count++;
        break;
      }
      case Math.abs(diff - 5): {
        if (diff > 0) diff -= 5;
        else diff += 5;
        count++;
        break;
      }
      case Math.abs(diff - 1): {
        if (diff > 0) diff -= 1;
        else diff += 1;
        count++;
        break;
      }
    }
  }
  return count;
};
console.log(solution(-19, 35));


// const solution = (length, n1,n2,n3,n4,n5,n6,n7,n8,n9) => {
//     let arr = [[n1,n2,n3], [n4,n5,n6], [n7,n8,n9]];

// }
// solution(3, 1,5,2,2,6,3,4,8,6)

