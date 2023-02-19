function oilPrice(digel,pettol,octen)
{
    const digelPrice  = 114;
    const pettolPrice  = 130;
    const octenPrice  = 135;

    const total = (digelPrice*digel)+(pettolPrice*pettol)+(octenPrice*octen);
     return total;

}

console.log(oilPrice(0,2,3));