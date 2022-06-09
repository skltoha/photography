(function($){
	'use strict'

// Code Starts!


$('.mobile-menu span').on('click', function(){
    $('.mobile-menu-slide').fadeIn();
})

$('.mobile-menu-slide span').on('click', function(){
    $('.mobile-menu-slide').fadeOut();
})




}) (jQuery);