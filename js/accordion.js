$(function(){
  $('.js-menu__item__link').click(function(){
     $(this).next().slideToggle();
     $(this).parent().siblings().children('.submenu'). slideUp();
      return false;});
    });
