(function ($) {
	
	$("#tabs" ).tabs( { active: 0 } );	
	
	$(".accordion").accordion({ header: ".click", collapsible: true, active: false });
	
	// -------------
	// Menu mobile
	
	$(".menu_mobile").click(function() {
		$("header .first_fold nav ul").toggleClass("open");
	});
	
	// -------------
	// Dialogs - modals - alpec
	$("section.grupos_apoyo .second_fold .card a.alpec").click(function() {
		$(".third_fold #alpec").toggleClass("open");
		$(".third_fold #clima").removeClass("open");
		$(".third_fold #genero").removeClass("open");
		$(".third_fold #adulto").removeClass("open");
	});
	$(".third_fold #alpec img").click(function() {
		$(".third_fold #alpec").toggleClass("open");
	});
	
	// -------------
	// Dialogs - modals - clima
	$("section.grupos_apoyo .second_fold .card a.clima").click(function() {
		$(".third_fold #clima").toggleClass("open");
		$(".third_fold #alpec").removeClass("open");
		$(".third_fold #genero").removeClass("open");
		$(".third_fold #adulto").removeClass("open");
	});
	$(".third_fold #clima img").click(function() {
		$(".third_fold #clima").toggleClass("open");
	});
	
	// -------------
	// Dialogs - modals - genero
	$("section.grupos_apoyo .second_fold .card a.genero").click(function() {
		$(".third_fold #genero").toggleClass("open");
		$(".third_fold #clima").removeClass("open");
		$(".third_fold #alpec").removeClass("open");
		$(".third_fold #adulto").removeClass("open");
	});
	$(".third_fold #genero img").click(function() {
		$(".third_fold #genero").toggleClass("open");
	});
	
	// -------------
	// Dialogs - modals - adulto
	$("section.grupos_apoyo .second_fold .card a.adulto").click(function() {
		$(".third_fold #adulto").toggleClass("open");
		$(".third_fold #clima").removeClass("open");
		$(".third_fold #genero").removeClass("open");
		$(".third_fold #alpec").removeClass("open");
	});
	$(".third_fold #adulto img").click(function() {
		$(".third_fold #adulto").toggleClass("open");
	});
	
})(jQuery);

