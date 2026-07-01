 let display = document.getElementById("disp");

  function appendToDisplay(value) {
      if (display.value === "0" && value !== ".") {
          display.value = value;
      } else {
          display.value += value;
      }
  }

  function clearDisplay() {
      display.value = "";
  }

  function calculate() {
      try {
          display.value = eval(display.value.replace(/÷/g, '/').replace(/×/g, '*'));
      } catch {
          display.value = "Error";
      }
  }

  

  function percent() {
      if (display.value) {
          display.value = (parseFloat(display.value) / 100).toString();
      }
  }

   
  clearDisplay();