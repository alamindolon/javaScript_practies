function publicBusFare(local)
{
    const carcapacity = (local % 50);
    const publicBuscapacity = (carcapacity % 11);
    const vara  = publicBuscapacity * 250;
    return vara;
}

console.log(publicBusFare(235));