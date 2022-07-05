$(function () {
  $('.all_menu_show').click(function () {
    $('.navbox').animate({ left: 0 });
  });
  $('.btn_close').click(function () {
    $('.navbox').animate({ left: -100 + '%' });
  });

  //메뉴바 스크롤 방지
  $('.navbox').css({ overflow: 'hidden', height: '100%' });
  $('.navbox').on('scroll touchmove mousewheel', function (event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  });
});
