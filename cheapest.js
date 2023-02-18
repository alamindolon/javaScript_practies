const phones = [
    { name: 'samsung', camera:12, storage:'34mb ', price:3600},
    { name: 'walton', camera:12, storage:'34mb ', price:3200},
    { name: 'xaomi', camera:12, storage:'34mb ', price:4600},
    { name: 'Nokia', camera:12, storage:'34mb ', price:4400},
]

function chaeapestphone(phones)
{
    let cheapest = phones[0];
    for( let i = 0; i<phones.length; i++)
    {
        const phone = phones[i];
        if(phone.price < cheapest.price)
        {
            cheapest = phone;
        }
    }
    return cheapest;
}

const myselection  = chaeapestphone(phones);
console.log(myselection);