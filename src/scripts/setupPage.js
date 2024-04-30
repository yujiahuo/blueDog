/* global $ */

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

$(document).ready(function() {
	observeForAnimation();
});