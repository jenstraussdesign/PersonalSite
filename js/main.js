$(document).ready(function(){

  $('.js-nav').on('click', function(){
    
    $('.nav-main').slideToggle();
  });

    $(window).on('resize', function(){
        var w = $(window).width();
        // console.log ('width: ' + w);

        if(w > 800 && $('.nav-main').is(':hidden')){
            console.log('found it');
            $('.nav-main').removeAttr('style');
        }
    });



//place mouseover event on pma signage img
    $('.pma_signage_thumbnail').on('mouseenter', function(){
        $('h2.pma_signagetext').removeClass('hide');
        $('.pma_signage_thumbnail img').animate({opacity: '.2'});
    });

    //place mouseout event on pma signage img
    $('.pma_signage_thumbnail').on('mouseleave', function(){
        $('h2.pma_signagetext').addClass('hide');
        $('.pma_signage_thumbnail img').animate({opacity: '1'});
    });

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


//place mouseover event on dyson img
    $('.dyson_window_thumbnail').on('mouseenter', function(){
        $('h2.dyson_windowtext').removeClass('hide');
        $('.dyson_window_thumbnail img').animate({opacity: '.2'});
    });

    //place mouseout event on dyson img
    $('.dyson_window_thumbnail').on('mouseleave', function(){
        $('h2.dyson_windowtext').addClass('hide');
        $('.dyson_window_thumbnail img').animate({opacity: '1'});

    });

//place mouseover event on cpa brochure img
    $('.cpa_career_thumbnail').on('mouseenter', function(){
        $('h2.cpa_careertext').removeClass('hide');
        $('.cpa_career_thumbnail img').animate({opacity: '.2'});
    });

    //place mouseout event cpa brochure img
    $('.cpa_career_thumbnail').on('mouseleave', function(){
        $('h2.cpa_careertext').addClass('hide');
        $('.cpa_career_thumbnail img').animate({opacity: '1'});

    });


//place mouseover event on paws img
    $('.paws_thumbnail').on('mouseenter', function(){
        $('h2.pawstext').removeClass('hide');
        $('.paws_thumbnail img').animate({opacity: '.2'});
    });

    //place mouseout event on paws img
    $('.paws_thumbnail').on('mouseleave', function(){
        $('h2.pawstext').addClass('hide');
        $('.paws_thumbnail img').animate({opacity: '1'});
    });

    //place mouseover event on oxo img
    $('.oxo_packaging_thumbnail').on('mouseenter', function(){
        $('h2.pma_bustext').removeClass('hide');
        $('.oxo_packaging_thumbnail img').animate({opacity: '.2'});
    });

    //place mouseout event on oxo img
    $('.oxo_packaging_thumbnail').on('mouseleave', function(){
        $('h2.pma_bustext').addClass('hide');
        $('.oxo_packaging_thumbnail img').animate({opacity: '1'});
    });

//place mouseover event on bus img
    $('.pma_bus_thumbnail').on('mouseenter', function(){
        $('h2.pma_bustext').removeClass('hide');
        $('.pma_bus_thumbnail img').animate({opacity: '.2'});
    });

    //place mouseout event on bus img
    $('.pma_bus_thumbnail').on('mouseleave', function(){
        $('h2.pma_bustext').addClass('hide');
        $('.pma_bus_thumbnail img').animate({opacity: '1'});
    });

 //place mouseover event on journal img
    $('.journal_thumbnail').on('mouseenter', function(){
        $('h2.journaltext').removeClass('hide');
        $('.journal_thumbnail img').animate({opacity: '.2'});
    });

    //place mouseout event on journal img
    $('.journal_thumbnail').on('mouseleave', function(){
        $('h2.journaltext').addClass('hide');
        $('.journal_thumbnail img').animate({opacity: '1'});
    }); 


}); // closes doc.ready
