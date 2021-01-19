function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var msg = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(msg);
}

function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var msg = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(msg);
} 
cToF(50);
fToC(37);