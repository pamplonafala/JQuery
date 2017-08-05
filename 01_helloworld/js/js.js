$(document).ready(function(){		
	console.log('DOM ready'); //before elements are loaded
	//can also be called as $(function(){});
}); 

$(document).load(function(){		
	console.log('DOM loaded'); //after page is completely loaded
}); 

$(function(){
	/* classic
	$('h1').hide(); 
	$('h1').delay(1000); 
	$('h1').fadeIn('slow');
	*/
	
	/* chain
	$('h1').hide().delay(1000).fadeIn('slow');
	*/
	
	/* block
	$('h1')
		.hide()
		.delay(1000)
		.fadeIn('slow')
	*/
	
	$('h1').click(function(){
		$('h1').text('Hello World');
	});
	
	$('a').css({color: 'red', display: 'block'});
	$('#link2').css('color', 'green');
	$('.link3').css('color', 'blue');
	
	$('h2, h3').css('color', 'yellow');
});
