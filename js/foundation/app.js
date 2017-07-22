/* Safely add your custom scripts */

(function ($, window, undefined) {
  'use strict';

  var $doc = $(document),
      Modernizr = window.Modernizr;

  $(document).ready(function() {
    $.fn.foundationAlerts           ? $doc.foundationAlerts() : null;
    $.fn.foundationButtons          ? $doc.foundationButtons() : null;
    $.fn.foundationAccordion        ? $doc.foundationAccordion() : null;
    $.fn.foundationNavigation       ? $doc.foundationNavigation() : null;
    $.fn.foundationTopBar           ? $doc.foundationTopBar() : null;
    $.fn.foundationCustomForms      ? $doc.foundationCustomForms() : null;
    $.fn.foundationMediaQueryViewer ? $doc.foundationMediaQueryViewer() : null;
    $.fn.foundationTabs             ? $doc.foundationTabs({callback : $.foundation.customForms.appendCustomMarkup}) : null;
    $.fn.foundationTooltips         ? $doc.foundationTooltips() : null;
    $.fn.foundationMagellan         ? $doc.foundationMagellan() : null;
    $.fn.foundationClearing         ? $doc.foundationClearing() : null;

    $.fn.placeholder                ? $('input, textarea').placeholder() : null;
  });

  // UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE8 SUPPORT AND ARE USING .block-grids
  // $('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'both'});
  // $('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'both'});
  // $('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'both'});
  // $('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'both'});

  // Hide address bar on mobile devices (except if #hash present, so we don't mess up deep linking).
  if (Modernizr.touch && !window.location.hash) {
    $(window).load(function () {
      setTimeout(function () {
        window.scrollTo(0, 1);
      }, 0);
    });
  }

})(jQuery, this);


/**
*
*  Custom, additional to Foundatins default
*
*/


$(document).ready(function() {



/*----------------------------------------YDCOZA----------------------------------------*/
/*    Navigation */
/*--------------------------------------------------------------------------------------*/

    $('.main.nav-bar li').hover(function() {
        $(this).addClass('hov');
    }, function() {
        $(this).removeClass('hov');
    });

    $('.main.nav-bar li').last().addClass('last');


/*----------------------------------------YDCOZA----------------------------------------*/
/*   Remove last HR in posts/archives */
/*--------------------------------------------------------------------------------------*/

    $('.post hr:last').remove();


/*----------------------------------------YDCOZA----------------------------------------*/
/*    Form Validation & Ajax submission */
/*--------------------------------------------------------------------------------------*/

if(typeof $("#contactform").validate == 'function') { //conditional
    // validate signup form on keyup and submit
  var validator = $("#contactform").validate({
    rules: {
      name: {
        required: true,
        minlength: 5
      },
      email: {
        required: true,
        email: true
      },
      subject: {
        required: true,
        minlength: 5
      },
      message: {
        required: true,
        minlength: 10
      }
    },
    messages: {
      name: {
        required: "Please enter your name",
        minlength: jQuery.format("Your name needs to be at least {0} characters")
      },
      email: {
        required: "Please enter a valid email address",
        minlength: "Please enter a valid email address"
      },
      subject: {
        required: "You need to enter a subject!",
        minlength: jQuery.format("Enter at least {0} characters")
      },
      message: {
        required: "You need to enter a message!",
        minlength: jQuery.format("Enter at least {0} characters")
      }
    },

          /*----------------------------------------YDCOZA----------------------------------------*/
          /*    Contact Form Ajax Submit After the form validates we send Ajax call & hide the form section  */
          /*--------------------------------------------------------------------------------------*/
        submitHandler: function() {

            var url = "includes/send-mail.php"; // the script where you handle the form send.
            $.ajax({
                   type: "POST",
                   url: url,
                   data: $("#contactform").serialize(), // serializes the form's elements.
                   success: function(data){
                     // alert(data); // show response from the send-mail.php.
                      $( '#contactform' ).each(function(){ // Reset the form
                          this.reset();
                      });
                      $('#hide_after').hide(); //hide the Form Section
                      // $('#show_after').show('slow'); //Show Success Message

                      // var content = $( data ).find( '#content' );
                      $( "#result" ).empty().append( data );


                      $(this).hide("slide", { direction: "right" }, 1000);

                   }
                 });
        }
  });
} //conditional

/*----------------------------------------YDCOZA----------------------------------------*/
/*    Portfolio Toggle */
/*--------------------------------------------------------------------------------------*/


  $(".toggle .txt").click(function(){
      $(".more_link i").toggleClass("icon-plus").toggleClass("icon-minus");
      $(".portfolio_toggle, .remove_on_toggle").toggle("slow");
  });


/*----------------------------------------YDCOZA----------------------------------------*/
/*    Fade in/out Image Zoom Icon & featured image */
/*--------------------------------------------------------------------------------------*/

  $(".icon-zoom-in").fadeTo(0,0);

  $(".featured_image", this).hover(function () {
      $(".icon-zoom-in" , this).stop(true).fadeTo("normal",1);
    },function () {
      $(".icon-zoom-in" , this).fadeTo("normal",0);
    });


/*----------------------------------------YDCOZA----------------------------------------*/
/*    Gmap */
/*--------------------------------------------------------------------------------------*/

    $('.map_button').click(function() {
        $('#mapsection').slideToggle();
        $('#map').toggleClass('visible');

      map = new GMaps({
        div: '#map',
        lat: 40.759032,
        lng: -79.989859,
        zoom: 16
      });
      map.drawOverlay({
        lat: map.getCenter().lat(),
        lng: map.getCenter().lng(),
        content: '<div class="overlay">the<span>nexxt</span><div class="overlay_arrow above"></div></div>',
        verticalAlign: 'top',
        horizontalAlign: 'center'
      });

    });


/*----------------------------------------YDCOZA----------------------------------------*/
/*        Prettyphoto */
/*--------------------------------------------------------------------------------------*/

      $("a[class^='lightbox']").prettyPhoto({
          theme:'dark_square',
          opacity:0.80,
          social_tools: false
      });



}); //Doc Ready ::: Don't remove
