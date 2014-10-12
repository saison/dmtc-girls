$(function(){

  var navTop = $("header nav").offset().top;
  $(window).scroll(function(){
    // nav top
    var scroll = $(this).scrollTop();
    if (scroll >= navTop) {
      $("header nav").addClass("fixed");
    } else {
      $("header nav").removeClass("fixed");
    }

    // click to top
    $("header nav ul li a").click(function(){
      var select = $(this).attr("href");
      var target = $(select).offset().top;
      target -= 100;
      $("html,body").stop().animate({scrollTop: target}, 1000);
      return false;
    });
  });
});
