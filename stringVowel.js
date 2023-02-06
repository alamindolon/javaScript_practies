
function checkfirstletter(string)
{
    const firstlatter = string[0];
    for(var i=0; i<=string.length;i++)
    {
        if(firstlatter == "a" || firstlatter=="e" || firstlatter=="i" || firstlatter=="o" || firstlatter=="u")
        {
            return "this vowel"
        }
        else 
             return "constant"
    }
}

let check = "ithis bba"
console.log(checkfirstletter(check));