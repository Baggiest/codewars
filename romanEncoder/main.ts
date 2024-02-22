export function solution(number: number): string {

  // roman numbers
  const units = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
  const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
  const hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
  const thousands = ["", "M", "MM", "MMM"]

  let resultStr: string = ""

  let numArr: number[] = number.toString().split("").map((x) => parseInt(x))
  // turns the input string number into an array of number so we can replace every digit with respect to its position
  
  let initialArrLen = numArr.length
  // this just prevents a lot of unexpected behaviors 

  for (let i = 0; i < 4 - initialArrLen; i++) {
    numArr.unshift(0)
  }
  // turns [3] into [0,0,0,3]

  resultStr = thousands[numArr[0]] + hundreds[numArr[1]] + tens[numArr[2]] + units[numArr[3]]
  return resultStr;
}

console.log(solution(2001));
console.log(solution(1995));
console.log(solution(1444))
// solution(38)
// solution(293)
// solution(0)
// solution(1)

// convert the number to a roman numeral
/*
Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
*/