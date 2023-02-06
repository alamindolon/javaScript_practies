
function factorial (number)
{
    var result = 1;
    for ( i = 1; i<=number; i++)
    {
        result = result * i;
        console.log(i,result);
    }
    return result;

}
var element = 6;
var result = factorial(element);
console.log(result);