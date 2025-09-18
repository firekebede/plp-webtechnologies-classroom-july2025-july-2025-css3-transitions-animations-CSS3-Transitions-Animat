// ============================
// Part 2: Functions (Scope, Params, Return)
// ============================

// Global variable
let multiplier = 2;

// Function with parameter + return value
function multiply(num) {
  // Local scope variable
  let result = num * multiplier;
  return result;
}

// Show result on page
document.getElementById("calcResult").textContent =
  "5 × " + multiplier + " = " + multiply(5);

// ============================
// Part 3: JS + CSS Combined
// ============================
const box = document.getElementById("box");
const btn = document.getElementById("animateBtn");

// Reusable function to toggle animation
function toggleBoxAnimation(element, className) {
  element.classList.toggle(className);
}

// Add event listener to button
btn.addEventListener("click", () => {
  toggleBoxAnimation(box, "move");

  // Bonus: trigger pulsing after 2 seconds
  setTimeout(() => {
    box.classList.toggle("pulsing");
  }, 2000);
});
