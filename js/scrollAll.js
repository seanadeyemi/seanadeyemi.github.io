$(function(){
  $('a[href^="#"]').click(function(){

	var target = $(this).attr('href');
	var strip = target.slice(1);
	var anchor = $("a[name='" + strip + "']");

	e.preventDefault();

	$('html, body').animate({

		scrollTop: anchor.offset().top

	}, 5000);


});


});