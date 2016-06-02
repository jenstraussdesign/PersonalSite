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



//place mouseover event on web img
    $('.web_thumbnail').on('mouseenter', function(){
        $('h2.nue-sitetext').removeClass('hide');
        $('.web_thumbnail img').animate({opacity: '.2'});
    });

    //place mouseout event on web img
    $('.web_thumbnail').on('mouseleave', function(){
        $('h2.nue-sitetext').addClass('hide');
        $('.web_thumbnail img').animate({opacity: '1'});
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


//place mouseover event on identity img
    $('.lss_thumbnail').on('mouseenter', function(){
        $('h2.lsstext').removeClass('hide');
        $('.lss_thumbnail img').animate({opacity: '.2'});
    });

    //place mouseout event on identity img
    $('.lss_thumbnail').on('mouseleave', function(){
        $('h2.lsstext').addClass('hide');
        $('.lss_thumbnail img').animate({opacity: '1'});

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



    //place mouseover event on packging img
    $('.oxo_packaging_thumbnail').on('mouseenter', function(){
        $('h2.oxo_packagingtext').removeClass('hide');
        $('.oxo_packaging_thumbnail img').animate({opacity: '.2'});
    });

    //place mouseout event on packaging img
    $('.oxo_packaging_thumbnail').on('mouseleave', function(){
        $('h2.oxo_packagingtext').addClass('hide');
        $('.oxo_packaging_thumbnail img').animate({opacity: '1'});
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

    //place mouseover event on wall img
    $('.wall_thumbnail').on('mouseenter', function(){
        $('h2.walltext').removeClass('hide');
        $('.wall_thumbnail img').animate({opacity: '.2'});
    });

    //place mouseout event on wall img
    $('.wall_thumbnail').on('mouseleave', function(){
        $('h2.walltext').addClass('hide');
        $('.wall_thumbnail img').animate({opacity: '1'});
    }); 


}); // closes doc.ready
