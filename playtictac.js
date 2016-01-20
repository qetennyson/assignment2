$(document).ready(function(){

  var player = 1;
  var turn = $('#turn');

  $('td').click(function() {
  	var td = $(this);
  	if (td.hasClass('x') || td.hasClass('o')) {
  		alert("You know I can't let you do that.");
  		console.log("validation");
	} else {
		player = setPlayer(player);
		console.log(player);
		setIndicator(player);
		if (player == 1) {
			td.addClass('x');
		} else {
			td.addClass('o');
		}

	}

	$('#reset').click(function() {
		$('td').removeClass('x');
		$('td').removeClass('o');
	});




});

function setPlayer(player) {
	if (player == 1) {
		return player = 2;
	} else {
		return player = 1;
	}
}

function setIndicator(player) {
	if (player ==1) {
		turn.addClass('x');
		turn.removeClass('o');
	} else {
		turn.addClass('o');
		turn.removeClass('x');
	}
}

});

