function getarraysun(numbers)
{
    const numarray = [];
    let sum = 0 ;
    for(var i=0; i<numbers.length; i++)
    {
        const index = i;
        sum= sum + numbers[index];
        var show = numarray.push(sum);
        console.log(show);
    }
    return show;
}
function getoddnumofarray(numbers)
{
    const oddnumbers= [];


    for(let i=0; i<numbers.length; i++)
    {
        const index = i;
        const element = numbers[index];
        if(element % 2 !== 0)
        {
            console.log(index, element);
            oddnumbers.push(element);
            

        }
    }
    return oddnumbers;
}





var mynumber = [23,22,45,56];
const oddnumbers = getoddnumofarray(mynumber);
console.log(oddnumbers);
