for(var i=0; i<=50;i++){
    if(i%3==0 && i%5==0){
        console.log('Fizzbee');
    }
    else if(i%3==0){
        console.log("fizz");
    }
    else if(i%5==0){
        console.log("bee");
    }
    else{
        console.log(i);
    }
}