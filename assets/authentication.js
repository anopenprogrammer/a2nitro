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