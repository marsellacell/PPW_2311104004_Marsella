const result = document.getElementById("result");
const buttons = document.querySelectorAll(".btn");

let expression = "";

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (value === "C") {
      expression = "";
      result.value = "";
    } else if (value === "←") {
      expression = expression.slice(0, -1);
      result.value = expression;
    } else if (value === "=") {
      try {
        expression = eval(expression.replace("%", "/100"));
        result.value = expression;
      } catch {
        result.value = "Error";
        expression = "";
      }
    } else {
      expression += value;
      result.value = expression;
    }
  });
});
