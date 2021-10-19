$(function() {

	$('#go').click(function() {
		$.get('/answer', function(data) {
			console.log(data);
			$('#question').val(data);
		});
	});
});
