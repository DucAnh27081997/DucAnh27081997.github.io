$(document).ready(function() {
	$(".nd").slideUp();
	$(".khoi h3").click(function(event) {
		$(".nd").slideUp();
		$(this).next(".nd").slideToggle();
		$(this).toggleClass('xanh');
	});

});
