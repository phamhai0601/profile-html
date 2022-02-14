$(document).on('click', 'button[class="navbar-toggler d-xs-block d-sm-none"]', function() {
	var div = $('div[class="col-xs-8 col-sm-4 d-flex flex-column px-5 d-none d-xs-none d-sm-block"]');
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
)
;