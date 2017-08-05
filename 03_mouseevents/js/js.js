$(function(){
	var action = $('#action');
	var description = $('#description');
	
	//click
	$('#ev1').click(function(){
		$(this).css({'background': '#ccc'});
		action.text('Click');
		description.text('Triggered on mouse click');
	}).mouseout(function(){
		$(this).css({'background': '#000'});
	});
	
	//dblclick
	$('#ev2').dblclick(function(){
		$(this).css({'background': '#ccc'});
		action.text('Double click');
		description.text('Triggered on mouse double click');
	}).mouseout(function(){
		$(this).css({'background': '#000'});
	});
	
	//focusin and focusout
	$('#ev3').focusin(function(){
		$(this).css({'background': '#ccc'});
		action.text('Focus IN');
		description.text('Triggered on focus and lostfocus');
	}).focusout(function(){
		$(this).css({'background': '#000'});
		action.text('Focus OUT');
	});
	
	//hover
	$('#ev4').hover(function(){
		$(this).css({'background': '#ccc'});
		action.text('Mouse hover');
		description.text('Triggered when mouse enters element');
	}).mouseout(function(){
		$(this).css({'background': '#000'});
	});
	
	//mousedown and mouseup
	$('#ev5').mousedown(function(){
		$(this).css({'background': '#ccc'});
		action.text('Mouse pressed');
		description.text('Triggered on mouse press and release');
	}).mouseup(function(){
		$(this).css({'background': '#000'});
		action.text('Mouse released');
	});
	
	//mouseenter and mouseout
	$('#ev6').mouseenter(function(){
		$(this).css({'background': '#ccc'});
		action.text('Mouse IN');
		description.text('Triggered when mouse gets inside or outside the element');
	}).mouseout(function(){
		$(this).css({'background': '#000'});
		action.text('Mouse OUT');
	});

	//mouseover and mouseleave
	$('#ev7').mouseover(function(){
		$(this).css({'background': '#ccc'});
		action.text('Mouse over');
		description.text('Triggered when mouse is over ELEMENT (not child)');
	}).mouseleave(function(){
		$(this).css({'background': '#000'});
		action.text('Mouse leave');
	});

	//mousemove
	$('#ev8').mousemove(function(move){
		var moveX = move.pageX, moveY = move.pageY;
		$(this).css({'background': '#ccc'});
		action.text('Mouse X:' + moveX + ', Y:' + moveY);
		description.text('Triggered when mouse is moving inside element');
	}).mouseleave(function(){
		$(this).css({'background': '#000'});
		action.text('Mouse leave');
	});

}); 