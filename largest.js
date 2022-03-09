//find second largest
function secondLargestElement(array){
    var largest=array[0];
    let secondLargest=array[0];
    for(let i=0 ; i< array.length;i++){
        let element = array[i];
        if(element >largest){

secondLargest=largest;
largest=element;
        }
    }
    return secondLargest;
}
arr=[11,5,88,57,8]
var a=secondLargestElement(arr);
console.log(a);