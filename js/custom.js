//get all elements with class and get the biggest box
function get_biggest(elements){
	var biggest_height = 0;
	for ( var i = 0; i < elements.length ; i++ ){
		var element_height = $(elements[i]).height();
		//compare the height, if bigger, assign to variable
		if(element_height > biggest_height ) biggest_height = element_height;
	}
	return biggest_height;
}

function resize() {
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();

	// STICKY FOOTER
	var headerHeight = $('header').outerHeight();
	var footerHeight = $('footer').outerHeight();
	var footerTop = (footerHeight) * -1
	$('footer').css({marginTop: footerTop});
	$('#main-wrapper').css({paddingBottom: footerHeight});

	// for vertically middle content
	$('.bp-middle').each(function() {
		var bpMiddleHeight = $(this).outerHeight() / 2 * - 1;
		$(this).css({marginTop: bpMiddleHeight});
	});

	// for equalizer
	$('.classname').css({minHeight: 0});
  var ClassName = get_biggest($('.classname'));
  $('.classname').css({minHeight: ClassName});
}

$(window).resize(function() {
	resize();
});

$(document).ready(function() {

	// var $grid = $('.grid').isotope({
 //      columnWidth: '.grid-sizer', 
 //      percentPosition: true,
 //      stagger: 30
 //    });

 	var isoOptions = {
		columnWidth: '.grid-sizer', 
	    percentPosition: true,
	    stagger: 30
	};

    var $grid = $('.grid').imagesLoaded( function() {
		// init Isotope after all images have loaded

		$grid.isotope(isoOptions);
		$('.gi-wrap').each(function(){
			$(this).css({'opacity' : '0'});
		});
		
		$('.animated').appear(function() {
            var element = $(this);
            var animation = element.data('animation');
            var animationDelay = element.data('delay');
            if(animationDelay) {
              setTimeout(function(){
                  element.addClass( animation + " visible" );
                  element.removeClass('hiding');
              }, animationDelay);
            } else {
              element.addClass( animation + " visible" );
              element.removeClass('hiding');
            }               
        }, {accY: -90});


	});


	$('.load-more-btn').click(function(e){
		e.preventDefault();
		$('.wavy-loader').fadeIn(300);
		$(this).css({'display' : 'none'});

        $.ajax({
            url: 'ajax-item.html',
            type: 'POST',
            dataType: 'html',
            cache: true

        })

        .done(function( getContent) {                
            $('.ajax-container').html( getContent);

            if($('.ajax-container').children().length > 0) {
            	var elems = $('.ajax-container').children();
            	$grid.append( elems );

            	$grid.isotope( 'prepended', elems );
            	$grid.isotope(isoOptions);
            	$('.wavy-loader').hide(300);
            	$('.load-more-btn').css({'display' : 'inline-block'});
            }
        })

        .fail(function(request, status, error) {
            
            for(var key in request) {
                var value = request[key];
            }
        });
	});
	
	resize();
});

$(window).load(function() {
	resize();
});

// preloader once done
// Pace.on('done', function() {
// 	// totally hide the preloader especially for IE
// 	setTimeout(function() {
// 		$('.pace-inactive').hide();
// 	}, 500);
// });
