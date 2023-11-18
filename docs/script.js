/* Init */
const input = document.getElementById('input');
const result = document.getElementById('result');
input.focus();

/* Input Handling */
document.addEventListener("keypress", async (e) => {
  if (e.key === "Enter") {
    result.innerHTML = sumDivisibles(input.value);
  }
});

/* Function */
function sumDivisibles(number) {
  let sum = 0;

  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) sum += i;
  }

  return sum;
}
