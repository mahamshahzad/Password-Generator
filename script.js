const generateBtn   = document.getElementById('generateBtn');
const lengthInput   = document.getElementById('length');
const uppercaseIn   = document.getElementById('uppercase');
const lowercaseIn   = document.getElementById('lowercase');
const numbersIn     = document.getElementById('numbers');
const symbolsIn     = document.getElementById('symbols');
const passwordField = document.getElementById('passwordOutput');

const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const NUMBERS   = '0123456789';
const SYMBOLS   = '!@#$%^&*()_+{}[]:;<>,.?/|~';

function generatePassword() {
  let chars = '';
  if (uppercaseIn.checked) chars += UPPERCASE;
  if (lowercaseIn.checked) chars += LOWERCASE;
  if (numbersIn.checked)   chars += NUMBERS;
  if (symbolsIn.checked)   chars += SYMBOLS;

  const length = parseInt(lengthInput.value, 10);

  if (!chars) {
    alert('Please select at least one character type.');
    return;
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  passwordField.value = password;
}

generateBtn.addEventListener('click', generatePassword);
