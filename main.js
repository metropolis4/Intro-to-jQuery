$(document).on('ready', function() {

	// index.html

  $('#submit').click(function() {
  	var add = $("input[name=statement").val();
  	$('.userInput').append("<p class='post'>" + add + "</p>");
  });
  $('#list').click(function() {
  	$('.userInput').append("<ul><li></li><li></li><li></li></ul>");
  });

// index2.html

$('.selected').hover(
  	function() {
  	$(this).addClass("active").append("<span>!!!</span>");
  	},
  	function() {
  	$(this).removeClass("active").children("span").remove();
  });

  $('a').on("click", function(e) {
  	var userInput = confirm("Are you sure you want to leave this page?");
  	if(userInput === false) {
  		e.preventDefault();
  		$('button').remove();
  	}
  	
  });

  // index3.html

  $('.bigButton').click(function() {
		$('.bigButton').fadeOut(400);

		$('.main-content').append(
			"<div class='popup'>" +
				"<h2>hello...</h2>" +
				"<button class='close buttonMain'><span>goodbye...</span></button>" +
			"</div>");

		$('.close').hide().fadeIn(1500).animate({top: '50px'}, 1500);
		$('h2').fadeOut(4000);

		$('.close').click(function() {
			$('.popup').animate({top: '100%', left: '80%', opacity: '0'}, 600).fadeOut(1000);
			$('.bigButton').fadeIn(600);
	});
	});

});