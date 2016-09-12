$(document).ready(function() {
    $(".scrolled").delay(200).fadeIn(800);
    $(".section-header").delay(200).animate({
        opacity:1
    },400, function(){});

    $(window).scroll(function (e) {
        var fromTopWindow = $(this).scrollTop();
        if(fromTopWindow <= 800) {
            $(".scrolled").css('display','block');
            $(".scrolled").css('opacity', (480 /fromTopWindow));
        }
        else if(fromTopWindow > 800 && fromTopWindow < 1050) {
            $(".scrolled").css('display','block');
            $(".scrolled").css('opacity', .6);
        }
        else if(fromTopWindow > 1051) {
            $(".scrolled").css('display','none');
            $(".scrolled").css('opacity', 0);
        }
    });
    $(".clickit").click(function() {
        if($("#myModal").is(':visible')) {
            $("#myModal").hide();
        }
        else {
             $("#myModal").show(); 
        }
    });
    $(window).click(function() {
        var modal = $("#myModal");
        if(event.target == modal) {
            $("#myModal").css("display","none");
        }
    });
    $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
    };
    $(window).scroll(function(event) {
        if($(".headers").visible(true)) {
            $(".headers").addClass("fadeInRight");
        }
        if($(".style-font").visible(true)) {
            $(".style-font").addClass("fadeInRight");
        }
        if($(".style-font-p").visible(true)) {
            $(".style-font-p").addClass("fadeInRight");
        }
    });
});