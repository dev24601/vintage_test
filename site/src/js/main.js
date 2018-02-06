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
	$('.sections').fullpage({
		anchors:['section-1', 'section-2', 'section-3', 'section-4', 'section-5'],
		lockAnchors: false,
		animateAnchor: true,
		sectionSelector: 'section',
		afterLoad: function () {
			$(this).addClass('activated');
		}
	});

	// Section 3 functionality
	$('.switch-this-section').on('click', function(e){
		e.preventDefault();
		$('#s3').addClass('alternative');
	})
});
	