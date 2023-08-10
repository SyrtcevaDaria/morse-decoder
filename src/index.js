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
    let array = []
    let x = 0;
    let y = 10;
    for (let i=0;i<expr.length/10;i++){
        array.push(expr.slice(x, y))
        x+=10;
        y+=10;
    }
    let resultStr='';
    for (let elem of array){
        let res='';
        if(elem[0]==='*'){
            resultStr+=" ";
            continue;
        }
        let ind = elem.indexOf('1');
        for(let i=ind;i<10;i+=2){
            let symbStr =  elem.slice(i,i+2);
            if(symbStr==='10'){
                res+='.';
            }
            else{
                res+='-';
            }
        }
        resultStr+=MORSE_TABLE[res];
    }
    return resultStr; 
}

module.exports = {
    decode
}