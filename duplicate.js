var arr = [1,2,5,5,7,8,8,5];
//var arr=['abul','abul','kabul','sabu','mabu','abul','sabu','sabu'];
var unique=[];

for(var i = 0 ; i<arr.length ; i++){
   var element=arr[i];
    if(unique.indexOf(element)==-1){
        unique.push(element);
    }
//console.log(arr[i]);
// if(arr[i]!=arr[i]){
//   //  console.log(i);
// unique.push(arr[i]);
//    // arr.splice(arr[i],1); 
    
}

console.log(unique);