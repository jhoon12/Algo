function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    let arrive = [];
    let count = 0;
    let going = [];
    let goingWeight = 0;
    let out = 0;
    for (let i = 0; i < truck_weights.length; i++) {
      if(goingWeight+truck_weights[i]< weight){
          going.push({
          truck: truck_weights[i],
          length: 0,
        });
        goingWeight += truck_weights[i];
      }
        while(1){
        for(let i = 0; i < going.length; i++){
          if (going[i].length !== bridge_length) {
          going[i].length++;
          answer++;
        } else if (going[i].length === bridge_length) {   
          out = going.shift().truck;
          goingWeight -= out;
            console.log(goingWeight);
            break
          // i--;
        }
          }
        
        }
    //   going.map((ele) => {
    //       console.log(ele);
    //     if (ele.length !== bridge_length) {
    //       ele.length++;
    //       answer++;
    //     } else if (ele.length === bridge_length) {   
    //       out = going.shift().truck;
    //       goingWeight -= out;
    //         console.log(goingWeight);
    //       // i--;
    //     }
    //   });
    }
    
    console.log(going);
    return answer    
  
  }


  // function solution(bridge_length, weight, truck_weights) {
  //   let answer = 0;
  //   let arr = [];
  //  for(let i = 0; i < truck_weights.length; i++){
  //    for(let j = 0; j < truck_weights.length; j++){
  //      if(truck_weights[j]+truck_weights[j+1] <weight){
  //         arr.push(truck_weights[j]);
            
  //      }
  //    }
  //  }
  //   return answer    
  
  // }


  보류