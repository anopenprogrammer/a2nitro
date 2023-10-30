$(document).ready(function () {
  $(".select-dropdown").select2({
    placeholder: "Select options",
    width: "100%",
    allowClear: true,
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
