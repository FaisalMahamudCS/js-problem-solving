function birthdayCakeCandles(candles) {
    // Write your code here
var max=candles[0];
var count =0;
for (var i=0; i<candles.length; i++) {
    if (candles[i] > greatest) {
        greatest = candles[i];
    }
}
    for(var i=0;i<candles.length;i++){

 
    if(max == candles[i]){
count++;

 }   
 }
 return count;
}

var candles=[5,5,1,3,3,5,5,6];
var cake=birthdayCakeCandles(candles);
console.log(cake);