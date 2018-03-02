
//scroll for menu
$(document).ready(function(){
	$(".b-header__menu,.b-footer__menu,#overlay").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1600 мс
		$('body,html').animate({scrollTop: top}, 1900);
	});
});

//scroll top
$(function() {
 
$(window).scroll(function() {
 
if($(this).scrollTop() != 0) {
 
$('#toTop').fadeIn();
 
} else {
 
$('#toTop').fadeOut();
 
}
 
});
 
$('#toTop').click(function() {
 
	$('body,html').animate({scrollTop:0},1600);
 
});
});


//carousel header
$('#carouselOne').owlCarousel({
	items: 1,
	nav:true,
	dots:true,
	loop: true,
	navSpeed: 2000,
	autoplay: true,
	autoplayTimeout: 3000,
	smartSpeed: 2000,
	navText: [$('.b-wedding__arrow--right'),$('.b-wedding__arrow--left')],

});



//hamburger menu
$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });

$("#overlay").on("click","a",function(){
		 $('#overlay').removeClass('open')
		 $('#toggle').removeClass('active')

});

// // video youtobe

// $( ".b-header__btn__video" ).click(function() {
// 	$(".button_container").css("display","none");
//   $( ".b-header__video,.video__span" ).show( "slow", function() {
//   });
// });

// $( ".b-channel__bg" ).click(function() {
//   $( ".b-channel__video").show( "slow", function() {
//     // Animation complete.
//   });
// });

// $( ".video__span" ).click(function() {
	
//   $( ".b-header__video,.video__span" ).hide( "slow", function() {
// 	if($(window).width() > 992)
// 		$(".button_container").css("display","none");
// 	if($(window).width() < 992)
// 		$(".button_container").css("display","block");
// 	});

// });

