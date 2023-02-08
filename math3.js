
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
let result= isLGSeven(6);
console.log(result);