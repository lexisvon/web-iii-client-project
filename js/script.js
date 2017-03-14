$(document).ready(function(){



	$('.mobile-nav-btn').click(function(e){
		$('.mobile-nav-btn').removeClass('display');
		$('.mobile-nav-btn-active').removeClass('hide');
		$('.mobile-nav-btn').addClass('hide');
		$('.mobile-nav-btn-active').addClass('display');
		var mobileNav = $(this).attr("class");
		console.log(mobileNav);

		$(".mobile-nav").addClass("show");

		e.preventDefault();
	})

	$('.mobile-nav-btn-active').click(function(e){

		$('.mobile-nav-btn').removeClass('hide');
		$('.mobile-nav-btn-active').removeClass('display');
		$('.mobile-nav-btn').addClass('display');
		$('.mobile-nav-btn-active').addClass('hide');
		var mobileNavActive = $(this).attr("class");
		console.log(mobileNavActive);

		$(".mobile-nav").removeClass("show");

		// this prevents the browser from doing the default link action
		e.preventDefault();
	})

var $window = $(window);
	  $window.on('resize', function (){
        if ($window.width() < 800){
            $('.mobile-nav-btn.display').show();
            $('.mobile-nav.show').show();

        } if ($window.width() > 801){
            $('.mobile-nav.show').removeClass('show');
            $('.mobile-nav-btn').addClass('display');
            $('.mobile-nav-btn.display').hide();
            $('.mobile-nav-btn-active.display').removeClass('display');

        }

      

});

	  window.addEventListener('scroll', function () {
	  document.body.classList[
	  window.scrollY > 20 ? 'add': 'remove'
	  ]('scrolled');
	  });




	  $('.smooth-scroll').on('click', 'a', function(e) {
		// prevent default anchor click behavior
		e.preventDefault();
		// store hash
		var hash = this.hash;
		$('html, body').animate({
		scrollTop: $(this.hash).offset().top-0
		}, 700, function(){
		// when done, add hash to url
		// (default click behaviour)
		window.location.hash = hash;
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
		$('#rouge').addClass("menu-item-active");
		

		$("#sub-menu").removeClass();
		$("#dinner-content").removeClass();
		$("#sub-menu").addClass("drinks");
		// added this to always show old world drinks on click of drinks
		$("#drinks-content").addClass("rouge");
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

	$("#blanc").click(function() {
		$('.drinks > button').removeClass();
		$('#blanc').addClass("menu-item-active");

		$("#drinks-content").removeClass();
		$("#drinks-content").addClass("blanc");
	});

	$("#rose").click(function() {
		$('.drinks > button').removeClass();
		$('#rose').addClass("menu-item-active");

		$("#drinks-content").removeClass();
		$("#drinks-content").addClass("rose");
	});

	$("#champagne").click(function() {
		$('.drinks > button').removeClass();
		$('#champagne').addClass("menu-item-active");

		$("#drinks-content").removeClass();
		$("#drinks-content").addClass("champagne");
	});

	$("#rouge").click(function() {
		$('.drinks > button').removeClass();
		$('#rouge').addClass("menu-item-active");

		$("#drinks-content").removeClass();
		$("#drinks-content").addClass("rouge");
	});


	$("#beer").click(function() {
		$('.drinks > button').removeClass();
		$('#beer').addClass("menu-item-active");

		$("#drinks-content").removeClass();
		$("#drinks-content").addClass("beer");
	});	  

});
