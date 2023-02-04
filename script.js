const display = document.getElementById("display");

const buttons = document.querySelectorAll("button");

const themeTogglerBtn = document.querySelector(".theme-toggler");

const calculator = document.querySelector(".calculator");

const btnNumbers = document.querySelectorAll(".btn-number");

const btnOperators = document.querySelectorAll(".btn-operator");

const btnClear = document.querySelector(".clear");

const btnEqual = document.querySelector(".btn-equal");

const soundButton = new Audio("/sound/button__sound.wav");

const soundChangeTheme = new Audio("sound/Long-Pop.wav");

buttons.forEach((item) => {
  item.addEventListener("click", () => {
    soundButton.play();
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();

      display.innerText = string.substring(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Null";
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      display.innerText += item.id;
    }
  });
});

themeTogglerBtn.addEventListener("click", () => {
  soundChangeTheme.play();
  display.classList.toggle("display__light");
  btnClear.classList.toggle("clear__light");
  btnOperators.forEach((btnOperator) =>
    btnOperator.classList.toggle("btn-operator__light")
  );
  calculator.classList.toggle("dark");
  themeTogglerBtn.classList.toggle("active");
  btnEqual.classList.toggle("btn-equal__light");
  btnNumbers.forEach((btnNumber) =>
    btnNumber.classList.toggle("btn-number__light")
  );
});
