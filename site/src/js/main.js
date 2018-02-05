$(document).ready(function () {

	// Global

	$('a').on("click", function (e) {
		if ($(this).attr('href') == '') {
			e.preventDefault();
		} else {
			return true;
		}
	});

	// Full page scroll

	// $('.sections').fullpage();
});
	