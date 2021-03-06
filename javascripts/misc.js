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
		
		$('.speech-bubble').each(function(){ 
			var showBubble = new ScrollMagic.Scene({
				triggerElement: this,
				triggerHook: 'onEnter',
				reverse: false //keep bubble showing
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
		$('.step-title').children('span').css('background-color', paintColor); 	//set step color
		$('.process-bubble').css('fill', paintColor); //set process bubble color
		$('.arrow').find('path').css('stroke', paintColor); //set arrow color
		$('.mouse-holder').css('border-color', paintColor); //set bottom border color
		return false;
	});
	
	$('.paint-bucket.color-one').click(function(){
	    $('#contact .button').removeClass().addClass('button orange');
	});
	
	$('.paint-bucket.color-two').click(function(){
	    $('#contact .button').removeClass().addClass('button blue');
	});
	
	$('.paint-bucket.color-three').click(function(){
	    $('#contact .button').removeClass().addClass('button green');
	});
	
	$('.paint-bucket.color-four').click(function(){
	    $('#contact .button').removeClass().addClass('button black');
	});
	
	//----------Toggle hidden class for help text
	$("#mouse").click(function() {
		var nextChirp = $(".chirp:visible").next(".chirp");
		if (nextChirp.length == 0) { // wrap around to beginning
			nextChirp = $(".chirp:first");
		}
		$(".chirp").hide();
		nextChirp.show();
	});
	
});