/**
 * flatSlider
 * parallax
 * flatCounter
 * popupGallery
 * popupVideo
 * btnQuantity
 * tabs
 */

 (function ($) {
    "use strict";
  
    var isMobile = {
      Android: function () {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
      },
      any: function () {
        return (
          isMobile.Android() ||
          isMobile.BlackBerry() ||
          isMobile.iOS() ||
          isMobile.Opera() ||
          isMobile.Windows()
        );
      },
    };  

    var parallax = function () {
      if ($().parallax && isMobile.any() == null) {
        $(".parallax1").parallax("50%", 0.2);
      }
    };

    var flatCounter = function () {
      if ($(document.body).hasClass("counter-scroll")) {
        var a = 0;
        $(window).scroll(function () {
          var oTop = $(".box").offset().top - window.innerHeight;
          if (a == 0 && $(window).scrollTop() > oTop) {
            if ($().countTo) {
              $(".box")
                .find(".number")
                .each(function () {
                  var to = $(this).data("to"),
                    speed = $(this).data("speed");
  
                  $(this).countTo({
                    to: to,
                    speed: speed,
                  });
                });
            }
            a = 1;
          }
        });
      }
    };
  
    var popupGallery = function () {
      if ($().magnificPopup) {
        $(".popup-gallery").magnificPopup({
          type: "image",
          tLoading: "Loading image #%curr%...",
          removalDelay: 600,
          mainClass: "my-mfp-slide-bottom",
          gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1],
          },
          image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
          },
        });
      }
    };

    var popupVideo = function () {
      if ($().magnificPopup) {
        $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
          type: "iframe",
          mainClass: "mfp-fade",
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false,
        });
      }
    };
  
  
  var btnQuantity = function () {
      $('.minus-btn').on('click', function(e) {
          e.preventDefault();
          var $this = $(this);
          var $input = $this.closest('div').find('input');
          var value = parseInt($input.val());
      
          if (value > 1) {
              value = value - 1;
          } 
      
      $input.val(value);
      
      });
      
      $('.plus-btn').on('click', function(e) {
          e.preventDefault();
          var $this = $(this);
          var $input = $this.closest('div').find('input');
          var value = parseInt($input.val());
      
          if (value > 0) {
              value = value + 1;
          } 
      
          $input.val(value);
      });
  }
  
    var tabs = function(){
      $('.flat-tabs').each(function(){
          $(this).find('.content-tab').children().hide();
          $(this).find('.content-tab').children().first().show();
          $(this).find('.menu-tab').children('li').on('click',function(){
              var liActive = $(this).index();
              var contentActive=$(this).siblings().removeClass('active').parents('.flat-tabs').find('.content-tab').children().eq(liActive);
              contentActive.addClass('active').fadeIn("slow");
              contentActive.siblings().removeClass('active');
              $(this).addClass('active').parents('.flat-tabs').find('.content-tab').children().eq(liActive).siblings().hide();
          });
      });
  };


  
    $(function () {
      flatCounter();
      popupGallery();
      popupVideo();
      btnQuantity();
      tabs();
      new WOW().init();
      parallax();
    });
  })(jQuery);