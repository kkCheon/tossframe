$(document).ready(function(){
    
    $(".nav-menu-btn-mb").click(function(){
        $('#nav-icon4').toggleClass('open');
        $(".nav-menu-dropdown-mb").slideToggle("fast");
        $("nav").toggleClass("box-shadow");
        $(".nav-menu-cover").fadeToggle();
        $("body").toggleClass("prevent-scroll");
        
    });
    $(".nav-menu-cover").click(function(){
      $(".nav-menu-btn-mb").click();

    })

    $(".company-info").click(function(){
        $(".company-info-contents").slideToggle("slow");
    });

    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 500);
        return false;
    });
    // 네비게이션 show & disappear
    // var previousScroll = 0;
    // $(window).scroll(function(event){
    //    var scroll = $(this).scrollTop();
    //    if (scroll > previousScroll){
    //        $("header").fadeOut();
    //    } else {
    //       $("header").fadeIn();
    //    }
    //    previousScroll = scroll;
    // });
});