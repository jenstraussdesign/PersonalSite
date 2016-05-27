$(document).ready(function(){

  $('.js-nav').on('click', function(){
    $('.nav-main').slideToggle();
  });

    $(window).on('resize', function(){
    var w = $(window).width();
    // console.log ('width: ' + w);

    if(w > 800 && $('.nav.main').is(':hidden')){
        console.log('found it');
        $('.nav-main').removeAttr('style');
    }
})

    //place mouseover event on amtrak img
    $('.amtrak_thumbnail').on('mouseenter', function(){
        $('h2.amtraktext').removeClass('hide');
        $('.amtrak_thumbnail img').animate({opacity: '.2'});
    });

    //place mouseout event on amtrak img
    $('.amtrak_thumbnail').on('mouseleave', function(){
        $('h2.amtraktext').addClass('hide');
        $('.amtrak_thumbnail img').animate({opacity: '1'});
    });


    // $('h2.amtraktext').addClass('hide');
    // $('.amtrak_img').hover(function () {
    //     $(this).stop().animate({
    //     }, 200);
    //     $('h2.amtraktext').removeClass('hide');
    //     $('h2.amtraktext').css('opacity', '0.99');
    //     $('amtrak_img').css('opacity', '0.3');
    // }, function() {
    //     $(this).stop().animate({
    //     }, 200);
    //     $('h2.amtraktext').addClass('hide');
    //     $('img.amtrak_img').css('opacity', '1');
    // });



    

    var pull = $('#pull');
        menu = $('nav ul');
        menuHeight = menu.height();
 
    // $("#nav-button").on('click', function(e) {
    //     e.preventDefault();
    //     menu.slideToggle();
    // });

    $(window).resize(function(){
    var w = $(window).width();
    if(w > 320 && menu.is(':hidden')) {
        menu.removeAttr('style');
    }
    });

      }); 
