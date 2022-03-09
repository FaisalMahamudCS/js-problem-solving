function checkGpa(marks){
    var gpa=[]
for(i=0;i<marks.length;i++){
    if(marks[i]>=80){
gpa.push(marks[i])
    }
}
return gpa;
}
var marks=[78,82,68,88,92];
chk=checkGpa(marks);
console.log(chk)