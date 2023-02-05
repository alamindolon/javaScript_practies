

function getsumofarray (number)
{
    for(let i = 0; i<number.length; i++)
    {
        const index = i;
        const element = number[index];
        sum = sum + element;
        console.log(index,element,sum);

    }
}

let sum = 0;

const mynumbers = [12, 56,34,67,76,98];
getsumofarray(mynumbers);