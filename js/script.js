$(function(){
  //ハンバーガーメニュー
  $('.burger-btn').on('click',function(){
    $('.header-nav').fadeToggle(300);
    $(this).toggleClass('cross');
    $('body').toggleClass('scroll');
  });

  //nav-itemを押すと閉じる
  $('.nav-item').on('click',  function(){
    $('.header-nav').fadeToggle(300);
  });


  //アコーディオン
  $('#tab01:first').addClass('is-open');
  $('.tab-trigger').on('click', function (){
    //nextは次の要素を取得する、今回はクリック要素の次の要素にis-showクラスをつけている
    $(this).next().toggleClass('is-open');
    //クリックした要素自体にもclass付与
    $(this).toggleClass('is-active');
  });

  

  //swiper
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    speed: 1000,
    slidesPerView: 1,
    centeredSlides:true,
    centeredSlides : true,
    spaceBetween: 28,
    autoplay: {
       delay: 10000,
    },

    breakpoints: {
      786: {
        slidesPerView: 3,
        autoplay: {
          delay: 10000,
       },
      }
    },
})

//aos
AOS.init()

//form 
$(document).ready(function () {

  const $submitBtn = $('#js-submit')
  $('#form input,#form textarea').on('change', function () {
    if (
      $('#form input[type="text"]').val() !== "" &&
      $('#form input[type="email"]').val() !== "" &&
      $('#form input[type="checkbox"]').val() !== "" &&
      $('#form #document').prop('checked') === true
    ) {
      $submitBtn.prop('disabled', false);

    } else {
      $submitBtn.prop('disabled', true);
    }
  });

});

});

