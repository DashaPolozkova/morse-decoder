const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
     let arr = [];
     let newArr= []
    for (let i = 0; i < expr.length; i+=10) {
       arr.push(expr.slice(i, i + 10))
    }
    for (let j = 0; j < arr.length; j++) {
      newArr.push(arr[j].replace(/10/g, '.').replace(/11/g, '-').replace(/0/g, ''))
    }
    for (let k = 0; k < newArr.length; k++) {
      if (newArr[k] === '**********') { 
        newArr[k] = ' '
      } else {
        newArr[k] = MORSE_TABLE[newArr[k]]
      }
    }
    let result = newArr.join('')
  return result }
 

module.exports = {
    decode
}