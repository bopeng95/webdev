$(document).ready(function(){

	$('.title').hide().fadeIn(900);
	$('nav').hide().fadeIn(900);

	$("a").eq(0).on('click', function() {
		$("#content").empty();
		let $vid = "<div class='vid-contain'><div class='vid-wrap'><iframe width='560' height='315' src='https://www.youtube.com/embed/IB4JJw28C4Q' frameborder='0' allowfullscreen></iframe></div></div>"
		$("#content").html($vid);
	});

	$("a").eq(1).on('click', function() {
		$("#content").empty();
		let $foto = "<div class='content-container'><section id='foto1'></section><section id='foto2'></section><section id='foto3'></section></div>"
		$("#content").html($foto);
	});

	$("a").eq(2).on('click', function() {
		$("#content").empty();
		let $txt = "<div class='alpha-font a5-txt'><p>This is my Assignment 5 website</p><p>This is all done using JQuery</p></div>"
		$("#content").html($txt);
	});

});

		