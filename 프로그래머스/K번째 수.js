function solution(array, commands) {
    var answer = [];
    let cutArr = [];
    let firstIndex;
    let lastIndex;
    for(let i = 0; i <  commands.length; i++){
        if(commands[i][0]<=commands[i][1]){
            firstIndex = commands[i][0];
            lastIndex = commands[i][1];
            for(let j = firstIndex-1; j < lastIndex; j++){
                cutArr.push(array[j]);
            }
        }        
        cutArr =  cutArr.sort((a,b)=>{return a-b});
        answer.push(cutArr[(commands[i][2])-1]);
        cutArr = [];
    }
    
    return answer;
}