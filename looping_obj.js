var mycomputer = {
    brand : 'HP',
    price : 48000,
    processor: 'i7',
    pendrive: 5
}
var keys = Object.keys(mycomputer)
for(i = 0; i< keys.length; i++)
{
    var propertices = keys[i];
    var provalue = mycomputer[propertices];
    console.log(propertices,provalue)
}
console.log(mycomputer)

//for in loop
for(var propertyname in mycomputer)
{
    const values = mycomputer[propertyname]
    console.log(propertyname,values)
}
for(var propertyname in mycomputer)
{
    
    console.log(propertyname)
}