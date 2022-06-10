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

}) (jQuery);