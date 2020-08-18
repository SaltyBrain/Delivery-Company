$(document).ready(function() {
  var modal = $('.modal'),
  modalBtn = $('[data-toggle=modal]'),
  closeBtn = $('.modal__close');
  const scrollUp = $('.scrollUp-button');

  /* для табов */
    $(function() {
      
      $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
      });
      
    });

  /* для табов */

  /* Скрипт для плавной прокрутки */
  $("a.subheader__menu-item").click(function(){
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
      duration: 1000,
      easing: "swing"
    });
    return false;
  });

  $("a.block-button").click(function(){
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

    if ($(this).scrollTop() > 600) {
      scrollUp.fadeIn();
    } else {
      scrollUp.fadeOut();
    }
    });
    scrollUp.click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
  });
  /* Скрипт кнопки наверх */
  /* Инициализируем wow js */
    
  new WOW().init();

  /* Инициализируем wow js */
  /* скрипт для модального окна */

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  $(this).keydown(function(eventObject){
    if (eventObject.which == 27)
      modal.removeClass('modal--visible');
  });

  $(document).mouseup(function (e) {
    if (modal.has(e.target).length === 0){
        modal.removeClass('modal--visible');
    }
  });

  /* скрипт для модального окна */

}); 