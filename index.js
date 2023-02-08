// problem--1
function mindGame(num){
    if(num > 0){
        return((((num*3)+10)/2)-5)
    }
}


// problem--2

function evenOdd(num){
    let string = num.length;
    if(string % 2 == 1){
        return 'odd';
    }
    else{
        return 'even';
    }
    }
    
   

    // problem--3

    function isLGSeven(num){
        let value = 7;
       let result = num-value;
        if(result <=7){
            return result;
        }
        else{
            return result*2;
        }
    }
   

    // problem--4

    function findingBadData(num){
        let data = 0;
        for(let i=0 ;i<num.length;i++){
            if (num[i]<0){
                data++;
            }
        }
        return data;
    }
    // let output = findingBadData([ -4, -9, -5, -33, -55 ]);
    // console.log(output);

    // problem--5

    function gemsToDiamond(num1 ,num2,num3){
        let daimond1 = 21;
        let daimond2 = 32;
        let daimond3 = 43;
        let output = daimond1*num1 +daimond2*num2 + daimond3*num3;
    if(output>1000*2){
       return output-2000
    }
    else{
        return output;
    }
        
    
    }
    // let output= gemsToDiamond(1,1,1);
    // console.log(output);
   