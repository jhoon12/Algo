function solution(nums) {
  var answer = 0;
  let num = Array.from(new Set(nums));
  console.log(num);
  if (nums.length / 2 <= num.length) {
    answer = nums.length / 2;
  } else if (nums.length / 2 >= num.length) {
    answer = num.length;
  }
  return answer;
}
