$(function() {
	$('#message').hide();

	$('#add').click(function() {
		$.post('/addToCart', {'name': $('#name').val()})
		 	.done(function(data) {
				$('#itemCount').text(data);
				$('#message').show().delay(1000).fadeOut();
			});
	});
});
