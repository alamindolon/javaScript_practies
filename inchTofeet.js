function inchTofeet (inch){
    var feet = inch/12;
    return feet;
}


 var senior = inchTofeet(156);
 console.log(senior);
 //array 
 var somenumber =[156,222,126];
  var nanafeet = inchTofeet(somenumber[2]);
  console.log(nanafeet);