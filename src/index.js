module.exports = function toReadable (number) {
    const numberUnits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six' , 'seven' , 'eight' , 'nine'];
    const numberDozens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty','seventy' , 'eighty' , 'ninety' , 'nine'];
    const numberHundreds = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred' , 'seven hundred' , 'eight hundred' , 'nine hundred'];
    const numberDozen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let arr = number.toString().split('');
    if (arr.length === 3 && arr[1] === '0' && arr[2] === '0') {
      let hundred = numberHundreds[arr[0]];
      return hundred;
    }  else if (arr.length === 2 && arr[0] === '1' && arr[1] === '0') {
      let dozen0 = numberDozen[0];
      return dozen0;
    } else if (arr.length === 2 && arr[0] === '1' && arr[1] === '1') {
      let dozen1 = numberDozen[1];
      return dozen1;
    }  else if (arr.length === 2 && arr[0] === '1' && arr[1] === '2') {
      let dozen2 = numberDozen[2];
      return dozen2;
    } else if (arr.length === 2 && arr[0] === '1' && arr[1] === '3') {
      let dozen3 = numberDozen[3];
      return dozen3;
    } else if (arr.length === 2 && arr[0] === '1' && arr[1] === '4') {
      let dozen4 = numberDozen[4];
      return dozen4;
    } else if (arr.length === 2 && arr[0] === '1' && arr[1] === '5') {
      let dozen5 = numberDozen[5];
      return dozen5;
    } else if (arr.length === 2 && arr[0] === '1' && arr[1] === '6') {
      let dozen6 = numberDozen[6];
      return dozen6;
    } else if (arr.length === 2 && arr[0] === '1' && arr[1] === '7') {
      let dozen7 = numberDozen[7];
      return dozen7;
    } else if (arr.length === 2 && arr[0] === '1' && arr[1] === '8') {
      let dozen8 = numberDozen[8];
      return dozen8;
    } else if (arr.length === 2 && arr[0] === '1' && arr[1] === '9') {
      let dozen9 = numberDozen[9];
      return dozen9; 
     } else if (arr.length === 2 && arr[1] === '0') {
      let dozen = numberDozens[arr[0]];
      return dozen;
     } else if (arr.length === 3 && arr[2] === '0') {
      let hundred0 = numberHundreds[arr[0]] + ' ' + numberDozens[arr[1]];
      return hundred0; 
     } else if (arr.length === 3 && arr[1] === '1' && arr[2] === '1') {
      let hundred1 = numberHundreds[arr[0]] + ' ' + numberDozen[arr[1]];
      return hundred1; 
     } else if (arr.length === 3 && arr[1] === '1' && arr[2] === '2') {
      let hundred2 = numberHundreds[arr[0]] + ' ' + numberDozen[arr[2]];
      return hundred2;  
     } else if (arr.length === 3 && arr[1] === '1' && arr[2] === '3') {
      let hundred3 = numberHundreds[arr[0]] + ' ' + numberDozen[arr[2]];
      return hundred3; 
     } else if (arr.length === 3 && arr[1] === '1' && arr[2] === '4') {
      let hundred4 = numberHundreds[arr[0]] + ' ' + numberDozen[arr[2]];
      return hundred4;  
     } else if (arr.length === 3 && arr[1] === '1' && arr[2] === '5') {
      let hundred5 = numberHundreds[arr[0]] + ' ' + numberDozen[arr[2]];
      return hundred5; 
     } else if (arr.length === 3 && arr[1] === '1' && arr[2] === '6') {
      let hundred6 = numberHundreds[arr[0]] + ' ' + numberDozen[arr[2]];
      return hundred6;  
     } else if (arr.length === 3 && arr[1] === '1' && arr[2] === '7') {
      let hundred7 = numberHundreds[arr[0]] + ' ' + numberDozen[arr[2]];
      return hundred7; 
     } else if (arr.length === 3 && arr[1] === '1' && arr[2] === '8') {
      let hundred8 = numberHundreds[arr[0]] + ' ' + numberDozen[arr[2]];
      return hundred8;  
     } else if (arr.length === 3 && arr[1] === '1' && arr[2] === '9') {
      let hundred9 = numberHundreds[arr[0]] + ' ' + numberDozen[arr[2]];
      return hundred9;  
     } else if (arr.length === 3 && arr[1] === '0') {
      let hundred10 = numberHundreds[arr[0]] + ' ' + numberUnits[arr[2]];
      return hundred10; 
     } else if (arr.length === 3) {
      let hundreds = numberHundreds[arr[0]] + ' ' + numberDozens[arr[1]] + ' ' + numberUnits[arr[2]];
         return hundreds;
      } else if (arr.length === 2) {
      let dozens =  numberDozens[arr[0]] + ' ' + numberUnits[arr[1]];
      return dozens;
      } else if (arr.length === 1) {
      let units = numberUnits[arr[0]];
       return units;
   }
  }
  