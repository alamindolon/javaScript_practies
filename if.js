// var chicken = 4000;
// var money  = 500;
// if(chicken>money)
// {
//     console.log('khabo na');

// }
// else
// {
//     console.log('khabo');
// }


function electricitybill(unit)
{
    let bill;
    if(unit <= 100)
    {
        bill = unit*5;
    }
    else if(unit<=200)
    {
        bill = 100*5;
        const rem = unit-100;
        const cost = rem*6;
        bill = bill + cost;
    }
    else{
        bill = (100*5)+(100*6);
        const rem = unit-200;
        const cost = rem*7;
        bill = bill + cost;
    }
    return bill;

}

const unite = 250;
console.log(electricitybill(unite));