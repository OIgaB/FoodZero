console.log('Hello');

function alphabetPosition(text) {
   const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
   const alphabetLength = alphabet.length; //26
   let i = 0;

  const toUpperCaseString = text.toUpperCase().split('');
  
  toUpperCaseString.find((el, index) => {

    if(el === alphabet[i]) {

        console.log(alphabet[i]);
        console.log(i + 1);
    }
   })
   i += 1; 


}
const bbb = alphabetPosition("The sunset sets at twelve o' clock.");

//console.log(bbb);