function expandTrainingServices() {
	document.getElementById("professionalServicesMenuItem").classList.remove("selected");
	document.getElementById("professionalServicesDropdown").classList.add("hidden");

	document.getElementById("trainingServicesMenuItem").classList.add("selected");
	document.getElementById("trainingServicesDropdown").classList.remove("hidden");
}

function expandProfessionalServices() {
	document.getElementById("trainingServicesMenuItem").classList.remove("selected");
	document.getElementById("trainingServicesDropdown").classList.add("hidden");

	document.getElementById("professionalServicesMenuItem").classList.add("selected");
	document.getElementById("professionalServicesDropdown").classList.remove("hidden");
}

function collapseDropdowns() {
	document.getElementById("trainingServicesMenuItem").classList.remove("selected");
	document.getElementById("trainingServicesDropdown").classList.add("hidden");
	document.getElementById("professionalServicesMenuItem").classList.remove("selected");
	document.getElementById("professionalServicesDropdown").classList.add("hidden");
}

function setUpPage() {
	document.body.addEventListener('mouseup', collapseDropdowns, true);
	renderHeaderAndFooter();
}

async function renderHeaderAndFooter() {
	var header = document.getElementById("header");
    //header.innerHTML = (await fetch("menu.html")).text();
}