$(document).ready(function(){
$('.mobile-nav-btn').click(function(e){
		 $(".mobile-nav").toggleClass("show");

		// this prevents the browser from doing the default link action
		e.preventDefault();

	});

	var $window = $(window);
	  $window.on('resize', function (){
        if ($window.width() < 800)
        {
            $('.mobile-nav').show();
        }
    });


	  // added these two lines of code to set page load default
	$("#dinner-content").addClass("main-courses");
	$("#sub-menu").addClass("dinner");

	$("#dinner").click(function() {
		$("#sub-menu").removeClass();
		$("#drinks-content").removeClass();
		$("#sub-menu").addClass("dinner");
				// added this to always show main courses on click of dinner
		$("#dinner-content").addClass("main-courses");
	});

	$("#drinks").click(function() {
		$("#sub-menu").removeClass();
		$("#dinner-content").removeClass();
		$("#sub-menu").addClass("drinks");
		// added this to always show old world drinks on click of drinks
		$("#drinks-content").addClass("old-world");
	});

	$("#appetizers").click(function() {
		$("#dinner-content").removeClass();
		$("#dinner-content").addClass("appetizers");
	});

	$("#veg-specials").click(function() {
		$("#dinner-content").removeClass();
		$("#dinner-content").addClass("veg-specials");
	});

	$("#main-courses").click(function() {
		$("#dinner-content").removeClass();
		$("#dinner-content").addClass("main-courses");
	});

	$("#desserts").click(function() {
		$("#dinner-content").removeClass();
		$("#dinner-content").addClass("desserts");
	});

	$("#kids-menu").click(function() {
		$("#dinner-content").removeClass();
		$("#dinner-content").addClass("kids-menu");
	});



	$("#old-world").click(function() {
		$("#drinks-content").removeClass();
		$("#drinks-content").addClass("old-world");
	});

	$("#new-world").click(function() {
		$("#drinks-content").removeClass();
		$("#drinks-content").addClass("new-world");
	});

	$("#beer").click(function() {
		$("#drinks-content").removeClass();
		$("#drinks-content").addClass("beer");
	});	  

});