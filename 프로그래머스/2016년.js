function solution(a, b) {
  var answer = "";
  let date = 0;
  for (let i = 1; i < a; i++) {
    switch (i) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        date += 31;
        break;
      case 2:
        date += 29;
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        date += 30;
        break;
    }
  }
  switch ((date + b) % 7) {
    case 1:
      answer = "FRI";
      break;
    case 2:
      answer = "SAT";
      break;
    case 3:
      answer = "SUN";
      break;
    case 4:
      answer = "MON";
      break;
    case 5:
      answer = "TUE";
      break;
    case 6:
      answer = "WED";
      break;
    case 7:
      answer = "THU";
      break;
    case 0:
      answer = "THU";
      break;
  }
  return answer;
}
