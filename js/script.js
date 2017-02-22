$(document).ready(function(){
$('.mobile-nav-btn').click(function(e){
		 $(".mobile-nav").toggleClass("show");

		// this prevents the browser from doing the default link action
		e.preventDefault();

	});

	var $window = $(window);
	  $window.on('resize', function (){
        if ($window.width() < 600)
        {
            $('.mobile-nav').show();
        }
    });

});