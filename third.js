$(document).on('ready', function() {

	$('.bigButton').click(function() {
		$('.bigButton').fadeOut(400);
		$('.main-content').append(
			"<div class='popup'>" +
				"<h1>hello...</h1>" +
				"<button class='close'><span>goodbye...</span></button>" +
			"</div>");
		$('.close').hide().delay(400).fadeIn(4000);
		$('.close').click(function() {
		$('.popup').detach();
		$('.bigButton').fadeIn(600);
	});
	});

	

});