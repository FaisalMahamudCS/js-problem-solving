
//  array = [50, 60, 20, 10, 40];
//  minValue = Math.min(...array);
//  maxValue = Math.max(...array);
//  array=array-minValue;
//  console.log(minValue)
//  console.log(maxValue)
// console.log(array)

// function FirstReverse(str) { 
//     var newstr="";
//     for(i=str.length-1;i>=0;i--){
//       newstr+=str[i];
//     }
//       // code goes here  
//       return str; 
    
//     }
       
//     // keep this function call here 
//     console.log(FirstReverse('fahim'));

// program to reverse a string

function reverseString(str) {

    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

// take input from the user
const string = "fahim";

const result = reverseString(string);
console.log(result);