//0, 1, 1, 2, 3, 5, 8, 13, 21, 34
const fibo=[0,1];
var n=7;

for(let i=2;i<=n;i++){
  
    fibo[i]=fibo[i-1]+fibo[i-2];
    //fib1=arr[i-1];
   //fib2=arr[i-2];
  // fib3=fib1+fib2;
   //arr.push(fib3);
   //fibo.push(fibo[i]);

   
}

console.log(fibo);
