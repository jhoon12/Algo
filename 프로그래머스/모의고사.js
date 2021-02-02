function solution(answers) {
  var answer = [];
  let personCount = [0, 0, 0];
  let max = 0;
  let a = [1, 2, 3, 4, 5];
  let b = [2, 1, 2, 3, 2, 4, 2, 5];
  let c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === a[i % 5]) personCount[0]++;
    if (answers[i] === b[i % 8]) personCount[1]++;
    if (answers[i] === c[i % 10]) personCount[2]++;
  }
  max = Math.max(personCount[0], personCount[1], personCount[2]);
  if (max === personCount[0]) answer.push(1);
  if (max === personCount[1]) answer.push(2);
  if (max === personCount[2]) answer.push(3);
  return answer;
}
