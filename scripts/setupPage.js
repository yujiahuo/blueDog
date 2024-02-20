$(document).ready(function() {
	if ($("#header").length){
		$("#header").load("components/header.html");
		$(document).on( "click", function(event) {
			switch (event.target.id) {
				case "trainingServicesMenuItem":
					expandTrainingServices();
					break;
				case "professionalServicesMenuItem":
					expandProfessionalServices();
					break;
				default:
					collapseDropdowns();
			}
		  } );
	}
	$("#footer").load("components/footer.html");
	//If home page, hide logo
});

function expandTrainingServices() {
	document.getElementById("professionalServicesMenuItem").classList.remove("selected");
	document.getElementById("trainingServicesMenuItem").classList.add("selected");
}

function expandProfessionalServices() {
	document.getElementById("trainingServicesMenuItem").classList.remove("selected");
	document.getElementById("professionalServicesMenuItem").classList.add("selected");
}

function collapseDropdowns() {
	document.getElementById("trainingServicesMenuItem").classList.remove("selected");
	document.getElementById("professionalServicesMenuItem").classList.remove("selected");
}