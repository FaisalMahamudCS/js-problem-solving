function countVowel(sentence){
 var count=0;
 var arra=['a','e','i','o','u','A','E','I','O','U'];
 for(letter  of sentence){
   // let letter = sentence[i];
     if(arra.indexOf(letter)>-1){
count++;
     }
 }
 return count;
  
}
var string ="quick brown fox jumps over the lazy dog";
var log=countVowel(string);
console.log(log);


//pore kormu