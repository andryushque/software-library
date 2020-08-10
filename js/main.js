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

  /*=== Install Tabs ===*/
  var tabsItem = $(".tabs__item");
  var contentItem = $(".content__item");
  tabsItem.on("click", function () {
    var activeContent = $(this).attr("data-target");
    contentItem.removeClass("content__item--active");
    tabsItem.removeClass("tabs__item--active");
    $(activeContent).addClass("content__item--active");
    $(this).addClass("tabs__item--active");
  });
});
