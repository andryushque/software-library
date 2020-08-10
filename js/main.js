$(document).ready(function () {
  /*=== Mobile Menu ===*/
  var menuButton = $(".mmenu-button");
  menuButton.on("click", function () {
    $(".mmenu").toggleClass("mmenu--visible");
  });

  var closeButton = $(".mmenu-close");
  closeButton.on("click", function () {
    $(".mmenu").toggleClass("mmenu--visible");
  });

  $(document).keydown(function (e) {
    if (e.key == "Escape") {
      $(".mmenu").toggleClass("mmenu--visible");
    }
  });

  /*=== Mobile Menu Accordeon ===*/
  new AccordionMenu(".mmenu-accordion");
});
