const phones = [
    {name:'samsung s5',price:45000,camera:10,storage:32},
    {name:'waltonk4',price:1500,camera:8,storage:8},
    {name:'walton j2',price:1500,camera:8,storage:8},
    {name:'walton j1',price:1500,camera:8,storage:8},
];
let cheapest=phones[0];
for(const phone of phones){
    if(phone.price <cheapest.price){
        cheapest=phone;
    }
  
}
console.log(cheapest)