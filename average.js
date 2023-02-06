
function average(n)
{
    let sum = 0, count = 0;
    for(let i=1; i<=n; i++)
    {
        if(i % 3 == 0)
        {
            sum = sum+i;
            count = count+1;
        }
    }
    const avg = sum / count;
    return avg;
}

console.log(average(30));