function bringesinger(money)
{
    var singerPrice = 10;
    console.log(money,singerPrice);
    var quentity = money / singerPrice;
    return quentity;
}

var myTaka = 150;
 var singers = bringesinger(myTaka);
 console.log('Eating singers: ', singers);