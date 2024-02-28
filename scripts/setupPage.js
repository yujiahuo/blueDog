$(document).ready(function() {
	if ($("#header").length){
		$("#header").load("components/header.html");
		$(document).on( "click", function(event) {
			switch (event.target.id) {
				case "trainingServicesMenuItem":
				case "professionalServicesMenuItem":
					toggleMenuItem($(event.target));
					break;
				case "collapsedMenu":
					toggleMobileMenu();
					break;
				default:
					collapseDropdowns();
			}
		  } );
	}
	$("#footer").load("components/footer.html");
	//If home page, hide logo
});

function toggleMenuItem(menuItemElem) {
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