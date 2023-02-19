
const products  = [
    { id:1, name:'xiami phone one night', price:16900},
    { id:2, name:'walton phone one night', price:9900},
    { id:3, name:'walton laptop one night', price:49900},
    { id:4, name:'nokia phone one night', price:29900},
    { id:5, name:'samsung laptop one night', price:69900}
]

function matchproduct (products, search)
{
    const matched = [];

     //for(let i = 0;i <= products.length;i++)
    // const product = products(i)

    for(const product of products)
    {
        if(product.name.toLowerCase().includes(search.toLowerCase()))
        {
            matched.push(product)
        }
    }
    return matched;

}
const result = matchproduct(products, 'Phone')
console.log(result);