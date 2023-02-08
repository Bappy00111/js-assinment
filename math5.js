function gemsToDiamond(num1 ,num2,num3){
    let daimond1 = 21;
    let daimond2 = 32;
    let daimond3 = 43;
    let output = daimond1*num1 + daimond2*num2 + daimond3*num3;
if(output>1000*2){
   return output-2000
}
else{
    return output;
}
    

}
let output= gemsToDiamond(1,1,1);
console.log(output);