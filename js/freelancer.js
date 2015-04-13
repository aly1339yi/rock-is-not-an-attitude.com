

$(document).ready(function() {

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $('.page-scroll a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top-$('nav').outerHeight()
            }, 800, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    // Floating label headings for the contact form
    $(function() {
        $("body").on("input propertychange", ".floating-label-form-group", function(e) {
            $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
        }).on("focus", ".floating-label-form-group", function() {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function() {
            $(this).removeClass("floating-label-form-group-with-focus");
        });
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar',
        offset: 80
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });



    $("#rsStills").royalSlider({
        addActiveClass: true,
        controlNavigation: 'none',
        arrowsNavHideOnTouch: true,
        autoScaleSlider: true, 
        autoScaleSliderHeight: 340,
        loop: true,
        fadeinLoadedSlide: false,
        keyboardNavEnabled: true,
        visibleNearby: {
          enabled: true,
          centerArea: 0.7,
          center: true,
          breakpoint: 768,
          breakpointCenterArea: 0.5,
          navigateByCenterClick: true
        }

    });

    $("#trailer").fitVids();




    $('#screenings table').on('click','tr', function() {
        var url = $(this).data('url');
        window.open(
          url,
          '_blank'
        );
    });














});  