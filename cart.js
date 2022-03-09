const product=[
    {name:'laptop',price:45000},
    {name:'shirt',price:500},
    {name:'watch',price:3680}

];
let totalPrice=0;

for(const products of product){
    totalPrice += products.price;
}
console.log(totalPrice)

const cart=[
    {name:'laptop',price:4500,quantity:2},
    {name:'shirt',price:500,quantity:2},
    {name:'watch',price:3680,quantity:2}

];
var price=0;
for(const carts of cart){
price+=carts.price * carts.quantity;
}
console.log(price)