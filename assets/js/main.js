"use strict";

var doc = document.documentElement;
doc.setAttribute('data-useragent', navigator.userAgent);

// Default color
$(".nav-link").css("color", "#FFF");
$(".navbar-brand").css("color", "#FFF");
$(".navbar-toggler").css("color", "#FFF");

$(window).scroll(function()
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
}