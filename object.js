var mycomputer = {
    brand : 'HP',
    price : 48000,
    processor: 'i7',
    pendrive: 5
}
console.log(mycomputer.price);

 var pencount = mycomputer.brand;
 console.log(pencount);

 var propertices = Object.keys(mycomputer);
 console.log(propertices)
  var property = Object.values(mycomputer)
  console.log(property)
  var pendrivevalue  = mycomputer['pendrive']
  console.log(pendrivevalue);

  var penDrive  = 'pendrive'

  var pendrivevalues  = mycomputer[penDrive]
  console.log(penDrive,pendrivevalues);
  //update values 
  mycomputer.pendrive = 30;
  console.log(mycomputer)
