// AI: misc javascripts I needed.

// ========== Scrollmagic and greensock code here. ==========
$(document).ready(function() {
	
	//Set variable for drop height
	dropHeight = $('#main-content').height(); 
	//console.log($('#main-content').height());
	
	//initialize controller
	var controller = new ScrollMagic.Controller();
	
	//build drop tween
	var drop = TweenMax.to("#drop", 1, {y: dropHeight, ease: Linear.easeIn});

	//build a scene for the drop
	var drop = new ScrollMagic.Scene({
		triggerElement: 'body', 
		duration:dropHeight, //duration is height of main content div
		triggerHook: 0
	})
	.setTween(drop)
	//.addIndicators({name: 'drop'})
	.setClassToggle("#drop", "show-it")
	.addTo(controller);
	
	// ========== loop through each arrow and add fade in class ==========
	$('.arrow').each(function(){
		// build a scene 
		var scene = new ScrollMagic.Scene({
			triggerElement: this,
			triggerHook: 'onLeave',
			offset:-200, //do animation this many pixels before each arrow leaves screen
			reverse: false //keep arrows showing after you've showed them
		})
		.setClassToggle(this, 'fade-in')
		.addTo(controller);
	});

	// ========== Change colors when paint buckets clicked. ==========

	$('.paint-bucket').click(function(){
		var paintColor = $(this).css('color'); 	//get paint bucket color
		//console.log(paintColor);
	    $('#puddle path').css('fill', paintColor); 	//set puddle color
		$('#page-puddle').css('border-color', paintColor); //set bottom border color
		$('#drop path').css('fill', paintColor); 	//set droplet color
		$('.logo-color').css('fill', paintColor); 	//set logo color
		$('.number-holder span').css('background-color', paintColor); 	//set step color
		$('.arrow path').css('stroke', paintColor); //set arrow color
		return false;
	});

});