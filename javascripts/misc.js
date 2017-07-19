// AI: misc javascripts I needed.

$(document).ready(function() {
	
	setTimeout(function(){
		var dropHeight = $('#main-content').outerHeight(true); //get height the drop has to fall
		
		var controller = new ScrollMagic.Controller(); //initialize controller
		
		var dropTween = TweenMax.to("#drop", 1, {y: dropHeight, ease: Linear.easeIn}); //build drop tween

		var dropScroll = new ScrollMagic.Scene({
			triggerElement: 'body', 
			duration: dropHeight, //duration is height of main content div
			triggerHook: 0
		})
		.setTween(dropTween)
		.setClassToggle("#drop", "show-it")
		.addTo(controller);
		
		$('.arrow').each(function(){ //loop through each arrow and add fade in class
			var showArrow = new ScrollMagic.Scene({
				triggerElement: this,
				triggerHook: 'onLeave',
				offset:-200, //start animation this many pixels before each arrow leaves the screen
				reverse: false //keep arrows showing after you've showed them
			})
			.setClassToggle(this, 'fade-in')
			.addTo(controller);
		});
		
	}, 200); //wait for page/js to finish loading before calculating height.
	
	$('.paint-bucket').click(function(){ //change colors when paint buckets clicked.
		var paintColor = $(this).css('color'); 	//get paint bucket color
		$('#puddle').children('path').css('fill', paintColor); //set puddle color
		$('#page-puddle').css('border-color', paintColor); //set bottom border color
		$('#drop').children('path').css('fill', paintColor); 	//set droplet color
		$('.logo-color').css('fill', paintColor); 	//set logo color
		$('.number-holder').children('span').css('background-color', paintColor); 	//set step color
		$('.arrow').find('path').css('stroke', paintColor); //set arrow color
		return false;
	});
	
});