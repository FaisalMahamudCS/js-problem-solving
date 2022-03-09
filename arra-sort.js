var temp;
var arr = [11,55,40,414,54];
var sort=[]
for(var i=0;i<arr.length;i++)
{
    for(var j=0;j<arr.length-i-1;j++)
    
if(arr[j] >arr[j+1]){
temp=arr[j];
arr[j]=arr[j+1];
arr[j+1]=temp;
//sort.push(temp);
}
}
console.log(arr[1])