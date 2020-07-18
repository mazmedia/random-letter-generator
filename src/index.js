import randLetter from './randletter';

const numInput = document.querySelector('#length')
let randVal = numInput.value
numInput.addEventListener('change', () => randVal = numInput.value)
document.querySelector('#generator').addEventListener('click', () => randLetter(document.querySelector('#length').value))