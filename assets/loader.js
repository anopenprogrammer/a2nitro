window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    // loader.addEventListener("transitionend", () => {
    //   document.body.removeChild(loader);
    // });
  });
  
  $(document).ready(function () {
    var loader = $(".loader");
    loader.click(function () {
      loader.hide();
    });
  });