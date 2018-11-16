$(document).ready(function() {

      $(function() {
        $(document).scroll(function() {
          var $nav = $(".navbar ul");
          $nav.toggleClass('scrolled', $(this).scrollTop() > 70);
        });
      });

      $(function() {
        $(".menu-btn").click(function() {
          var $mobileNav = $("#mobileNav");
          var $icon = $("#fas");
          $mobileNav.toggleClass('show');
          $(".fa-bars, .fa-times").toggleClass('fa-bars fa-times');

        });
      });