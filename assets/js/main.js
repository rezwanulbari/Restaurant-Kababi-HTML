/**
  * Retina Logos
  * Header Fixed
  * Mobile Navigation
  * Mobile Navigation
  * ajaxContactForm
  * popup thanks
  * Scroll to Top  
  * ajaxSubscribe
  * removePreloader
*/

;(function($) {
    "use strict";

    var retinaLogos = function() {
        var retina = window.devicePixelRatio > 1 ? true : false;
          if(retina) {
              $('#site-logo').find('img').attr( {src:'assets/img/logo/logo@2x.png',width:'155',height:'44'} );    
          }
          if(retina) {
            $('#site-logo.site-logo2').find('img').attr( {src:'assets/img/logo/logo3@2x.png',width:'155',height:'44'} ); 
          }
          if(retina) {
            $('#site-logo').find('img').attr( {src:'assets/img/logo/logo@2x.png',width:'155',height:'44'} );    
        }
        if(retina) {
            $('#site-logo2').find('img').attr( {src:'assets/img/logo/logo@2x.png',width:'155',height:'44'} );    
        }
        if(retina) {
            $('#site-logo-2').find('img').attr( {src:'assets/img/logo/logo2@2x.png',width:'298',height:'80'} );    
        }
        if(retina) {
            $('#site-logo3').find('img').attr( {src:'assets/img/logo/logo@2x.png',width:'158',height:'45'} );    
        }
        if(retina) {
            $('#site-logo4').find('img').attr( {src:'assets/img/logo/logo3@2x.png',width:'158',height:'45'} );    
        }
      };

      var headerFixed = function() {
        if ( $('body').hasClass('header-fixed') ) {
            var nav = $('#site-header');
            if ( nav.length ) {
                var offsetTop = nav.offset().top,
                    injectSpace = $('<div />', {
                    }).insertAfter(nav);
                    $(window).on('load scroll', function(){
                        if ( $(window).scrollTop() > 500 ) {
                            nav.addClass('is-fixed');
                            injectSpace.show();
                        } else {
                            nav.removeClass('is-fixed');
                            injectSpace.hide();
                        }

                        if ( $(window).scrollTop() > 500 ) { 
                            nav.addClass('is-small');
                        } else {
                            nav.removeClass('is-small');
                        }
                    })
            }
        }     
    };

    var headerFixed2 = function() {
        if ( $('body').hasClass('header-fixed2') ) {
            var nav = $('.site-header-inner-page');
            if ( nav.length ) {
                var offsetTop = nav.offset().top,
                // headerHeight = nav.height(),
                    injectSpace = $('<div />', {
                        // height: headerHeight
                    }).insertAfter(nav);
                    $(window).on('load scroll', function(){
                        if ( $(window).scrollTop() > 500 ) {
                            nav.addClass('is-fixed');
                            injectSpace.show();
                        } else {
                            nav.removeClass('is-fixed');
                            injectSpace.hide();
                        }

                        if ( $(window).scrollTop() > 500 ) { 
                            nav.addClass('is-small');
                        } else {
                            nav.removeClass('is-small');
                        }
                    })
            }
        }     
    };

        var mobileNav = function () {
            var mobile = window.matchMedia("(max-width: 991px)");
            var wrapMenu = $("#site-header-inner .wrap-inner");
            var navExtw = $(".nav-extend.active");
            var navExt = $(".nav-extend.active").children();
        
            responsivemenu(mobile);
        
            mobile.addListener(responsivemenu);
        
            function responsivemenu(mobile) {
              if (mobile.matches) {
                $("#main-nav")
                  .attr("id", "main-nav-mobi")
                  .appendTo("#site-header")
                  .hide()
                  .children(".menu")
                  .append(navExt)
                  .find("li:has(ul)")
                  .children("ul")
                  .removeAttr("style")
                  .hide()
                  .before('<span class="arrow"></span>');
              } else {
                $("#main-nav-mobi")
                  .attr("id", "main-nav")
                  .removeAttr("style")
                  .prependTo(wrapMenu)
                  .find(".ext")
                  .appendTo(navExtw)
                  .parent()
                  .siblings("#main-nav")
                  .find(".sub-menu")
                  .removeAttr("style")
                  .prev()
                  .remove();
        
                $(".mobile-button").removeClass("active");
                $(".mobile-button-style2").removeClass("active");
                $(".sub-menu").css({ display: "block" });
              }
            }
            $(document).on("click", ".mobile-button", function () {
              $(this).toggleClass("active");
              $("#main-nav-mobi").slideToggle();
            });
            $(document).on("click", "#main-nav-mobi .arrow", function () {
              $(this).toggleClass("active").next().slideToggle();
            });
          };

    var ajaxContactForm = function() {  
        $('#contactform,#commentform').each(function() {
            $(this).validate({
                submitHandler: function( form ) {
                    var $form = $(form),
                        str = $form.serialize(),
                        loading = $('<div />', { 'class': 'loading' });

                    $.ajax({
                        type: "POST",
                        url:  $form.attr('action'),
                        data: str,
                        beforeSend: function () {
                            $form.find('.form-submit,comment-form').append(loading);
                        },
                        success: function( msg ) {
                            var result, cls;                            
                            if ( msg === 'Success' ) {                                
                                result = 'Message Sent Successfully To Email Administrator. ( You can change the email management a very easy way to get the message of customers in the user manual )';
                                cls = 'msg-success';
                            } else {
                                result = 'Error sending email.';
                                cls = 'msg-error';
                            }

                            $form.prepend(
                                $('<div />', {
                                    'class': 'flat-alert ' + cls,
                                    'text' : result
                                }).append(
                                    $('<a class="close" href="#"><i class="fas fa-times"></i></a>')
                                )
                            );

                            $form.find(':input').not('.submit').val('');
                        },
                        complete: function (xhr, status, error_thrown) {
                            $form.find('.loading').remove();
                        }
                         
                    });
                }
            });
        }); // each contactform
    };
    
    var alertBox = function() {
        $(document).on('click', '.close', function(e) {
            $(this).closest('.flat-alert').remove();
            e.preventDefault();
        })     

    };

    // popup thanks
    var popup = function() {
        $(".tf-button-submit").on("click", function () {
               $( ".tf-button-submit" ).first().submit();
            $(".popup-thanks").addClass("active");
        });
    
        $(".popup-thanks-overlay").on(
            "click",
            function (e) {
                $(".popup-thanks").removeClass("active");
                e.preventDefault();
            }
        );
    };

    var Preloader = function () {
        setTimeout(function() {  
            $("#loading-overlay").fadeOut('slow',function(){
                $(this).remove(); 
            });
        }, 500);
    };

    // Scroll Top
    var scrollToTop = function() {
        $(window).scroll(function() {
            if ( $(this).scrollTop() > 300 ) {
                $('#scroll-top').addClass('show');
            } else {
                $('#scroll-top').removeClass('show');
            }
        });

        $('#scroll-top').on('click', function() {
            $('html, body').animate({ scrollTop: 0 } , 'easeInOutExpo');
        return false;
        });
    }
        var goTop = function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 800) {
                $('.go-top').addClass('show');
            } else {
                $('.go-top').removeClass('show');
            }
        });

        $('.go-top').on('click', function () {
            $("html, body").animate({ scrollTop: 0 }, 1000, 'easeInOutExpo');
            return false;
        });
    };

    var ajaxSubscribe = {
        obj: {
            subscribeEmail    : $('#subscribe-email'),
            subscribeButton   : $('#subscribe-button'),
            subscribeMsg      : $('#subscribe-msg'),
            subscribeContent  : $("#subscribe-content"),
            dataMailchimp     : $('#subscribe-form').attr('data-mailchimp'),
            success_message   : '<div class="notification_ok">Thank you for joining our mailing list! Please check your email for a confirmation link.</div>',
            failure_message   : '<div class="notification_error">Error! <strong>There was a problem processing your submission.</strong></div>',
            noticeError       : '<div class="notification_error">{msg}</div>',
            noticeInfo        : '<div class="notification_error">{msg}</div>',
            basicAction       : 'mail/subscribe.php',
            mailChimpAction   : 'mail/subscribe-mailchimp.php'
        },

        eventLoad: function() {
            var objUse = ajaxSubscribe.obj;

            $(objUse.subscribeButton).on('click', function() {
                if ( window.ajaxCalling ) return;
                var isMailchimp = objUse.dataMailchimp === 'true';

                if ( isMailchimp ) {
                    ajaxSubscribe.ajaxCall(objUse.mailChimpAction);
                } else {
                    ajaxSubscribe.ajaxCall(objUse.basicAction);
                }
            });
        },

        ajaxCall: function (action) {
            window.ajaxCalling = true;
            var objUse = ajaxSubscribe.obj;
            var messageDiv = objUse.subscribeMsg.html('').hide();
            $.ajax({
                url: action,
                type: 'POST',
                dataType: 'json',
                data: {
                   subscribeEmail: objUse.subscribeEmail.val()
                },
                success: function (responseData, textStatus, jqXHR) {
                    if ( responseData.status ) {
                        objUse.subscribeContent.fadeOut(500, function () {
                            messageDiv.html(objUse.success_message).fadeIn(500);
                        });
                    } else {
                        switch (responseData.msg) {
                            case "email-required":
                                messageDiv.html(objUse.noticeError.replace('{msg}','Error! <strong>Email is required.</strong>'));
                                break;
                            case "email-err":
                                messageDiv.html(objUse.noticeError.replace('{msg}','Error! <strong>Email invalid.</strong>'));
                                break;
                            case "duplicate":
                                messageDiv.html(objUse.noticeError.replace('{msg}','Error! <strong>Email is duplicate.</strong>'));
                                break;
                            case "filewrite":
                                messageDiv.html(objUse.noticeInfo.replace('{msg}','Error! <strong>Mail list file is open.</strong>'));
                                break;
                            case "undefined":
                                messageDiv.html(objUse.noticeInfo.replace('{msg}','Error! <strong>undefined error.</strong>'));
                                break;
                            case "api-error":
                                objUse.subscribeContent.fadeOut(500, function () {
                                    messageDiv.html(objUse.failure_message);
                                });
                        }
                        messageDiv.fadeIn(500);
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert('Connection error');
                },
                complete: function (data) {
                    window.ajaxCalling = false;
                }
            });
        }
        
    };

    // Dom Ready
    $(function() {
        headerFixed();  
        headerFixed2();
        mobileNav();
        ajaxSubscribe.eventLoad(); 
        ajaxContactForm();
        alertBox();
        popup();
        scrollToTop();
        $(window).on('load resize', function(){
            retinaLogos();
        });
        Preloader();
    });

})(jQuery);