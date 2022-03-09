//mular daam
//if(weight<=2){price=weight*30}
//else if(weight >2){
//price=weight*25
//re
//}
function mularDam(quantity){
    if(typeof quantity !="number"){
        return "Please enter a valid quantity";
    }
    if(quantity <=0){
        return "enter a valid ";
    }
    if(quantity >20){
        return "Out of range";
    }
    let price;

    if(quantity <=2){
        price=quantity * 30;
       
    }
    else{
        price=quantity * 30;
    }
    return price;
}
mula=mularDam(2)
console.log(mula)