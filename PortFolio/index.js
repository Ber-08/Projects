$(".aside ul li").on("click", function () {
  $(this).addClass("active").siblings().removeClass("active");
});

$(".theme-container .theme-switch").on("click", function () {
  $(".theme-container").toggleClass("open");
});

$(window).scroll(function () {
  $(".theme-container").removeClass("open");
});

var links = document.querySelectorAll(".alternate-color");

function calling(equals) {
  links.forEach((elements) => {
    //2
    var hl = elements.getAttribute("title");
    if (equals == hl) {
      elements.removeAttribute("disabled");
    } else {
      elements.setAttribute("disabled", "true");
    }
  });
}
