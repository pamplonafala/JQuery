$(function(){
	var action = $('#action');
	
	//placeholder
	$('.placeholder').each(function(){
		var place = $(this).attr('title');
		var input = $(this);
		input
			.val(place)
			.css({"color": "#777"})
			.focusin(function(){
				input.css({"color": "#000"});
				if (input.val() == place) {
					input.val('');
				}
			})
			.focusout(function(){
				if (input.val() == '') {
					input.val(place);
					input.css({"color": "#777"});
				}
			});
	});
	
	//input 1
	$('.ev1')
		//triggers on element focus
		.focus(function(){
			action.text('Element 1 focused');
		})
		//triggers on lost focus
		.blur(function(){
			action.text('Element 1 lost focus');
		})
		//triggers when certain keys are pressed
		.keypress(function(evt){
			console.log(evt.key + ' got pressed');
		})
		//triggers when any key is pressed
		.keydown(function(evt){
			console.log(evt.key + ' is down');
		})
		//triggers when string value is changed
		.change(function(){
			console.log($(this).attr('name')+' value is "'+$(this).val()+'" now');
		})
		//triggers on key release
		.keyup(function(){
			action.text('"' + $(this).val() + '" = "next" to auto-focus input 2');
			if ($(this).val() == 'next') {
				$('.ev2').focus();
			}
		});
		
	$('.select').click(function(){
		$('.ev4').select();
		$('form').submit(()=> false);
	});
	
	$('.send').click(function(){
		$('form').submit();
	});
}); 