
   //swiper
   var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 0,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
1280: {
  slidesPerView: 2,
    spaceBetween: 0,
    slidesPerGroup: 2,
},
  300: {
  slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1,
},
},
  });
 

  //wow
  new WOW().init();

  //drawer
  jQuery('.drawer-icon').on('click', function(e){
    e.preventDefault()
 
    jQuery('.drawer-icon').toggleClass('is-active');
    jQuery('.drawer-content').toggleClass('is-active');
    jQuery('.drawer-background').toggleClass('is-active');

    return false;
   });

    $('.drawer-content-item a[href]').on('click', function(event) {
    $('.drawer-icon').trigger('click');
  });

//スムーススクロール
  // #から始まるURLがクリックされた時
jQuery('a[href^="#"]').on('click', function() {

  var header = jQuery('header').innerHeight();
  var id = jQuery(this).attr('href');
  var position = 0;
  if (id != '#'){
  var position = jQuery(id).offset().top - header;
  }
  jQuery("html, body").animate({
      scrollTop: position
    },
    300);

  return false;
});

   //top-button(スムーススクロール)
   jQuery(window).on('scroll',function() {
    if ( 100 < jQuery(this).scrollTop()) {
     jQuery('.to-top').addClass('is-show');
    } else{
     jQuery('.to-top').removeClass('is-show');
    }
   });

   $(function() {
    //グーグルフォーム
    let $form = $( '#js-form' )
    $form.submit(function(e) { 
      $.ajax({ 
       url: $form.attr('action'), 
       data: $form.serialize(), 
       type: "POST", 
       dataType: "xml", 
       statusCode: { 
          0: function() { 
            //送信に成功したときの処理 
            $form.slideUp()
            $( '#js-success' ).slideDown()
          }, 
          200: function() { 
            //送信に失敗したときの処理 
            $form.slideUp()
            $( '#js-error' ).slideDown()
          }
        } 
      });
      return false; 
    }); 
    
    //formの入力確認
    let $submit = $( '#js-submit' )
    $( '#js-form input, #js-form textarea' ).on('change', function() {
     if(
       $('#js-form input[type="text"]' ).val() !== "" &&
       $('#js-form input[type="email"]' ).val() !==  true
       ) {
         //全て入力された時
         $submit.prop( 'disabled',false )
         $submit.addClass( '-active' )
       } else {
         //入力されていない時
        $submit.prop( 'disabled',true )
         $submit.removeClass( '-active' )
       }
     })
      });
    

      //左から右へ背景が出現後、文字を表示
 
// 動きのきっかけの起点となるアニメーションの名前を定義
function BgFadeAnime(){

  // 背景色が伸びて出現（左から右）
$('.bgLRextendTrigger').each(function(){ //bgLRextendTriggerというクラス名が
  var elemPos = $(this).offset().top-50;//要素より、50px上の
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  if (scroll >= elemPos - windowHeight){
    $(this).addClass('bgLRextend');// 画面内に入ったらbgLRextendというクラス名を追記
  }else{
    $(this).removeClass('bgLRextend');// 画面外に出たらbgLRextendというクラス名を外す
  }
});	

 // 文字列を囲う子要素
$('.bgappearTrigger').each(function(){ //bgappearTriggerというクラス名が
  var elemPos = $(this).offset().top-50;//要素より、50px上の
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  if (scroll >= elemPos - windowHeight){
    $(this).addClass('bgappear');// 画面内に入ったらbgappearというクラス名を追記
  }else{
    $(this).removeClass('bgappear');// 画面外に出たらbgappearというクラス名を外す
  }
});		
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function (){
  BgFadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function(){
  BgFadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述

  
//一文字ずつ表示させるテキストアニメーション
$(function()　{
  //スライドアニメーションさせる要素
  var block = $(".section-title"),
    Window = $(window);

  Window.scroll(function() {
    block.each(function() {
      //表示範囲に入ったらactiveを付与
      if (Window.scrollTop() > $(this).offset().top - Window.height()) {
        $(this).addClass("active");
      }
    });
  });
});