const products=[
{name:'iphone 13',price:70000},
{name:'iphone 9',price:70000},
{name:'iphone 10',price:70000},
{name:'iphone 11',price:70050},
{name:'iphone 12',price:70000},
{name:'iphone 14',price:70000},
];
function searchProducts(products,searchText){
    const result= [];
    for(const product of products){
        if(product.name.includes(searchText)){
        result.push(product);
        }
    }
    return result;

}
var ss=searchProducts(products,'iphone');
console.log(ss);