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

      if (enteredId === "Deepak" && enteredPassword === "Deepak") {
          window.location.href = "healthcareManufacturer.html";
      } else {
          alert("Invalid ID or Password. Please try again.");
      }
  });
});

