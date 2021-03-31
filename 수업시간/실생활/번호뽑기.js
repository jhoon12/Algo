const save = [
  "선택정렬",
  "삽입정렬",
  "버블정렬",
  "퀵정렬",
  "병합정렬",
  "해시",
  "스택",
  "큐",
  "힙",
  "그리디",
  "그래프",
  "동적계획법",
  "이분탐색",
  "완전탐색",
  "너비우선탐색",
  "깊이우선탐색",
];
let arr = save.slice();
let stu = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
];
let random = 0;
const solution = () => {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 20; j++) {
      if (j >= 15) {
        arr = save.slice();
      }
      random = Math.floor(Math.random() * arr.length);
      if (stu[j].indexOf(arr[random]) !== -1) {
        j--;
        continue;
      } else stu[j][i] = arr[random];
      arr.splice(random, 1);
    }
    arr = save.slice();
  }
  console.log(stu)
};

solution();

