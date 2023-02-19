
function radianToDegree(radian)
{
    const pi = Math.PI;
    const degree  = radian * (180/pi);
    return degree;
}

console.log(radianToDegree(0.7853981633974483));