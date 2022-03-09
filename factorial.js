// //4!=4*3*2*1
// function factorial(n){
//    var fact=1;
//     for(i=1;i<n;i++){
//         fact *=i;
//     }
//     return fact;
// }
// //var factorial=factorial(5)
// //console.log(factorial);

// //fibonacci 0 0 1 2 3 5 8 13
// function fibonacci(n){
// var fibo=[0 , 1 ]
// for(var i=2 ; i<=n;i++){
//     fibo[i]=fibo[i-1] + fibo[i-2];
// }
// return fibo;
// }
//var fibo = fibonacci(8);
//  console.log(fibo);



// function isPositive(number){
//    var num;
//     if(number >0){
// num= number+5;
//     }
//     else{
//       num= number-5;
//     }
//     return num;
// }
// var position=isPositive(10);
// console.log(position);




// function even(n){
//     for(let i=1 ; i <= n; i++){
//         if( i%2 == 0){
//             console.log(i);
//         }

//     }
// }
//  even(20);


function even(n){
    var count = 0;
    var avg;
    var sum=0;
    for(let i=1 ; i <= n; i++){
        if( i%3 == 0){
            sum= sum + i;
            count++;
            //console.log(i);
        }


    }
    avg=sum/count;
    return avg;
}
 var cou= even(10);
console.log(cou);

function perfectsquare(number){
    var square=Math.sqrt(number);
    if(square * square == number){
        console.log("squarable");
    } 
    else{
        console.log("NO");
    }
}
perfectsquare(25)
//count vowel in a string
var str='fahim faisal';
var count=0;
for(var i=0; i<str.length;i++){
    if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u' ){
       count++;

    }
}
console.log(count);
