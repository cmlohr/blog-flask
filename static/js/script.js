$(".open-overlay").click(function () {
  var overlay_navigation = $(".overlay-navigation"),
    nav_item_1 = $("nav li:nth-of-type(1)"),
    nav_item_2 = $("nav li:nth-of-type(2)"),
    nav_item_3 = $("nav li:nth-of-type(3)"),
    nav_item_4 = $("nav li:nth-of-type(4)"),
    nav_item_5 = $("nav li:nth-of-type(5)"),
    top_bar = $(".bar-top"),
    middle_bar = $(".bar-middle"),
    bottom_bar = $(".bar-bottom");

  overlay_navigation.toggleClass("overlay-active");
  if (overlay_navigation.hasClass("overlay-active")) {
    top_bar.removeClass("animate-out-top-bar").addClass("animate-top-bar");
    middle_bar
      .removeClass("animate-out-middle-bar")
      .addClass("animate-middle-bar");
    bottom_bar
      .removeClass("animate-out-bottom-bar")
      .addClass("animate-bottom-bar");
    overlay_navigation
      .removeClass("overlay-slide-up")
      .addClass("overlay-slide-down");
    nav_item_1
      .removeClass("slide-in-nav-item-reverse")
      .addClass("slide-in-nav-item");
    nav_item_2
      .removeClass("slide-in-nav-item-delay-1-reverse")
      .addClass("slide-in-nav-item-delay-1");
    nav_item_3
      .removeClass("slide-in-nav-item-delay-2-reverse")
      .addClass("slide-in-nav-item-delay-2");
    nav_item_4
      .removeClass("slide-in-nav-item-delay-3-reverse")
      .addClass("slide-in-nav-item-delay-3");
    nav_item_5
      .removeClass("slide-in-nav-item-delay-4-reverse")
      .addClass("slide-in-nav-item-delay-4");
  } else {
    top_bar.removeClass("animate-top-bar").addClass("animate-out-top-bar");
    middle_bar
      .removeClass("animate-middle-bar")
      .addClass("animate-out-middle-bar");
    bottom_bar
      .removeClass("animate-bottom-bar")
      .addClass("animate-out-bottom-bar");
    overlay_navigation
      .removeClass("overlay-slide-down")
      .addClass("overlay-slide-up");
    nav_item_1
      .removeClass("slide-in-nav-item")
      .addClass("slide-in-nav-item-reverse");
    nav_item_2
      .removeClass("slide-in-nav-item-delay-1")
      .addClass("slide-in-nav-item-delay-1-reverse");
    nav_item_3
      .removeClass("slide-in-nav-item-delay-2")
      .addClass("slide-in-nav-item-delay-2-reverse");
    nav_item_4
      .removeClass("slide-in-nav-item-delay-3")
      .addClass("slide-in-nav-item-delay-3-reverse");
    nav_item_5
      .removeClass("slide-in-nav-item-delay-4")
      .addClass("slide-in-nav-item-delay-4-reverse");
  }
});

var items = [],
  point = document.querySelector("svg").createSVGPoint();

function getCoordinates(e, svg) {
  point.x = e.clientX;
  point.y = e.clientY;
  return point.matrixTransform(svg.getScreenCTM().inverse());
}

function changeColor(e) {
  document.body.className = e.currentTarget.className;
}

function Item(config) {
  Object.keys(config).forEach(function (item) {
    this[item] = config[item];
  }, this);
  this.el.addEventListener("mousemove", this.mouseMoveHandler.bind(this));
  this.el.addEventListener("touchmove", this.touchMoveHandler.bind(this));
}

Item.prototype = {
  update: function update(c) {
    this.clip.setAttribute("cx", c.x);
    this.clip.setAttribute("cy", c.y);
  },
  mouseMoveHandler: function mouseMoveHandler(e) {
    this.update(getCoordinates(e, this.svg));
  },
  touchMoveHandler: function touchMoveHandler(e) {
    e.preventDefault();
    var touch = e.targetTouches[0];
    if (touch) return this.update(getCoordinates(touch, this.svg));
  }
};

[].slice
  .call(document.querySelectorAll(".item"), 0)
  .forEach(function (item, index) {
    items.push(
      new Item({
        el: item,
        svg: item.querySelector("svg"),
        clip: document.querySelector("#clip-" + index + " circle")
      })
    );
  });

[].slice
  .call(document.querySelectorAll("button"), 0)
  .forEach(function (button) {
    button.addEventListener("click", changeColor);
  });


