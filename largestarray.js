
// var arr = [3, 6, 7, 8, 5, 3, 9]
// var largest = arr[0];
// for(var i=0; i<arr.length; i++)
// {
//     var element = arr[i];
//     if(element>largest)
//     {
//         largest = element;
//     }
// }

// console.log(largest);


function largestnum(array)
{
    var largest = array[0];

    for(var i=0; i<arr.length; i++)
    {
        var element = arr[i];
        if(element>largest)
        {
            largest = element;
        }
    }   
    return largest;

}

var arr = [3, 6, 7, 11, 5, 3, 9];
console.log(largestnum(arr));