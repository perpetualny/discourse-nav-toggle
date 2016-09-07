
$(document).ready(function(){
	// Disable Scroll bar
	// $('html')[0].style['overflow-y'] = 'hidden';

	// Strip discourse default styling for header
	$('html')[0].style['background-color'] = '#FCFCFC';
	$('.d-header')[0].style['background-color'] = "#FCFCFC";
	$('.d-header')[0].style['box-shadow'] = 'none';
	$('.d-header .title')[0].style.display = "none"
});