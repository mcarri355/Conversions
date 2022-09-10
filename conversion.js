var a = prompt(`Give a number in base 10`)
a = Number(a)


// Converts deciaml to hexadecimal
    console.log(a.toString(16))

// Converts Decimal to binary and formats the binary
function addLeadingZeros(num, totalLength) {
  return String(num).padStart(totalLength, '0');
}

console.log(addLeadingZeros(a.toString(2), 8))