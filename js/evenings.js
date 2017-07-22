// JavaScript Document


// screen loader
            $(window).load(function() {
                // $('body').css('overflow', 'hidden');
                $('.screen-loader').fadeOut('slow');
            });


// preload
$(document).ready(function() {
	$('#preload').css({display: 'block'});
});


// preload function
$(window).load(preLoader);
function preLoader() {
	setTimeout(function() {

		$('#preload').delay(250).fadeOut(1500);
		$('.intro-wrapper').delay(2000).css({display: 'none'}).fadeIn(3000);

	});
};


// fire home
	$("#fire-home").click(function(e) {
		e.preventDefault();
		$(".current").fadeOut("slow", function() {
			$(".upper-page").fadeIn("slow");      
			$(".current").removeClass("current");
			$(".upper-page").addClass("current");
		});
	});
	
	
// fire about
	$("#fire-about").click(function(e) {
		e.preventDefault();
		$(".current").fadeOut("slow", function() {
			$("#about").fadeIn("slow");
			$(".current").removeClass("current");
			$("#about").addClass("current");
		});
	});
	
	
// fire contact
	$("#fire-contact").click(function(e) {
		e.preventDefault();
		$(".current").fadeOut("slow", function() {
			$("#contact").fadeIn("slow");
			$(".current").removeClass("current");
			$("#contact").addClass("current");
		});
	});
	
	
// fire home mobile
	$("#fire-home-mobile").click(function(e) {
		e.preventDefault();
		$(".current").fadeOut("slow", function() {
			$(".upper-page").fadeIn("slow");      
			$(".current").removeClass("current");
			$(".upper-page").addClass("current");
		});
	});
	
	
// fire about mobile
	$("#fire-about-mobile").click(function(e) {
		e.preventDefault();
		$(".current").fadeOut("slow", function() {
			$("#about").fadeIn("slow");
			$(".current").removeClass("current");
			$("#about").addClass("current");
		});
	});
	
	
// fire contact mobile
	$("#fire-contact-mobile").click(function(e) {
		e.preventDefault();
		$(".current").fadeOut("slow", function() {
			$("#contact").fadeIn("slow");
			$(".current").removeClass("current");
			$("#contact").addClass("current");
		});
	});
	

// fire closer
	$("#fire-about-closer, #fire-contact-closer").click(function(e) {
		e.preventDefault();
		$(".current").fadeOut("slow", function() {
			$(".upper-page").fadeIn("slow");      
			$(".current").removeClass("current");
			$(".upper-page").addClass("current");
		});
	});
	
	
// menu active state
$('a.menu-state').click(function() {
    $('a.menu-state').removeClass("active");
    $(this).addClass("active");
});
	

// niceScroll
$(document).ready(function () {
    $("body").niceScroll({
       cursorborder: "1px solid #fff",
	   cursorborderradius: "0px",
	   zindex: "9999",
       cursorcolor: "#fff",
       background: "rgba(255, 255, 255, 0.1)",
       scrollspeed: "60",
       mousescrollstep: "40"
    });
});


// niceScroll || scrollbars resize
$("body").getNiceScroll().resize();


// newsletter animation
$(function(){
		   
			$("ul.button").delay(2200).animate({
			   right: 0
			}, 800);
			
			$(".newsletter-animation .newsletter-bg").delay(1400).animate({
			   height: 69,
			   top: 0
			}, 800);
			
			$("a.close").click(function(){
			$(".newsletter-animation .newsletter-bg").stop().animate({
			   height: 0,
			   top: 85
			}, 300);
				
			$("ul.button a.open").stop().animate({
			   left: 0
			}, 300);
				
			$("ul.button a.close").stop().animate({
			   left: -30
			}, 300);
			});
			
			
			$("ul.button a.open").click(function(){
			$(".newsletter-animation .newsletter-bg").stop().animate({
			   height: 69,
			   top: 0
			}, 800);
				
			$("ul.button a.open").stop().animate({
			   left: 30
			}, 300);
				
			$("ul.button a.close").stop().animate({
			   left: 0
			}, 300);
			});

});


// function for the vertical scrolling effect
$(function() {
    $('.go-under, .go-way-under, .go-way-up').bind('click',function(event){
        var $anchor = $(this);
 
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000,'easeInOutExpo');
        /*
        if you don't want to use the easing effects:
        $('html, body').stop().animate({
           scrollTop: $($anchor.attr('href')).offset().top
        }, 1000);
        */
        event.preventDefault();
    });
});


// twitter ticker
      jQuery(function($){
        $("#ticker").tweet({
          username: "enihilo",
          page: 1,
          avatar_size: 0,
          count: 20,
          loading_text: ""
        }).bind("loaded", function() {
          var ul = $(this).find(".tweet_list");
          var ticker = function() {
            setTimeout(function() {
              ul.find('li:first').animate( {marginTop: '-75px'}, 500, function() {
                $(this).detach().appendTo(ul).removeAttr('style');
              });
              ticker();
            }, 8000);
          };
          ticker();
        });
      });
	  
	  
// twitter ticker settings
$(document).ready(function(){
        $(this).find(".tweet_list").list_ticker({
                speed: 8000,
                effect: 'fade' // fade, slide
        })             
})


// mobile-detect
	var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };