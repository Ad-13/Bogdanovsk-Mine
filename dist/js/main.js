$(document).ready(function($){

// **************** FULL HEIGHT MAIN PAGE ****************** 
	$(window).resize(function(){
		$("#header").height($(window).height());
	});
	$("#header").height($(window).height());

// **************** SLIDER ****************** 
	$('#slider').slick({
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 2000,
		nextArrow: '<div class="arrow-next"><a href="#" class="slick-next"></a></div>',
		prevArrow: '<div class="arrow-prev"><a href="#" class="slick-prev"></a></div>'
	});
});

//************ POPUP ************
$('#callback').click(function (e){
	e.preventDefault();
	$('#modal').css('display', 'block');
	$('#modal-wrapper').css('display', 'block');
});

$('#m-close').click(function (e){
	e.preventDefault();
	$('#modal').css('display', 'none');
});

$("#modal-wrapper").click(function(event){

	$('#modal').css('display', 'none');
});

//***************** MOVE TO **************

$(".move-to").click(function (e){
	e.preventDefault();
	var id  = $(this).attr('href'),
		top = $(id).offset().top;
	$('body,html').stop().animate({scrollTop: top}, 1500);
});