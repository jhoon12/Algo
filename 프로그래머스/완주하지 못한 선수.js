function solution(participant, completion) {

    participant = participant.sort();
    completion = completion.sort();
    for(let i in participant){
        if(participant[i] != completion[i]) return participant[i];
    }
    //수업시간
}