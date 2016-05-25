$(document).ready(function(){
    $('h2.journaltext_big').addClass('hide_big');
    $('.journal_thumbnail_big').hover(function () {
        $(this).stop().animate({
        }, 200);
        $('h2.journaltext_big').removeClass('hide_big');
        $('h2.journal_big').css('opacity', '0.99');
        $('img.journal_img_big').css('opacity', '0.3');
    }, function() {
        $(this).stop().animate({
        }, 200);
        $('h2.journaltext_big').addClass('hide_big');
        $('img.journal_img_big').css('opacity', '1');
    });
});



    $('h2.oxo_packagingtext_big').addClass('hide_big');
    $('.oxo_packaging_thumbnail_big').hover(function () {
        $(this).stop().animate({
        }, 200);
        $('h2.oxo_packagingtext_big').removeClass('hide_big');
        $('h2.oxo_packaging_big').css('opacity', '0.99');
        $('img.oxo_packaging_img_big').css('opacity', '0.3');
    }, function(){
        $(this).stop().animate({
        }, 200);
        $('h2.oxo_packagingtext_big').addClass('hide_big');
        $('img.oxo_packaging_img_big').css('opacity', '1');
    });


    $('h2.drwctext_big').addClass('hide_big');
    $('.drwc_thumbnail_big').hover(function () {
        $(this).stop().animate({
        }, 200);
        $('h2.drwctext_big').removeClass('hide_big');
        $('h2.drwctext_big').css('opacity', '0.99');
        $('img.drwc_img_big').css('opacity', '0.3');
    }, function(){
        $(this).stop().animate({
        }, 200);
        $('h2.drwctext_big').addClass('hide_big');
        $('img.drwc_img_big').css('opacity', '1');
    });


    $('h2.firsthandtext_big').addClass('hide_big');
    $('.firsthand_thumbnail_big').hover(function () {
        $(this).stop().animate({
        }, 200);
        $('h2.firsthandtext_big').removeClass('hide_big');
        $('h2.firsthandtext_big').css('opacity', '0.99');
        $('img.firsthand_img_big').css('opacity', '0.3');
    }, function(){
        $(this).stop().animate({
        }, 200);
        $('h2.firsthandtext_big').addClass('hide_big');
        $('img.firsthand_img_big').css('opacity', '1');
    });





//small thumbnails




    $('h2.ic3401text').addClass('hide');
    $('.ic3401_thumbnail').hover(function () {
        $(this).stop().animate({
        }, 200);
        $('h2.ic3401text').removeClass('hide');
        $('h2.ic3401text').css('opacity', '0.99');
        $('img.ic3401_img').css('opacity', '0.3');
    }, function() {
        $(this).stop().animate({
        }, 200);
        $('h2.ic3401text').addClass('hide');
        $('img.ic3401_img').css('opacity', '1');
    });



    $('h2.sciencecentertext').addClass('hide');
    $('.sciencecenter_thumbnail').hover(function () {
        $(this).stop().animate({
        }, 200);
        $('h2.sciencecentertext').removeClass('hide');
        $('h2.sciencecentertext').css('opacity', '0.99');
        $('img.sciencecenter_img').css('opacity', '0.3');
    }, function () {
        $(this).stop().animate({
        }, 200);
        $('h2.sciencecentertext').addClass('hide');
        $('img.sciencecenter_img').css('opacity', '1');
    });



    $('h2.firsthandtext').addClass('hide');
    $('.firsthand_thumbnail').hover(function () {
        $(this).stop().animate({
        }, 200);
        $('h2.firsthandtext').removeClass('hide');
        $('h2.firsthandtext').css('opacity', '0.99');
        $('img.firsthand_img').css('opacity', '0.3');
    }, function(){
        $(this).stop().animate({
        }, 200);
        $('h2.firsthandtext').addClass('hide');
        $('img.firsthand_img').css('opacity', '1');
    });




    $('h2.dmdtext').addClass('hide');
    $('.dmd_thumbnail').hover(function () {
        $(this).stop().animate({
        }, 200);
        $('h2.dmdtext').removeClass('hide');
        $('h2.dmdtext').css('opacity', '0.99');
        $('img.dmd_img').css('opacity', '0.3');
    }, function(){
        $(this).stop().animate({
        }, 200);
        $('h2.dmdtext').addClass('hide');
        $('img.dmd_img').css('opacity', '1');
    });



    $('h2.drwctext').addClass('hide');
    $('.drwc_thumbnail').hover(function () {
        $(this).stop().animate({
        }, 200);
        $('h2.drwctext').removeClass('hide');
        $('h2.drwctext').css('opacity', '0.99');
        $('img.drwc_img').css('opacity', '0.3');
    }, function(){
        $(this).stop().animate({
        }, 200);
        $('h2.drwctext').addClass('hide');
        $('img.drwc_img').css('opacity', '1');
    });


    $('h2.hipcitytext').addClass('hide');
    $('.hipcity_thumbnail').hover(function () {
        $(this).stop().animate({
        }, 200);
        $('h2.hipcitytext').removeClass('hide');
        $('h2.hipcitytext').css('opacity', '0.99');
        $('img.hipcity_img').css('opacity', '0.3');
    }, function(){
        $(this).stop().animate({
        }, 200);
        $('h2.hipcitytext').addClass('hide');
        $('img.hipcity_img').css('opacity', '1');
    });


    var pull = $('#pull');
        menu = $('nav ul');
        menuHeight = menu.height();
 
    $("#nav-button").on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });

    $(window).resize(function(){
    var w = $(window).width();
    if(w > 320 && menu.is(':hidden')) {
        menu.removeAttr('style');
    }
    }); 
