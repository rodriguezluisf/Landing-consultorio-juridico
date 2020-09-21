(function ($) {
	
	$("#tabs" ).tabs( { active: 0 } );	
	
	$("#accordion").accordion({ header: ".click", collapsible: true, active: false });
	
	// -------------
	// Menu mobile
	
	$(".menu_mobile").click(function() {
		$("header .first_fold nav ul").toggleClass("open");
	});
	
})(jQuery);

