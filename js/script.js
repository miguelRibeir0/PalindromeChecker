const textBox = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.querySelector("#result p");

function palindrome() {
  let input = textBox.value;
  let regex = /[!@#$%^&*(),.?":{}|<>/\\\-_\s]/g;
  let cleanedString = input.replace(regex, "").toLowerCase();
  let palindrome = cleanedString.split("");
  let reversedString = palindrome.reverse().join("");
  if (reversedString === cleanedString) {
    return true;
  } else {
    return false;
  }
}
function palindromeCheck() {
  let input = textBox.value;
  if (input === "") {
    alert("Please input a value");
  } else if (input.length === 1) {
    result.innerText = `${input} is a palindrome.`;
  } else if (palindrome() === true) {
    result.innerText = `${input} is a palindrome.`;
  } else {
    result.innerText = `${input} is not a palindrome.`;
  }
}

checkBtn.addEventListener("click", palindromeCheck);
