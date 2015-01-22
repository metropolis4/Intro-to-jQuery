$(document).on('ready', function() {

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
});