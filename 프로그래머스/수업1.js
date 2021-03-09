let sfin = 1;
let fin = 3;
let j = 2;
const solution = (n) => {
  const count = n;
  if (n === 1) return 1;
  else if (n === 2) return 3;
  else if (j === count) {
    return fin;
  } else {
    save = fin;
    fin = fin + sfin * 2;
    sfin = save;
    j++;
    return solution(j);
  }
};

console.log(solution(1));

console.log(solution(2));
console.log(solution(3));
console.log(solution(4));
console.log(solution(5));
console.log(solution(6));
console.log(solution(7));
console.log(solution(8));

// let i = 2;
// let count = 0;
// const solution = (n) => {
//   let sfin = 1;
//   let fin = 3;
//   if (i === count) {
//     console.log("마지막");
//     return 0;
//   } else if (n === 1) return 1;
//   else if (n === 2) return 3;
//   else if (i < count) {
//     save = fin;
//     fin = fin + sfin * 2;
//     sfin = save;
//     i++;
//     // console.log(i);
//     solution(i);
//   }
// };

// // count = 1;
// // console.log(solution(1));
// // count = 2;
// // console.log(solution(2));
// // count = 3;
// // console.log(solution(3));
// // count = 4;
// // console.log(solution(4));
// // count = 5;
// // console.log(solution(5));
// // console.log(solution(6));
// // console.log(solution(7));
// // console.log(solution(8));
// count = 5;
// console.log(solution(3));
