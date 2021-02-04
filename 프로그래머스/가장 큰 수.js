function solution(numbers) {
    var answer = "";
    let saveArr = [];
    let second = [];
    let arr = [];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < 10) {
        saveArr.push(numbers[i]);
      } else if (numbers[i] < 100) {
        saveArr.push(numbers[i] / 10);
      } else if (numbers[i] < 1000) {
        saveArr.push(numbers[i] / 100);
      }
    }
    saveArr.sort((a, b) => b - a);
    for (let i = 0; i < saveArr.length; i++) {
      for (let j = 0; j < numbers.length; j++) {
        if (saveArr[i] === numbers[j]) {
          arr.push(saveArr[i])
        } else if (saveArr[i] * 10 === numbers[j]) {
          arr.push(saveArr[i]*10)
          
        } else if (saveArr[i] * 100 === numbers[j]) {
          arr.push(saveArr[i]*100)
        }
      }
    }
    arr = Array.from(new Set(arr))
  answer = (arr.toString().replace(/,/gi,''))
    return answer;
  }//해결중