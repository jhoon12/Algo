function solution(n, lost, reserve) {
  let answer = n - lost.length;

  for (let i = 0; i < lost.length; i++) {
    for (let j = 0; j < reserve.length; j++) {
      if (lost[i] === reserve[j]) {
        lost.splice(i, 1);
        reserve.splice(j, 1);
        answer++;
        i--;
        j--;
        console.log(lost, reserve, answer);
        break;
      }
    }
  }
  for (let i = 0; i < lost.length; i++) {
    for (let j = 0; j < reserve.length; j++) {
      if (lost[i] - 1 === reserve[j]) {
        lost.splice(i, 1);
        reserve.splice(j, 1);
        answer++;
        i--;
        j--;
        break;
      } else if (lost[i] + 1 === reserve[j]) {
        lost.splice(i, 1);
        reserve.splice(j, 1);
        answer++;
        i--;
        j--;
        break;
      }
    }
  }

  return answer;
}
