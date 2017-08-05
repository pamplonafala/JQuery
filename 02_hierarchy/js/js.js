$(function(){
	//object selection
	$('h2').css('margin', '0px');
	$('p').css({margin: '0px', color:'blue'});
	$('.body').css({'margin-bottom': '20px', background: '#aaa'});

	//object child selection
	$('.body span')
		.hide()
		.delay(1000)
		.fadeIn('slow');

	$('.body h2')
		.css({'font-size': '15px', color:'red'})
		.hide()
		.delay(1000)
		.fadeIn('slow');

	//object direct child selection
	$('.body > span')
		.css({'font-size': '15px', color:'red'});

	//object next element selection
	$('.p1 + p').css({'font-size': '25px'});

	//all object next elements selection
	$('.p1 ~ p').css({'color': 'green'});
}); 

