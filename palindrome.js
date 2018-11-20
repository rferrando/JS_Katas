function palindrome(str) {
  // Good luck!
 /*The ^ means "anything not in this list of characters". The + after the [...] group means "one or more". /gi means "replace all of these that you find, without regard to case".*/
 str = str.replace(/[^a-z0-9+]+/gi, '');
 str = str.toLowerCase()
  console.log(str)
 var cadena = Array.from(str)
 var reversed = Array.from(cadena)
 reversed = reversed.reverse();
 console.log(cadena)
 console.log(reversed)
 console.log(cadena.join() == reversed.join())
  return cadena.join() == reversed.join();
}



palindrome("eye");
