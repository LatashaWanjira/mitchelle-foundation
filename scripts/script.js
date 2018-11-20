$(document).ready(function() {

  $(function() {
    $(document).scroll(function() {
      var $nav = $(".navbar ul");
      $nav.toggleClass('scrolled', $(this).scrollTop() > 70);
    })
  })

  $(function() {
    $(".menu-btn").click(function() {
      var $mobileNav = $("#mobileNav");
      var $icon = $("#fas");
      $mobileNav.toggleClass('show');
      $(".fa-bars, .fa-times").toggleClass('fa-bars fa-times');
    })
  })

  $('#gallery').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
    appendArrows: $(".button-container"),
    prevArrow: "<button type='button' class='slick-prev'><i class='fas fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow: "<button type='button' class='slick-next'><i class='fas fa-angle-right' aria-hidden='true'></i></button>",
  });
});