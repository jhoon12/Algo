// let street = 0;
// const solution = (start, last) => {
//   let startParent = 0;
//   let lastParent = 0;
//   let minimum = 0;
//   let maximum = 0;
//   if (start > last) {
//     maximum = start;
//     minimum = last;
//   } else {
//     maximum = last;
//     minimum = start;
//   }
//   while (1) {
//     startParent = Math.floor(minimum / 2);
//     lastParent = Math.floor(maximum / 2);
//     console.log(startParent, lastParent);
//     if (startParent ===  lastParent) {
//       street += 2;
//       return street;
//     } else {
//       console.log("호출");
//       minimum = startParent;
//       maximum = lastParent;
//       street += 2;
//     }
//     if (startParent === 1) {
//       while (1) {
//         lastParent = Math.floor(lastParent / 2);
//         street++;
//         if (lastParent === 1) {
//           break;
//         }
//       }
//       return street;
//     } else if (lastParent === 1) {
//       while (1) {
//         startParent = Math.floor(startParent / 2);
//         street++;
//         if (startParent === 1) {
//           break;
//         }
//       }
//       return street;
//     }
//   }
// };
// console.log(solution(4,11));

const solution = (p1, p2) => {
  if (p1 === p2) return 0;

  return solution(Math.floor(Math.max(p1, p2) / 2), Math.min(p1, p2)) + 1;
};
console.log(solution(10, 11));

const solution = (n, arr) => {
  let max = 0;
  let end = -1001;

  for (let i = -1; i < n - 1; i++) {
    max = Math.max(max + arr[i + 1], arr[i + 1]);
    end = Math.max(max, end);
  }
  return end;
};

console.log(solution(7, [5, -3, 4, 6, 2, -5, 10]));
