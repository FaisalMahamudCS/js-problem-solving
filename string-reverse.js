// var rever='Fahim';
// var reverse='';
// for(var i=rever.length ; i>=0;i--){
//    // console.log(rever[i])

//      reverse= reverse+ rever[i];
// }
// console.log(reverse);

function reverseString(text){
    let reverse='';
    for(const letter of text){
        console.log(letter);
        reverse = letter + reverse;
    }
}
var