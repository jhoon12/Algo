function solution(board, moves) {
  var answer = 0;
    let arr= [];
for(let i = 0; i < moves.length; i++){
    for(let j = 0; j < board.length; j++){
        if(board[j][moves[i]-1] != 0){
            arr.push(board[j][moves[i]-1])
            board[j][moves[i]-1] = 0
            for(let k = 0; k < arr.length; k++){
                if(arr[k] === arr[k-1]){
                    answer += 2;
                    arr.splice(k-1, k)
                }
            }
            break;
        }
      
    }
}
  return answer;
}