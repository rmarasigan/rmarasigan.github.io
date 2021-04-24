"use strict";

var doc = document.documentElement;
doc.setAttribute('data-useragent', navigator.userAgent);

$(function()
{
  $('.btn-group-fab').on('click', '.btn', function()
  {
    $('.btn-group-fab').toggleClass('active');
  });

  $('#integrityNetModal-tab a').click(function (e)
  {
    e.preventDefault();
    $(this).tab('show');
  });
});

// Adds animation when navbar link on click
$(".nav-item>a[href^='#']").on("click", function (e)
{
  e.preventDefault();
  $("html, body").animate({
    scrollTop: $(this.hash).offset().top
  }, 500);
  return false;
});

$(".home-header__scroll>a[href^='#']").on("click", function (e)
{
  e.preventDefault();
  $("html, body").animate({
    scrollTop: $(this.hash).offset().top
  }, 500);
  return false;
});