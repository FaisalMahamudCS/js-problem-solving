//calculate bill
//if(unit <=100){bill=unit*5}
//else if(unit >100)billprev=100*5
//rest=uit-100
//rest=rest*6+billprev;

function electricityBill(unit){
  let bill;
  
    if(unit > 200){
        prtm=100*5;
        remain=100 * 6;
        remaining=(unit-200)*7;
        bill=prtm+remain+remaining;

     
    }
    else if(unit >100){
        billpr=100;
        billprev=billpr*5;
        rest=unit-billpr;

       bill=rest*6+billprev;
    }
    else if(unit <=100){
        bill=unit*5;
    }
    return bill;
}

var elect=electricityBill(150);
console.log(elect);