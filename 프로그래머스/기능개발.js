function solution(progresses, speeds) {
  var answer = [];
  let countDay = [];
  let countPublish = 0;
  for (let i = 0; i < progresses.length; i++) {
    countDay[i] = 0;
    while (progresses[i] < 100) {
      progresses[i] += speeds[i];
      countDay[i] += 1;
      if (progresses[i] >= 100) {
        break;
      }
    }
  }
  for (let i = 0; i < countDay.length; i++) {
    countPublish = 0;
    for (let j = i; j < countDay.length; j++) {
      if (countDay[i] >= countDay[j]) {
        countPublish++;
      } else {
        break;
      }
    }
    answer.push(countPublish);
    for (let k = 0; k < countPublish; k++) {
      countDay.shift();
    }
     i = -1;
  }
  return answer;
}
