const names =['abbul', 'apon','cabol','dolon','apon','jibon','jibon','dolon'];

function removeDuplicate (names)
{
    const nameadd=[];

    for (let i= 0; i<names.length; i++)
    {
        const name = names[i];
        if(nameadd.includes(name) === false)
        {
            nameadd.push(name);
        }
    }
    return nameadd;
}

const uniqname = removeDuplicate(names);
console.log(uniqname);