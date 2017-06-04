
/*$('.parallax-home-2').parallax({imageSrc: 'pictures/snip1.png'});
$('.parallax-home-1').parallax({imageSrc: 'pictures/background.jpeg'});*/



$('[data-parallax="scroll"]').each(function() {
    var $this = $(this);
    $this.parallax({imageSrc: $this.data('image-src') });
}); 

//$('.parallax-home-2').parallax(); may need later

