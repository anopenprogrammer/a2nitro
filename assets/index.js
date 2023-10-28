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
  loader.click(function(){
    loader.hide();
  });
});
