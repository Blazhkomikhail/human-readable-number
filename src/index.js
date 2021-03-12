module.exports = function toReadable (number) {
  const ones = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = [' ', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  number = number.toString();

  if (number.length === 1 || number.length === 2 && number < 20) {
      return retunOnes(number);
  } else if (number.length === 2 && number[1] === '0') {
      return returnTens(number.split('').splice(0,1));
  } else if (number.length === 2 && number[1] !== '0' && number >= 20) {
      return returnTensOnes(number);
  } else if (number.length === 3 && number[1] !== '0' && number[2] !== '0' && number[1] + number[2] > 20) {
    const tensOnes = number.split('').splice(1,2);
    return `${returnHundreds(number)} ${returnTensOnes(tensOnes)}`;
  } else if (number.length === 3 && number[1] === '1') {
    const prepairedNum = +`${number[1]}${number[2]}`;
    return `${returnHundreds(number)} ${retunOnes(prepairedNum)}`;
  } else if (number.length === 3 && number[1] === '0' && number[2] === '0') {
    return returnHundreds(number);
  } else if (number.length === 3 && number[1] === '0') {
    return `${returnHundreds(number)} ${retunOnes(number[2])}`;
  } else  {
    return `${returnHundreds(number)} ${returnTens(number[1])}`;
  }

  function retunOnes(num) {
    return ones[+num];
  }
  function returnTens(num) {
    return tens[+num];
  }
  function returnTensOnes(num) {
    return `${tens[+num[0]]} ${ones[+num[1]]}`;
  }
  function returnHundreds(num) {
    return `${ones[+num[0]]} hundred`; 
  }
}


