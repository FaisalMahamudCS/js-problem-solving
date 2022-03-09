// // chair =cft
// table= 10cft
// bad=50cft

function woodCalculator(chairQuantity,tableQuantity,bedQuantity){
    const perChairWood= 2;
    const perTableWood=10;
    const perBedWood=50;
    const chairWoodQuantity=chairQuantity * perChairWood;
    const tableWoodQuantity=tableQuantity * perTableWood;
    const bedWoodQuantity=bedQuantity * perBedWood;
const totalWood=chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
return totalWood;
}
const first=woodCalculator(1,1,1);
console.log(first);