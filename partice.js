// problem --1
function mindGame(num){
    let number =((( (num*3)+10)/2)-5);
    return number;
    }
   
//    let result = mindGame(33);
//    console.log(result);



//    problem--2
function evenOdd(num){
const string = num.length;
if(string%2 == 1){
 console.log('odd');
}
else{
    console.log('even');
}
}
evenOdd('Phero');
// let regult = evenOdd('Phero');
// console.log(regult);



// problem---3
function isLGSeven(num){
    let number = 7;
    let regult = num - number;
    if(regult >= 7){
        return num*2;
    }
    else{
        return regult;
    }
}
// let regult = isLGSeven(15);
// console.log(regult);


// problem--4

function findingBadData(num){
    let number = 0;
    for(let i=0 ;i<num.length;i++){
        if (num[i] < 0){
            return 'badData';
        }
        else{
            return 'goodData';
        }         
    }
  
    }  
// let output = findingBadData([ -4, -9, -5, -33, -55 ]);
// console.log(output);

// problem---5

function gemsToDiamond(num1, num2, num3){
    let daimond1 = 21; 
    let daimond2 = 32;
    let daimond3 = 43;
   let total =daimond1*num1+daimond2*num2+daimond3*num3;
   return total;

}
let regult = gemsToDiamond(1,1,1);
console.log(regult);



