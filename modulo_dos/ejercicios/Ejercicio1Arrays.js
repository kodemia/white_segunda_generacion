const oneToThree = [ 1, 2, 3 ]
const sevenToNine = [ 7, 8, 9 ]
const fourToSix = [ 4, 5, 6 ]
var union=[];

oneToThree.push(... sevenToNine);
oneToThree.push(... fourToSix);

 const ordenados=oneToThree.sort(function(a, b){return a-b});

 console.log(ordenados)