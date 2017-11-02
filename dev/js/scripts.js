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
             closeClass:'СЃlose',
                 amsl: 0
            });
           setTimeout(function(){$('#okthanks').bPopup().close();}, 3000);
       }else{
       alert(res.text);
       }
    }, 'json');
    return false;
  })

var easeInQuad = new SmoothScroll('[data-easing="easeInQuad"]', {easing: 'easeInQuad'});