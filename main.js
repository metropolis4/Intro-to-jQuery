$(document).on('ready', function() {
  $('#submit').click(function() {
  	var add = $("input[name=statement").val();
  	$('.userInput').append("<p>" + add + "</p>");
  });
  $('#list').click(function() {
  	$('.userInput').append("<ul><li></li><li></li><li></li></ul>");
  });

});