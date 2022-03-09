// //1.comment
// //2
// var a;
// var b="";
// var c=true;
// console.log(c);
// var a=10;
// var b=20;
// var c;
// var d;
// var m;
// var mod;
// var c=a/b;
// d=a%b;
// var di=a/b;
// console.log(c);
// console.log(di);
// console.log(d)


// if(a==10 && b==20){
//     console.log("10 20")
// }
// var number=7
// while(number<20){
// if(number%2!=0){
//     console.log(number);
   
// }
// number++;
// }
//8
// var arr=[1,2,5,8,9]
// console.log(arr.length)
// console.log(arr[4])
// arr[4]=3
// console.log(arr)
// if(arr[4]==3){
//     console.log("4 ase")
// }

//9 use any for
// var arr=[1,2,5,8,9,99,88,55]
// for(var i=0;i<arr.length;i++){
//     if(arr[i]>80){
//         console.log(arr[i])
//     }
// }
// //fucntion
// function three(a,b,c){
//     return a * b * c;

// }
// var mul= three(5,10,1)
// console.log(mul)

// var obj={
//     name:'fahim',pesa:'engg'
// }
// console.log(obj)
// obj.pesa='CSE'
// console.log(obj)

//1 conversion

// function feetToInch(feet){
//     var inch;
//     inch=feet*12;
//     return inch;

// }
// var feet= feetToInch(2);
// console.log(feet);

// function centimeterToMeter(centimeters){
//     var meter;
//     meter=centimeters /100;

// return meter;
// }
// var cm=centimeterToMeter(120);
// console.log(cm)
//page

// function pageRequirements(book1,book2,book3){
//     //book1 has 100
//    var book1need=100;
//    var book2need=200;
//    var book3need=300;
//    var book1total=book1need * book1;
//    var book2total=book2need * book2;
//    var book3total=book3need * book3;
//    var total=book1total + book2total + book3total;
//    return total;
//     //book2 has 200
//     //book 3 has 300
// }
// var page=pageRequirements(1,1,1);
// console.log(page);

// function bestFriend(arr){
//     var element = [];  
// for(var i=0; i<arr.length;i++){
   
//    // console.log(arr[i].length)
//     if(arr[i].length < element.length){
//         element.push(arr[i]);
//     }
// }
// return element;
// }
// var arr=['fahim','Umar faruq','Faisal Mahamud'];
// var friend=bestFriend(arr)

function onlyPositive(arr){
var pos =[];
for(var i=0;i<arr.length;i++){
    if(arr[i] < 0){
    
        break;
        

    }
    else if(arr[i] >0){
        pos.push(arr[i]);
    }
    
}
return pos;
}
var arr=[1,5,8,4,9,8,7,8,-11,55,12];

var posi=onlyPositive(arr)
console.log(posi)