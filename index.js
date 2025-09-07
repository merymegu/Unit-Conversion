const input = document.querySelector(".input");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  if (!input.value) return alert("Please enter a number");

  let input_value = Number(input.value);

  // meters <-> feet
  document.querySelector(".pmf").textContent = `${input_value} meters = ${(
    input_value * 3.281
  ).toFixed(3)} feet | ${input_value} feet = ${(input_value * 0.3048).toFixed(
    3
  )} meters`;

  // liters <-> gallons
  document.querySelector(".plg").textContent = `${input_value} liters = ${(
    input_value * 0.264172
  ).toFixed(3)} gallons | ${input_value} gallons = ${(
    input_value * 3.78541
  ).toFixed(3)} liters`;

  // kilos <-> pounds
  document.querySelector(".pkp").textContent = `${input_value} kilos = ${(
    input_value * 2.20462
  ).toFixed(3)} pounds | ${input_value} pounds = ${(
    input_value * 0.453592
  ).toFixed(3)} kilos`;
});
