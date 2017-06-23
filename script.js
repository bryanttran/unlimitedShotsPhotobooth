
/*$('.parallax-home-2').parallax({imageSrc: 'pictures/snip1.png'});
$('.parallax-home-1').parallax({imageSrc: 'pictures/background.jpeg'});*/


// Used to apply parallax scroll function data- etc


/*if ($(window).width() < 768) {
	$.each($('#nav-ele').data(), function () {
		$('nav-ele').attr('data-toggle', 'collapse');
		$('nav-ele').attr('data-target', '.navbar-collapse');
	} else {
		$('nav-ele').removeAttr('data-toggle', 'collapse');
		$('nav-ele').removeAttr('data-target', '.navbar-collapse');
    })
}



$('#navbar a').on('click', function() {
	$('.navbar-toggle').collapse('hide');
});


*/


$('[data-parallax="scroll"]').each(function() {
    var $this = $(this);
    $this.parallax({imageSrc: $this.data('image-src') });
});