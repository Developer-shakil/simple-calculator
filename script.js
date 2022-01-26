let screen = document.getElementById("screen");
let history = document.getElementById("history");
let screenValue = "";
let buttons = document.querySelectorAll("button");
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;

    if (buttonText == "X") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "C") {
      screenValue = "";
      screen.value = screenValue;
    } else if (buttonText == "=") {
      screen.value = eval(screenValue);
      history.value = screen.value;
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}
