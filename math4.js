function findingBadData(num){
    
    for(let i=0 ;i<num.length;i++){
        if (num[i] < 0){
            return 'badData';
        }
        else{
            return 'goodData';
        }         
    }
  
    }
    

let output = findingBadData([ -4, -9, -5, -33, -55 ]);
console.log(output);