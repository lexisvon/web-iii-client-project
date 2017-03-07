$(document).ready(function(){


	$('.mobile-nav-btn').click(function(){
		$('.mobile-nav-btn').hide();
		$('.mobile-nav-btn-active').show();

	})

	$('.mobile-nav-btn-active').click(function(){
		$('.mobile-nav-btn-active').hide();
		$('.mobile-nav-btn').show();
	})


$('.mobile-nav-btn').click(function(e){
		 $(".mobile-nav").addClass("show");

		// this prevents the browser from doing the default link action
		e.preventDefault();

	});

$('.mobile-nav-btn-active').click(function(e){
		 $(".mobile-nav").removeClass("show");

		// this prevents the browser from doing the default link action
		e.preventDefault();

	});

var $window = $(window);
	  $window.on('resize', function (){
        if ($window.width() < 800){
            $('.mobile-nav').show();
            $('.mobile-nav-btn').show();
        }
        if ($window.width() > 801){
        	$('.mobile-nav-btn').hide();
        	$('.mobile-nav-btn-active').hide();
        }
		window.addEventListener('scroll', function () {
		document.body.classList[
		window.scrollY > 20 ? 'add': 'remove'
		]('scrolled');
		});
});
		$('.gallery-2').slick({
		 infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear'
		});




	  // added these two lines of code to set page load default
	$("#dinner-content").addClass("main-courses");
	$("#sub-menu").addClass("dinner");

	$('#dinner').addClass("menu-item-active");
	$('#main-courses').addClass("menu-item-active");



	$("#dinner").click(function() {
		$('.dinner > button').removeClass();
		$('#dinner').addClass("menu-item-active");
		$('#drinks').removeClass("menu-item-active");
		$('#main-courses').addClass("menu-item-active");


		$("#sub-menu").removeClass();
		$("#drinks-content").removeClass();
		$("#sub-menu").addClass("dinner");
				// added this to always show main courses on click of dinner
		$("#dinner-content").addClass("main-courses");
	});

	$("#drinks").click(function() {
		$('.drinks > button').removeClass();
		$('#drinks').addClass("menu-item-active");
		$('#dinner').removeClass("menu-item-active");
		$('#new-world').addClass("menu-item-active");
		

		$("#sub-menu").removeClass();
		$("#dinner-content").removeClass();
		$("#sub-menu").addClass("drinks");
		// added this to always show old world drinks on click of drinks
		$("#drinks-content").addClass("old-world");
	});

	$("#appetizers").click(function() {
		$('.dinner > button').removeClass();
		$('#appetizers').addClass("menu-item-active");

		$("#dinner-content").removeClass();
		$("#dinner-content").addClass("appetizers");
	});

	$("#veg-specials").click(function() {
		$('.dinner > button').removeClass();
		$('#veg-specials').addClass("menu-item-active");

		$("#dinner-content").removeClass();
		$("#dinner-content").addClass("veg-specials");
	});

	$("#main-courses").click(function() {
		$('.dinner > button').removeClass();
		$('#main-courses').addClass("menu-item-active");
		
		$("#dinner-content").removeClass();
		$("#dinner-content").addClass("main-courses");
	});

	$("#desserts").click(function() {
		$('.dinner > button').removeClass();
		$('#desserts').addClass("menu-item-active");

		$("#dinner-content").removeClass();
		$("#dinner-content").addClass("desserts");
	});

	$("#kids-menu").click(function() {
		$('.dinner > button').removeClass();
		$('#kids-menu').addClass("menu-item-active");

		$("#dinner-content").removeClass();
		$("#dinner-content").addClass("kids-menu");
	});

	$("#old-world").click(function() {
		$('.drinks > button').removeClass();
		$('#old-world').addClass("menu-item-active");

		$("#drinks-content").removeClass();
		$("#drinks-content").addClass("old-world");
	});

	$("#new-world").click(function() {
		$('.drinks > button').removeClass();
		$('#new-world').addClass("menu-item-active");

		$("#drinks-content").removeClass();
		$("#drinks-content").addClass("new-world");
	});

	$("#beer").click(function() {
		$('.drinks > button').removeClass();
		$('#beer').addClass("menu-item-active");

		$("#drinks-content").removeClass();
		$("#drinks-content").addClass("beer");
	});	  

});

