$(document).ready(function() {
	if ($("#header").length){
		$("#header").load("components/header.html");
		$(document).click(function(event) { 
			var $target = $(event.target);
			if(!$target.closest('#menu').length) {
				collapseDropdowns();
			}
		});
	}
	$("#footer").load("components/footer.html");

	observeForAnimation();
});

function toggleMenuItem(menuItemId) {
	let menuItemElem = $("#" + menuItemId);
	if (menuItemElem.hasClass("selected")){
		menuItemElem.removeClass("selected");
	}
	else {
		collapseDropdowns();
		menuItemElem.addClass("selected");
	}
}

function collapseDropdowns() {
	$("#trainingServicesMenuItem").removeClass("selected");
	$("#professionalServicesMenuItem").removeClass("selected");
}

function toggleMobileMenu() {
	$("#menu").toggleClass("mobileHidden");
}

function observeForAnimation() {
	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {

			if (entry.isIntersecting) {
				entry.target.classList.add('appear');
				return; // if we added the class, exit the function
		 	}
	  
		// We're not intersecting, so remove the class!
			entry.target.classList.remove('appear');
		});
	});
	
	const animatedEls = document.querySelectorAll(".appearOnScroll");
	animatedEls.forEach((el) => {
		observer.observe(el);
	});
}