"use strict";

var doc = document.documentElement;
doc.setAttribute('data-useragent', navigator.userAgent);

document.onreadystatechange = function()
{
  var state = document.readyState;

  if (state == "interactive")
  {
    $("nav").css("visibility", "collapse");
    $(".content--wrapper").css("display", "none");
    $(".loader").css("display", "block");
  }

  else if (state == "complete")
  {
    setTimeout(function()
    {
      $("nav").css("visibility", "visible");
      $(".content--wrapper").css("display", "block");
      $(".loader").css("display", "none");

      // Initializing AOS Animation
      AOS.init({
        delay: 100,
        once: true,
        offset: 200,
        duration: 600,
        disable: 'mobile',
        easing: 'ease-in-sine'
      });

      // Initialize slick in desktop / laptop
      $(".skills--card-slick").slick({
        swipe: true,
        dots: false,
        arrows: false,
        infinite: true,
        draggable: true,
        cssEase: "ease",
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: "1%",
        adaptiveHeight: true
      });

      // Initialize tilt
      $(".portfolio--card .card").tilt({
        maxTilt: 15,
        speed: 1200,
        scale: 1.04,
        perspective: 1400,
        easing: "cubic-bezier(.03, .98, .52, .99)"
      });

      // Adds animation when navbar link on click
      $('a[href^="#"]').on("click", function (e)
      {
        e.preventDefault();
        $("html, body").animate({
          scrollTop: $(this.hash).offset().top
        }, 500);
        return false;
      });
    }, 1000);
  }
}

$(document).ready(function()
{
  // Checks client is using mobile and re-initialize slick settings
  if (/Android|webOS|iPhone|iPad|iPod|Blackberry|IEMobile|Opera Mini/i.test(navigator.userAgent))
  {
    // Sets font size
    $(".page-header--wrapper h1").css("font-size", "5vw");
    $(".page-header--wrapper .lead").css("font-size", "4vw");
    $(".about-me--header h2").css("font-size", "6vw");
    $(".skills--header h2").css("font-size", "6vw");
    $(".os--header h2").css("font-size", "6vw");
    $(".experience--header h2").css("font-size", "6vw");
    $(".portfolio--header h2").css("font-size", "6vw");
    $(".gallery--header h2").css({"font-size": "6vw", "margin-bottom": "1rem"});

    // Re-initialize slick
    $(".skills--card-slick").slick({
      swipe: true,
      dots: false,
      arrows: false,
      infinite: true,
      draggable: true,
      cssEase: "ease",
      slidesToShow: 1,
      slidesToScroll: 1,
      centerPadding: "1%",
      adaptiveHeight: true
    });
  }
});
