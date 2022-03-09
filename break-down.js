// console.log(15=="15")
// console.log("123" + 123)
// let a="hi"
// let b="there"
// console.log(a+b)  

// const array = [1, 2, 3, 4, 5, 6, 7];

// for (let i = 1; i < array.length; i++) {
//  if (i == 5) {
//   continue;
//  }
//  console.log(array[i]);
// }
// var multiply=[]
// for(var i=0;i<100;i++){
// if(i%5==0){
// multiply.push(i);
// }
// }
// console.log(multiply)





var arr=[73,67,38,33];
var arr2=[];
var result=[];
for(var i=0;i<arr.length;i++){
    //console.log(arr[i]);
 arr2.push(arr[i]- (arr[i] %5)+5);
 if(arr2[i]-arr[i]<3 && arr[i]>33){
result.push(arr[i]+(arr2[i]-arr[i]))
 }
else if(arr[i]<=33){
    result.push(arr[i])
}
else {
    result.push(arr[i])
}

}
return result;
console.log(result)
