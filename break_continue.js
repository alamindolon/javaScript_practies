var numbers = [45,46,23,32,56,67,76,765];

for( var i=0; i<numbers.length; i++)
{
    var number = numbers[i];
    if(number > 50)
    {
        continue;
    }
    console.log(number);
}
console.log('akn dekbo break ');
for( var i=0; i<numbers.length; i++)
{
    var number = numbers[i];
    if(number > 50)
    {
        break;
    }
    console.log(number);
}