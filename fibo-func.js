function fibonaci(n){
    if(typeof n != 'number' ){
        return "Please give number";
    }
    if(n < 2){
        return "enter positive no greater than 1";
    }
const fibo = [ 0 , 1 ];
for( let i =2 ; i <= n ;i++){
     
    fibo[i]=fibo[i-1]+fibo[i-2]; 
}
return fibo;



}
var fibo=fibonaci(10);
console.log(fibo);