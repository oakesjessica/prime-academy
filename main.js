$(document).ready(function() {
	$('#show').on('click', function() {
		$('.hidebody').removeClass('hide');
	})	<!--show-->

	$('#hide').on('click', function() {
		$('.hidebody').addClass('hide');
	})
});