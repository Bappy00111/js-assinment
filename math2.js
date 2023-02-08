function evenOdd(num){
let string = num.length;
if(string % 2 == 1){
    return 'odd';
}
else{
    return 'even';
}
}
let regult = evenOdd('chatgp');
console.log(regult);
