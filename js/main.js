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

  $(".modal__overlay").click(function (e) {
    if (!$(e.target).is(".modal__dialog")) {
      console.log("111");
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

  /*=== Modal Validation ===*/
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "Please enter at least 2 characters",
        },
        email: {
          required: "Please specify your email address",
          email: "Email address format: name@domain.com",
        },
        password: {
          required: "Please enter your password",
          minlength: "Your password must be at least 8 characters long",
        },
        terms: {
          required: "You must agree to the terms and conditions",
        },
      },
    });
  });

  /*=== Switch Button ===*/
  $(function () {
    $(".plan-switch__button").click(function (e, changeState) {
      if (changeState === undefined) {
        $(this).toggleClass("plan-switch__button--on");
      }
      if ($(this).hasClass("plan-switch__button--on")) {
        $(this).trigger("on.switch");
      } else {
        $(this).trigger("off.switch");
      }
    });

    $(".plan-switch__button").on("on.switch", function () {
      console.log("Кнопка переключена в состояние on");
      $(".plan__price--off").removeClass("plan__price--active");
      $(".plan__price--on").addClass("plan__price--active");
    });

    $(".plan-switch__button").on("off.switch", function () {
      console.log("Кнопка переключена в состояние off");
      $(".plan__price--on").removeClass("plan__price--active");
      $(".plan__price--off").addClass("plan__price--active");
    });

    $(".plan-switch__button").each(function () {
      $(this).triggerHandler("click", false);
    });
  });

  /*=== To Top Button ===*/
  var btn = $(".top-button");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });

  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });

  /*=== Disable Hover Effect ===*/
  $(window).resize(function () {
    if ($(window).width() > 991) {
      $(".button").addClass("button--hover");
      $(".a-link").addClass("a-link--hover");
    }
    if ($(window).width() <= 991) {
      $(".button").removeClass("button--hover");
      $(".a-link").removeClass("a-link--hover");
    }
  });
});
