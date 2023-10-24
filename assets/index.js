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

document.addEventListener("click", function (event) {
  const dropdown = document.querySelector(".dropdown");
  const dropdownInput = document.getElementById("dropdownInput");
  const dropdownList = document.getElementById("dropdownList");

  // Check if the click occurred outside the dropdown
  if (event.target !== dropdownInput && !dropdown.contains(event.target)) {
      dropdownList.style.display = "none";
  }
});

function toggleDropdown() {
  const dropdownList = document.getElementById("dropdownList");
  if (dropdownList.style.display === "none" || dropdownList.style.display === "") {
      dropdownList.style.display = "block";
  } else {
      dropdownList.style.display = "none";
  }
}

function selectOption(option) {
  const dropdownInput = document.getElementById("dropdownInput");
  dropdownInput.value = option.textContent;
  document.getElementById("dropdownList").style.display = "none";
}