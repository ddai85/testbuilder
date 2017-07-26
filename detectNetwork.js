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

  var switchPrefix4 = cardArray[0] + cardArray[1] + cardArray[2] + cardArray[3];
  var switchPrefix6 = cardArray[0] + cardArray[1] + cardArray[2] + cardArray[3] + cardArray[4] + cardArray[5]
  var switchArray4 = ['4903', '4905', '4911', '4936', '6333', '6759'];
  var switchArray6 = ['564182', '633110'];
  var switchLength = [16, 18, 19];
  if ((switchArray4.includes(switchPrefix4) || switchArray6.includes(switchPrefix6)) && switchLength.includes(cardArray.length)){
  	return 'Switch';
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
  if (maestroArray.includes(maestroPrefix) && maestroLength.includes(cardNumber.length)){
    return 'Maestro';
  }

  var chinaPrefix6 = cardArray[0] + cardArray[1] + cardArray[2] + cardArray[3] + cardArray[4] + cardArray[5];
  var chinaPrefix3 = cardArray[0] + cardArray[1] + cardArray[2];
  var chinaPrefix4 = cardArray[0] + cardArray[1] + cardArray[2] + cardArray[3];
  var chinaArray6 = [];
  for (var i = 622126; i <= 622925; i++){
  	chinaArray6.push(i.toString());
  }
  var chinaArray3 = ['624', '625', '626']
  var chinaArray4 = ['6282', '6283', '6284', '6285', '6286', '6287', '6288']
  var chinaLength = [16, 17, 18, 19];
  if ((chinaArray6.includes(chinaPrefix6) || chinaArray3.includes(chinaPrefix3) || chinaArray4.includes(chinaPrefix4)) && (chinaLength.includes(cardArray.length))){
    return 'China UnionPay';
  }
  
};

