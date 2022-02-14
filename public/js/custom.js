$(document).on('click', '#show-navbar', function() {
	var div = $('#navbar');
	if(div.css('display') == 'block') {
		div.attr("style", "display:none!important");
		$(this).html('<i class="fas fa-bars"></i>')
	} else {
		div.attr("style", "display:block!important");
		$(this).html('<i class="fas fa-times"></i>')
	}
})
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor
			.addEventListener('click', function(e) {
				e.preventDefault();
				document.querySelector(this.getAttribute('href')).scrollIntoView({
					behavior: 'smooth'
				});
			});
	}
);