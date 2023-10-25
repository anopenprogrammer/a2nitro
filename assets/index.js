const inputElement1 = document.getElementById("myInput1");
const inputElement2 = document.getElementById("myInput2");

inputElement1.addEventListener("input", function () {
  if (inputElement1.value) {
    inputElement1.style.fontWeight = 600;
    inputElement1.style.fontSize = "1rem";
  } else {
    inputElement1.style.fontWeight = "normal";
  }
});

inputElement2.addEventListener("input", function () {
  if (inputElement2.value) {
    inputElement2.style.fontWeight = 600;
    inputElement2.style.fontSize = "1rem";
  } else {
    inputElement2.style.fontWeight = "normal";
  }
});
