const firstfriend = {name:'abdul', friend:'babul'}
const secfriend = {name:'babul', friend:'abdul'}

function isBestFriend (a, b)
{
    if(a.name === b.friend && a.friend == b.name)
    {
        return true;
    }
    else 
    {
        return false;
    }

}

console.log(isBestFriend(firstfriend,secfriend));
    




