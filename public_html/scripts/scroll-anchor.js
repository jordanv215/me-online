$(document).ready(function(e) {

	function scrollToAnchor(aid){
		var aTag = $("a[name='"+ aid +"']");
		$('html, body').animate({scrollTop: aTag.offset().top},'slow');
	}

	$("#link-5").click(function() {
		scrollToAnchor("contact");
		console.log('should be scrolling to contact');
	});

});