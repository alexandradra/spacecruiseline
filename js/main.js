$(document).ready(function() {
  $('.slider').bxSlider({
    adaptiveHeight: true,
    speed: 1500,
    pause: 50000000,
    pager: false,
    auto: true,
    mode: 'fade',
    controls: true,
  });
  $('[data-toggle="datepicker"]').datepicker({
    autoHide: true,
    autoPick: true,
    format: 'dd/mm/yyyy',
    language: 'fr-FR',
    weekStart: 1,
  });
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false,
        loop: false
      }
    }
  });

});
