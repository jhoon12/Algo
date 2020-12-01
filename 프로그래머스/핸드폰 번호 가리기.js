function solution(phone_number) {
    var answer = '';
    for(let i = 0; i < phone_number.length-4; i++){
        answer = answer.concat('*');
    }
    answer = answer.concat(phone_number.slice(phone_number.length - 4,phone_number));
    return answer;
}