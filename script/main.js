$(function () {
  $('.all_menu_show').click(function () {
    $('.navbox').animate({ left: 0 });
  });
  $('.btn_close').click(function () {
    $('.navbox').animate({ left: -100 + '%' });
  });

  //세부정보 모달창
  $('.detail p').click(function () {
    $('.detailbox').fadeIn();
  });
  $('.roominfo button.close').click(function () {
    $('.detailbox').fadeOut();
  });

  //비교함 클릭
  $('i.heart').click(function () {
    $(this).toggleClass('active');
  });

  $('.heart').click(function () {
    if ($('.heart').hasClass('active')) {
      $('.favorite')
        .animate({ bottom: 0 + '%' })
        .delay(3000)
        .animate({ bottom: -100 + '%' }, 1000);
    } else {
      $('.favorite_delete')
        .stop()
        .animate({ bottom: 0 + '%' })
        .delay(3000)
        .animate({ bottom: -100 + '%' }, 1000);
    }
  });
  //메뉴바 스크롤 방지
  $('.navbox').css({ overflow: 'hidden', height: '100%' });
  $('.navbox').on('scroll touchmove mousewheel', function (event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  });
});
