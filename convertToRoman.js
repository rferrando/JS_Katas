function convertToRoman(num) {
  const unidades = ['I','II','III','IV','V','VI','VII','VIII','IX']
  const decenas = ['X','XX','XXX','XL','L','LX','LXX','LXXX', 'XC']
  const centenas = ['C','CC','CCC','CD','D','DC','DCC','DCCC','CM']
  const miles = 'M'
//Break 1984 into 1000, 900, 80 and 4, then do each conversion
  var  descomp = Array.from(num.toString())
  var roman = []
  //console.log(descomp)
  descomp = descomp.reverse().reduce((sum, x)=>{
    //console.log('x' + x)
    //console.log('sum' + sum)
     let indice = x - 1
     let roman_letter;
    //console.log('len= '+sum.length)
    switch (sum.length) {
      case 1:
        roman_letter = unidades[indice]
      break
      case 2:
      roman_letter = decenas[indice]
      break
      case 3:
      roman_letter = centenas[indice]
      break
      case 4:
      roman_letter = miles.repeat(x)
      default:
      break
    }
    roman.push(roman_letter)
    //console.log(roman_letter)
    return sum + x}, '0')
  var roman_number = roman.reverse().join('')
 return roman_number
}

convertToRoman(12)
