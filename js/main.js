$(document).on('ready', function () {
        $(".slider").slick({
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [{
            	breakpoint: 992,
            	settings: {
            		slidesToShow: 2,
            		slidesToScroll: 2,
            		infinite: true,
            	}
            }] 
        });
    });

$('.arrow').click(function() {
     $("html, body").animate({ scrollTop: 0 }, "300");
     return false;
  });

function header(){
	var p = document.getElementById("header");
	p.innerHTML = '';
}

$(document).ready(function() {
	$(document).delegate('.open', 'click', function(event){
		$(this).addClass('oppenned');
		event.stopPropagation();
	})
	$(document).delegate('body', 'click', function(event) {
		$('.open').removeClass('oppenned');
	})
	$(document).delegate('.cls', 'click', function(event){
		$('.open').removeClass('oppenned');
		event.stopPropagation();
	});
});

jQuery(function(){

	if(!$.fn.imagezoomsl){
	
		$('.msg').show();
		return;
	}
     else $('.msg').hide();

	 
	$('.my-foto').imagezoomsl({ 

		 zoomrange: [1, 12],
		 zoomstart: 4,
		 innerzoom: true,
		 magnifierborder: "none"	
	});  
});