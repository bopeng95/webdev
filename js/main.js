$(document).ready(function() {

    /*HOME INDEX
     -------------------------------*/
    $("#down").click(function() {
        $("html, body").stop().animate({
            scrollTop: $("#work").offset().top
        }, 1000);
    });

    /*WEBSITE
     -------------------------------*/
     $(".fa-times").click(function() {
        $(".sidebar-menu").removeClass("hide-menu");
     });

     $(".toggle-menu").click(function() {
        $(".sidebar-menu").addClass("hide-menu");
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