function solution(arr, divisor) {
    var answer = [];
    
    answer = arr.filter(e=> e %  divisor === 0);
    if(answer.length === 0){
        answer.push(-1);
    }
    else{
        answer.sort((a,b)=>a-b);
    }
    return answer;
}