"use strict";

var doc = document.documentElement;
doc.setAttribute('data-useragent', navigator.userAgent);

// Default color
$(".nav-link").css("color", "#FFF");
$(".navbar-brand").css("color", "#FFF");
$(".navbar-toggler").css("color", "#FFF");

$(window).scroll(function ()
{
  if ($(window).scrollTop() >= 50)
  {
    $(".nav-link").css("color", "#212121");
    $(".navbar").css("background", "#FFC600");
    $(".navbar-brand").css("color", "#212121");
    $(".navbar-toggler").css("color", "#212121");
  }
  
  else
  {
    $(".nav-link").css("color", "#FFF");
    $(".navbar-brand").css("color", "#FFF");
    $(".navbar-toggler").css("color", "#FFF");
    $(".navbar").css("background", "transparent");
  }
});

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
{
  $("html").css("cursor", "none");
  $("body").css("cursor", "none");
  $("#dots").css("display", "none");
  $("#more").css("display", "inline");
  $(".btn-see-more").css("display", "none");
}

$(".btn-see-more").on("click", function () {
  let dots = $("#dots");
  let seeMore = $("#more");
  let btnSeeMore = $(".see-more__btn-text");

  if (dots.css("display") === "none")
  {
    dots.css("display", "inline");
    btnSeeMore.text("See more");
    seeMore.css("display", "none");
  }
  else
  {
    dots.css("display", "none");
    btnSeeMore.text("See less");
    seeMore.css("display", "inline");
  }
});