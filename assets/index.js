$(document).ready(function () {
  $(".select-dropdown").select2({
    placeholder: "Select options",
    width: "100%",
    allowClear: true,
  });
});

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader--hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
});

$(document).ready(function () {
  var loader = $(".loader");
  loader.click(function () {
    loader.hide();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    var idInput = document.getElementById("id");
    var passwordInput = document.getElementById("password");

    var enteredId = idInput.value;
    var enteredPassword = passwordInput.value;

    if (enteredId === "Deepak" && enteredPassword === "Deepak@123") {
      window.location.href = "healthcareManufacturer.html";
    } else {
      alert("Invalid ID or Password. Please try again.");
    }
  });
});

// function showPopup() {
//   document.getElementById("popup").style.display = "block";
//   document
//     .getElementById("popup")
//     .setAttribute("class", "model-container scale-up-center");
// }
function showPopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "block";
  popup.classList.remove("scale-down-center");
  popup.classList.add("scale-up-center");
}
function hidePopup() {
  var popup = document.getElementById("popup");
  popup.classList.remove("scale-up-center");
  popup.classList.add("scale-down-center");

  popup.style.display = "none";
}

// function hidePopup() {
//   document
//     .getElementById("popup")
//     .setAttribute("class", "model-container scale-down-center");
//   document.getElementById("popup").style.display = "none";
// }
// function scalingdown(){

// }
