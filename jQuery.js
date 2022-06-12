(function ($) {
  "use strict";

  // Code Starts!

  $(".mobile-menu span").on("click", function () {
    $(".mobile-menu-slide").fadeIn();
    $(".socail-area ul li a").removeClass("social-icon-color-1");
    $(".socail-area ul li a").addClass("social-icon-color-2");
  });

  $(".mobile-menu-slide span").on("click", function () {
    $(".mobile-menu-slide").fadeOut();
    $(".socail-area ul li a").removeClass("social-icon-color-2");
    $(".socail-area ul li a").addClass("social-icon-color-1");
  });

  // main page
  $(".hero-area").on("click", function () {
    $(".mobile-menu-slide").fadeOut();
    $(".socail-area ul li a").removeClass("social-icon-color-2");
    $(".socail-area ul li a").addClass("social-icon-color-1");
  });

  // gallery page
  $(".gallery-body").on("click", function () {
    $(".mobile-menu-slide").fadeOut();
    $(".socail-area ul li a").removeClass("social-icon-color-2");
    $(".socail-area ul li a").addClass("social-icon-color-1");
  });
  
  // about page
  $(".about-page-body").on("click", function () {
    $(".mobile-menu-slide").fadeOut();
    $(".socail-area ul li a").removeClass("social-icon-color-2");
    $(".socail-area ul li a").addClass("social-icon-color-1");
  });

  // Nature page
  $(".nature-wallpaper").on("click", function () {
    $(".mobile-menu-slide").fadeOut();
    $(".socail-area ul li a").removeClass("social-icon-color-2");
    $(".socail-area ul li a").addClass("social-icon-color-1");
  });

  $(window).resize(function () {
    var windowsize = $(window).width();

    if (windowsize > 557) {
      $(".mobile-menu-slide").fadeOut();
      $(".socail-area ul li a").removeClass("social-icon-color-2");
      $(".socail-area ul li a").addClass("social-icon-color-1");
    }
  });

  $(window).scroll(function () {
    var windowhight = $(window).scrollTop();

    if (windowhight > 10) {
      $("header").addClass("header-background");
    } else {
      $("header").removeClass("header-background");
    }
  });
})(jQuery);
