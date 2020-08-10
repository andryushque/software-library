let AccordionMenu = function (selector) {
  this.colMenu = document.querySelectorAll(`${selector} li`);
  let This = this;
  this.colMenu.forEach(function (items) {
    if (items.querySelector("ul")) {
      items.firstElementChild.insertAdjacentHTML("beforeend", "");

      items.firstElementChild.onclick = function (e) {
        e.preventDefault();

        let isTrue = this.parentElement.classList.toggle("open");

        if (isTrue) {
          This.show(this.nextElementSibling);
        } else {
          This.hide(this.nextElementSibling);
        }
      };
    }
  });
};

// Show an element
AccordionMenu.prototype.show = function (elem) {
  // Get the natural height of the element
  var getHeight = function () {
    elem.style.display = "block"; // Make it visible
    var height = elem.scrollHeight + "px"; // Get it's height
    return height;
  };

  var height = getHeight(); // Get the natural height
  elem.style.height = height; // Update the height

  setTimeout(function () {
    elem.style.height = "auto";
  }, 350);
};

// Hide an element
AccordionMenu.prototype.hide = function (elem) {
  // Give the element a height to change from
  elem.style.height = elem.scrollHeight + "px";

  // Set the height back to 0
  setTimeout(function () {
    elem.style.height = "0";
  }, 110);

  setTimeout(function () {
    elem.style.display = "";
  }, 700);
};
