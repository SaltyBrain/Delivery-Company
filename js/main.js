$(document).ready(function() {

  /* для табов */
	/* (function($) {
    $(function() {
      
      $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
      });
      
    });
    })(jQuery); */
  /* для табов */

  /* Скрипт для плавных якорей */
  $("a.subheader__menu-item").click(function(){
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
      duration: 1000,
      easing: "swing"
    });
    return false;
  });
  /* Скрипт для плавных якорей */

  /* Скрипт кнопки наверх */
  $(window).scroll(function () {

    if ($(this).scrollTop() > 300) {
        $('a.scrollUp').fadeIn();
    } else {
        $('a.scrollUp').fadeOut();
    }
    });
  $('a.scrollUp').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
  });
  /* Скрипт кнопки наверх */
  
}); 