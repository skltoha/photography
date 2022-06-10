(function($){
	'use strict'

// Code Starts!


$('.mobile-menu span').on('click', function(){
    $('.mobile-menu-slide').fadeIn();
})

$('.mobile-menu-slide span').on('click', function(){
    $('.mobile-menu-slide').fadeOut();
})

$(window).resize(function(){

var windowsize = $(window).width();

if (windowsize > 557){
    $('.mobile-menu-slide').fadeOut();
}

});


$(window).scroll(function(){

    var windowhight = $(window).scrollTop();
    
    if (windowhight > 100){
    $('header').addClass('header-background');
    }
    else {
        $('header').removeClass('header-background');
    }
    });

}) (jQuery);