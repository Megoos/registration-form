$(function($) {
  $('#phone').mask('+7(999)999-9999');
});

$(function() {
  $('#datepick').datepicker({
    autoClose: true,
    view: 'years',
    language: 'my-lang',
    maxDate: new Date()
  });
});

(function($) {
  $(function() {
    $('.select').styler();
  });
})(jQuery);
