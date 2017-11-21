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

	$("#anim").on('click', function() {
		$('#box').animate({left: '40px'});
	});

	$("#userpass").on('click', function() {
		if($("#user").val() === '' && $("#pass").val() !== '') {
			$("#user").css("background-color", "yellow").focus();
			$("#pass").css("background-color", "white").focus();
		}
		else if($("#pass").val() === '' && $("#user").val() !== '') {
			$("#pass").css("background-color", "yellow").focus();
			$("#user").css("background-color", "white").focus();
		}
		else if($("#user").val() === '' && $("#user").val() === '') {
			$("#user").css("background-color", "yellow").focus();
			$("#pass").css("background-color", "yellow").focus();
		}
		else {
			$("#user").css("background-color", "white").focus();
			$("#pass").css("background-color", "white").focus();
			$("#demo").html("<p>username: " + $("#user").val() + "</p><p>Password: " + $("#pass").val() + "</p>");
		}
	});
});