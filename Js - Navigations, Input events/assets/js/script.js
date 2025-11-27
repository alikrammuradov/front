
const capsInput = document.getElementById("capsInput");
const capsWarn = document.getElementById("capsWarn");

capsInput.addEventListener("keydown", function (event) {
  if (event.getModifierState("CapsLock")) {
    capsWarn.classList.remove("d-none");
  } else {
    capsWarn.classList.add("d-none");
  }
});



const noNumber = document.getElementById("noNumberInput");
const numberWarn = document.getElementById("numberWarn");

noNumber.addEventListener("input", function () {
  if (/\d/.test(noNumber.value)) {
    numberWarn.classList.remove("d-none");
    noNumber.value = noNumber.value.replace(/\d/g, "");
  } else {
    numberWarn.classList.add("d-none");
  }
});



const emailInput = document.getElementById("emailInput");
const emailWarn = document.getElementById("emailWarn");

emailInput.addEventListener("input", function () {
  const email = emailInput.value;
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!pattern.test(email)) {
    emailWarn.classList.remove("d-none");
  } else {
    emailWarn.classList.add("d-none");
  }
});



const circleInput = document.getElementById("circleInput");
const createBtn = document.getElementById("createBtn");
const circleArea = document.getElementById("circleArea");

createBtn.addEventListener("click", function () {
  circleArea.innerHTML = ""; 

  if (Number(circleInput.value) === 2) {
    for (let i = 0; i < 2; i++) {
      const circle = document.createElement("div");
      circleArea.appendChild(circle);
    }
  }
});
