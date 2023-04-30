let strings = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
  'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
  's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B',
  'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W',
  'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  '!', '@', '#', '$', '%', '^', '&', '*', '()', '_', '+']
let finalPassword = ""
let passEl = document.getElementById("generated-pass")
// console.log(strings[0])
function generateRandom() {
  return Math.floor(Math.random() * strings.length)

}


// shuffling algorithm
function shuffleArray(array) {
  console.log("calledddd")
  for (let i = 0; i < array.length; i++) {
    let index = Math.floor(Math.random() * strings.length)
    let temp = array[i];
    array[i] = array[index];
    array[index] = temp;
  }
  // console.log(array)
}

function passwordGen() {
  finalPassword = ""
  shuffleArray(strings)
  for (let i = 0; i < 8; i++) {
    let indexx = generateRandom()
    console.log(indexx)
    finalPassword += strings[indexx]
  }
  passEl.textContent ="Your Password: "+finalPassword
}

