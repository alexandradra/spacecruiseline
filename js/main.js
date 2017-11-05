$(document).ready(function() {
  $('.slider').bxSlider({
    adaptiveHeight:true,
    speed:1500,
    pause:7000000,
    pager:false,
    auto: true,
    mode:'fade',
    controls: true,
  });
  $('[data-toggle="datepicker"]').datepicker({
    autoHide: true,
    autoPick: true,
    format: 'dd/mm/yyyy',
    language: 'fr-FR',
    weekStart:1,
  });
});
