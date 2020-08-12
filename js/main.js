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
      $(".mmenu").removeClass("mmenu--visible");
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

  /*=== Modal Form ===*/
  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);
  $(document).keydown(function (e) {
    if (e.key == "Escape") {
      closeModal(event);
    }
  });

  function openModal() {
    var targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
    $("body").addClass("modal-open");
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
    $("body").removeClass("modal-open");
  }

  $(document).click(function (event) {
    // if you click on anything except the modal itself or the "open modal" link, close the modal
    if (!$(event.target).closest(".modal__dialog, .js-modal-button").length) {
      closeModal(event);
    }
  });

  /*=== FAQ Accordion ===*/
  var check = $(".check");
  check.click(function () {
    check.not(this).prop("checked", false);
  });

  /*=== Reviews Slider ===*/
  var reviewsSwiper = new Swiper(".reviews-slider", {
    loop: true,
    speed: 500,

    autoplay: {
      delay: 5000,
    },

    keyboard: {
      enabled: true,
    },
  });

  $(".swiper-container").hover(
    function () {
      reviewsSwiper.autoplay.stop();
    },
    function () {
      reviewsSwiper.autoplay.start();
    }
  );
});
