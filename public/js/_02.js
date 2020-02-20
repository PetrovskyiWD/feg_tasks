$(document).ready(function() {
	$('.view_btn').click(function() {
		const el = $(this);
		const gridContainer = $('.grid_container');

		$('.view_btn').removeClass('active');
		el.addClass('active');

		gridContainer.removeClass('tile list');
		gridContainer.addClass(el.data('view'));
	})
});