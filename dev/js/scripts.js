// call popup

$('.call').click(function(){
  event.preventDefault();
  $('.popup-call').bPopup({
    closeClass:'icon__close',
      amsl: 0,
      positionStyle: 'fixed',
    }); 
});


$('.send-form').submit(function() {
      $.post($(this).attr('action'), $(this).serialize(), function(res) {         
     if (res.success == 1) {
         $('#rise').bPopup().close();
           $('#okthanks').bPopup({
             closeClass:'сlose',
                 amsl: 0
            });
           setTimeout(function(){$('#okthanks').bPopup().close();}, 3000);
       }else{
       alert(res.text);
       }
    }, 'json');
    return false;
  })


$(function () {

  $('#new-banner').responsiveSlides({
    auto: true,
    pager: false,
    nav: true,
    speed: 500,
    namespace: "im-new-banners"
  });

  $('#main-banner').responsiveSlides({
    auto: true,
    pager: false,
    nav: true,
    speed: 500,
    namespace: "main-banners"
  });

  $('#team-banner').responsiveSlides({
    auto: true,
    pager: false,
    nav: true,
    speed: 500,
    namespace: "team-banners"
  });

  $('#reviews-banner').responsiveSlides({
    auto: false,
    pager: false,
    nav: true,
    speed: 500,
    namespace: "reviews-banners"
  });

  $('#meetings-banner').responsiveSlides({
    auto: false,
    pager: false,
    nav: true,
    speed: 500,
    namespace: "meetings-banners"
  });


});