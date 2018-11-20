function rot13(str) {
  // Function to generate an array w/ alphabet letters
function createAlphabet(charA, charZ) {
  var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
  for (; i <= j; ++i) {
    a.push(String.fromCharCode(i));
  }
  return a;
}
var alphabet = createAlphabet('A', 'Z');
//console.log(alphabet)
var str_ciphered = Array.from(str);
str_ciphered = str_ciphered.map(
  function(letter) {
    let indice = alphabet.indexOf(letter)
    let letter_ciphered = letter
    if (indice != -1){
      let indice_ciphered = indice + 13
      if (indice_ciphered >= alphabet.length){
        indice_ciphered = 13 - (alphabet.length - indice)
      }
      letter_ciphered = alphabet[indice_ciphered]
    //console.log( 'letra ' + letter + ' indice ' + indice + ' indice2 '+ indice_ciphered + ' letra2 ' +letter_ciphered)
    }
    return letter_ciphered
  })
  return str_ciphered.join("");
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
