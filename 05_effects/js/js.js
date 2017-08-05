$(function(){
	var action = $('#action');
	var button = $(':button');
	
	$('.ev1').click(function(){
		//action.hide('3000');
		//action.show('3000');
		action.toggle('3000');
	});
	
	$('.ev2').click(function(){
		// action.fadeOut('3000');
		// action.fadeIn('3000');
		action.fadeToggle('3000');
	})
	
	$('.ev3').click(function(){
		action.fadeTo('slow', 0, function() {
			action.fadeTo('slow', 1);
		});
	})
}); 