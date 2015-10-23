$(document).ready(function(e){

	$(window).resize(function(){

		var overHang = (  $(".hills").width() - $(window).width() );

	});

	$(window).scroll(function (){

		var scroll = ( $(window).scrollTop() );
		$('.hills').css('left', '-' + scroll + 'px')
	});

});