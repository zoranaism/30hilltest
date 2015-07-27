$( document ).ready( function( ) {
    $('.list-group-item').on('click', function(){
	   $(this).addClass('active').siblings().removeClass('active');
	});
	

	$('#main-tabs li').on('mouseover', function(){
	   $(this).addClass('active').siblings().removeClass('active');
	}).on('mouseout', function(){
	   $(this).removeClass('active');
	});

	$('#main-tabs li a, #slide-content').on('mouseout', function(){
	   $('#slide-content').stop().animate({"left":"-200px"}, 200, "linear");
	}).on('mouseover', function(){
	   $('#slide-content').stop().animate({"left":"100px"}, 200, "linear");
	});

	$('#main-tabs > li > a').hover( function(){
      $(this).tab('show');
    });

	$('#element').popover('show');

});

