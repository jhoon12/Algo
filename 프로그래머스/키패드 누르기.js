const center = (centerHand, leftHand, rightHand, hand) => {
    console.log(centerHand, leftHand, rightHand, hand);
    if (centerHand + leftHand <centerHand + rightHand) {
      return "L";
    } else if (centerHand + rightHand < centerHand + leftHand) {
      return "R";
    } else if (centerHand + rightHand === centerHand + leftHand) {
      if (hand === "right") {
        return "R";
      } else {
        return "L";
      }
    }
  };
  
  function solution(numbers, hand) {
    var answer = "";
    let leftHand = 0;
    let rightHand = 0;
    let centerHand = 0;
    for (let i = 0; i < numbers.length; i++) {
      switch (numbers[i]) {
        case 1:
          answer += "L";
          leftHand = 3;
          break;
        case 4:
          answer += "L";
          leftHand = 2;
          break;
        case 7:
          answer += "L";
          leftHand = 1;
          break;
        case 3:
          answer += "R";
          rightHand = 3;
          break;
        case 6:
          answer += "R";
          rightHand = 2;
          break;
        case 9:
          answer += "R";
          rightHand = 1;
          break;
        case 2:
          centerHand = 3;
          answer += center(centerHand, leftHand, rightHand, hand);
          if (center(centerHand, leftHand, rightHand, hand) === "L") leftHand = 3;
          else rightHand = 3;
          break;
        case 5:
          centerHand = 2;
          answer += center(centerHand, leftHand, rightHand, hand);
          if (center(centerHand, leftHand, rightHand, hand) === "L") leftHand = 2;
          else rightHand = 2;
          break;
        case 8:
          centerHand = 1;
          answer += center(centerHand, leftHand, rightHand, hand);
          if (center(centerHand, leftHand, rightHand, hand) === "L") leftHand = 1;
          else rightHand = 1;
          break;
        case 0:
          centerHand = 0;
          answer += center(centerHand, leftHand, rightHand, hand);
          if (center(centerHand, leftHand, rightHand, hand) === "L") leftHand = 0;
          else rightHand = 0;
          break;
      }
    }
    return answer;
  }
  