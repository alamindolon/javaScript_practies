const friend  = [3,4,5,6,7,8,12];

const partial = friend.slice(3,6);
//slice is array jei koy ta dorkar sodu ogula nibe but kisu delte korbe na

console.log(partial);
console.log(friend);
console.log("--------------")

const spliceF = friend.splice(3,6)
//splice is array jei ta theke jei ta dorkar oi ta nibe abr array theke ogula delte kore dibe
console.log(spliceF);
console.log(friend);


//-----------

const spliceF = friend.splice(3,6,67,78,77)
//splice is array jei ta theke jei ta dorkar oi ta nibe abr array theke ogula delte kore dibe & 67,78,77 agula delte kora jaygay puss korbe
console.log(spliceF);
console.log(friend);

