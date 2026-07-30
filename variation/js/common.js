$(function () {
    $('.js-slick01').slick({
      arrows: true, // 前・次のボタンを表示する
      dots: true, // ドットナビゲーションを表示する
      speed: 1000, // スライドさせるスピード（ミリ秒）
      responsive:[
          {
            breakpoint: 767,
            settings: {
              arrows: false,
              swipe: true
          }}]
     });
  });

  $(function () {
    $('.js-slick02').slick({
      arrows: true, // 前・次のボタンを表示する
      dots: true, // ドットナビゲーションを表示する
      speed: 1000, // スライドさせるスピード（ミリ秒）
      centerMode: true,
      centerPadding: '15%',
      responsive:[
          {
            breakpoint: 767,
            settings: {
              arrows: false,
              swipe: true
          }}]
    });
  });