$(document).ready(function() {

    $("#down").click(function() {
        $("html, body").stop().animate({
            scrollTop: $("#work").offset().top
        }, 1000);
    });

    /*UP ARROW
     -------------------------------*/
    $(window).scroll(function() {
    if ($(this).scrollTop()) {
        $("#arrow").fadeIn();
    } else {
        $("#arrow").fadeOut();
    }
    });

    $("#arrow").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 700);
    }); 
    /*-------------------------------*/
});