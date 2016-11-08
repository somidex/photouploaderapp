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

function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#blah').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
}

$(window).resize(function() {
	//resize();
});

$(document).ready(function() {

 // 	var isoOptions = {
	// 	columnWidth: '.grid', 
	//     percentPosition: true,
	//     stagger: 30
	// };

 //    var $grid = $('.grid').imagesLoaded( function() {
	// 	// init Isotope after all images have loaded

	// 	$grid.isotope(isoOptions);
	// 	$('.gi-wrap').each(function(){
	// 		$(this).css({'opacity' : '0'});
	// 	});
		
	// 	$('.animated').appear(function() {
 //            var element = $(this);
 //            var animation = element.data('animation');
 //            var animationDelay = element.data('delay');
 //            if(animationDelay) {
 //              setTimeout(function(){
 //                  element.addClass( animation + " visible" );
 //                  element.removeClass('hiding');
 //              }, animationDelay);
 //            } else {
 //              element.addClass( animation + " visible" );
 //              element.removeClass('hiding');
 //            }               
 //        }, {accY: -90});


	// });

	// $('.tabs-menu a').click(function(e){
	// 	e.preventDefault();

	// 	var _href = $(this).attr('href');

	// 	$('.tabs-menu li').removeClass('active');
	// 	$(this).closest('li').addClass('active');


	// 	$('.tabs-item').css({'display' : 'none'});
	// 	$(_href).css({'display' : 'block'});

	// 	if(_href == '#gallery') {
			
	// 		$grid.isotope(isoOptions);

	// 	}
	// });


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

            	$grid.isotope( 'appended', elems );
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

	$("#imgInp").change(function(){
        readURL(this);
    });

    // $('.contest-form').submit(function(e){
    // 	e.preventDefault();
    //     $('.input-wrap').not('.address-field, .captionfield').addClass('error');
    //     isvalidate = false;

    //     if( IsEmail($('#account-email').val() )) {
    //         $('#account-email').closest('.input-wrap').removeClass('error');
    //         isvalidate = true;
    //     } else {
    //         isvalidate = false;
    //     }

    //     if( !$('#first-name').val() == '') {
    //         $('#first-name').closest('.input-wrap').removeClass('error');
    //         isvalidate = true;
    //     } else {
    //         isvalidate = false;
    //     }

    //     if(!$('#imgInp').val() == '') {
    //     	$('#imgInp').closest('.input-wrap').removeClass('error');
    //     	isvalidate = true;
    //     } else {
    //     	isvalidate = false;
    //     }


    //     if( $('#contact-num').val() != '' && $('#contact-num').val().length == 11 ){
    //         $('#contact-num').closest('.input-wrap').removeClass('error');
    //         isvalidate = true;
    //     } else {
    //         isvalidate = false;
    //     }

    //     if( !$('#imgInp').val() == '' && !$('#contact-num').val() == '' && !$('#first-name').val() == '' && IsEmail($('#account-email').val()) &&  isvalidate == true) {
    //     	console.log('submit');
    //     	$('.popup-wrap').addClass('active');
    //     } else {
    //         e.preventDefault();
    //     }
    // });

    $('.close-text').click(function(){
    	$('.popup-wrap').removeClass('active');
    	$('#gallery-menu').click();
    	$('.tabs-menu li:first-child').remove();
    });
	
	//resize();
});

$(window).load(function() {
	//resize();
});

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#sw-item').attr('src', e.target.result).css({'display' : 'block'});
            $('.form-wrapper textarea').focus();
        }
        
        reader.readAsDataURL(input.files[0]);
    }
}



// preloader once done
// Pace.on('done', function() {
// 	// totally hide the preloader especially for IE
// 	setTimeout(function() {
// 		$('.pace-inactive').hide();
// 	}, 500);
// });
