// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var cardArray = cardNumber.split('');

  var dinerPrefix = cardArray[0] + cardArray[1];
  if (cardNumber.length === 14 && (dinerPrefix === '38' || dinerPrefix === '39')){
  	  return 'Diner\'s Club';
  }
  var amexPrefix = cardArray[0] + cardArray[1];
  if (cardNumber.length === 15 && (amexPrefix === '34' || amexPrefix === '37')){
  	  return 'American Express';
  }
  var visaPrefix = cardArray[0];
  if (visaPrefix === '4' && (cardArray.length === 13 || cardArray.length === 16 || cardArray.length === 19)){
  	  return 'Visa';
  }
  var masterPrefix = cardArray[0] + cardArray[1];
  var masterArray = ['51', '52', '53', '54', '55'];
  if ((masterArray.includes(masterPrefix)) && cardNumber.length === 16){
  	return 'MasterCard';
  }
  var discoverPrefix = cardArray[0] + cardArray[1] + cardArray[2];
  var discoverArray = ['644', '645', '646', '647', '648', '649'];
  if (cardArray.length === 16 || cardArray.length === 19){
  	if (cardArray[0] + cardArray[1] + cardArray[2] + cardArray[3] === '6011' || discoverArray.includes(discoverPrefix) || cardArray[0] + cardArray[1] === '65'){
      return 'Discover';
    }
  }
  var maestroPrefix = cardArray[0] + cardArray[1] + cardArray[2] + cardArray[3];
  var maestroArray = ['5018', '5020', '5038', '6304'];
  var maestroLength = [12, 13, 14, 15, 16, 17, 18, 19]
  if (maestroArray.includes(maestroPrefix) || maestroLength.includes(cardNumber.length)){
    return 'Maestro';
  }
};

console.log(detectNetwork('5112345678901234'))
