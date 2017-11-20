$(document).ready(function(){

	$("#first").on('click', function() {
		$("#special").css("color", "green");
		$(".highlight").css("background-color", "yellow");
		$("p").each(function() {
			$(this).css("color", "red");
			$(this).css("background-color", "lightgray");
			$(this).css("border", "1px solid black");
		})
	});

	$("#show").on('click', function() {
		$('#image').show();
	});
	$("#hide").on('click', function() {
		$('#image').hide();
	});
	$("#fadeout").on('click', function() {
		$('#image').fadeOut("slow");
	});


	
});