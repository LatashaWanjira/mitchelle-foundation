$(document).ready(function() {

  $(function() {
    $(document).scroll(function() {
      var $nav = $(".navbar ul");
      $nav.toggleClass('scrolled', $(this).scrollTop() > 70);
    })
  })
});