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
	//If home page, hide logo
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