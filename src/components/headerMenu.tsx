import '../styles/header.css';
import Logo from './logo';

function toggleMenuItem(menuItemId: string) {
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

export default function HeaderMenu() {
	$(document).click(function(event) { 
		var $target = $(event.target);
		if(!$target.closest('#menu').length) {
			collapseDropdowns();
		}
	});
	
	return (
		<div className="header">
			<Logo />
			<div className="menuGroup">
				<a href="#" id="mobileMenu" onClick={toggleMobileMenu}>
					<i className="fa-solid fa-bars"></i>
				</a>
			
				<div id="menu" className="mobileHidden">
					<a href="#" id="trainingServicesMenuItem" className="menuItem menuItem-1" onClick={() => toggleMenuItem("trainingServicesMenuItem")}>
						<i className="fa-solid fa-train"></i>
						Training services
						<i className="fa-solid fa-sort-down"></i>
					</a>
					<div id="trainingServicesDropdown" className="menuDropdown menuDropdown-1">
						<div className="column">
							<div className="label">For puppies</div>
							<a href="/puppyStayAndTrain">
								<div>Stay and train</div>
								<div className="description">Let your new puppy pee in Sarah's house instead of yours</div>
							</a>
							<a href="/newPuppy">
								<div>New puppy ABCs</div>
								<div className="description">Set your new puppy up for success in the most critical time period of their life</div>
							</a>
						</div>
						<div className="column">
							<div className="label">For all dogs</div>
							<a href="/newDog">
								<div>New dog ABCs</div>
								<div className="description">Set your new dog up for success</div>
							</a>
							<a href="/behaviorModification">
								<div>Behavior modification</div>
								<div className="description">Help with problem behaviors</div>
							</a>
							<a href="/babyPrep">
								<div>Baby prep</div>
								<div className="description">Prepare your dog for your new arrival</div>
							</a>
							<a href="/skills">
								<div>Skills training</div>
								<div className="description">Keep or remove this?</div>
							</a>
							<a href="/outandabout">
								<div>Out and about training</div>
								<div className="description">Seasonal offering</div>
							</a>
						</div>
						<div className="column">
							<div className="label">Assessments</div>
							<a href="/behaviorAssessment">
								<div>Behavior assessment</div>
								<div className="description">Give it to me straight. How bad is it?</div>
							</a>
							<a href="/pickingNewDog">
								<div>Picking a new dog</div>
								<div className="description">How not to end up with a Kiwi</div>
							</a>
						</div>
					</div>
					<a href="#" id="professionalServicesMenuItem" className="menuItem menuItem-2" onClick={() => toggleMenuItem("professionalServicesMenuItem")}>
						<i className="fa-solid fa-feather-pointed"></i>
						For professionals
						<i className="fa-solid fa-sort-down"></i>
					</a>
					<div id="professionalServicesDropdown" className="menuDropdown menuDropdown-2">
						<div className="column">
							<div className="label">Education</div>
							<a href="/seminars">
								<div>Seminar/webinar speaker</div>
								<div className="description">International speaker at 100+ seminars, professional development, shelter staff training</div>
							</a>
							<a href="/mentoring">
								<div>Mentoring</div>
								<div className="description">Sarah will upload her brain into your brain slowly over time</div>
							</a>
						</div>
						<div className="column">
							<div className="label">Other</div>
							<a href="/freelanceWriting">
								<div>Freelance writing</div>
								<div className="description"></div>
							</a>
							<a href="/dogBiteExpertWitness">
								<div>Dog bite expert witness</div>
								<div className="description"></div>
							</a>
							<a href="/mediaInterview">
								<div>Animal actors</div>
								<div className="description"></div>
							</a>
						</div>
					</div>
					<a href="/about" className="menuItem menuItem-4">
						<i className="fa-solid fa-user-large"></i>
						About Sarah
					</a>
					<a href="/products" className="menuItem menuItem-3">
						<i className="fa-solid fa-tag"></i>
						Products
					</a>
				</div>
				<div className="socialMedia">
					<a href="https://www.instagram.com/sarahkalnajs"><i className="fa fa-instagram"></i></a>
					<a href="mailto: sarah@bluedogtraining.com"><i className="fa fa-envelope"></i></a>
				</div>
			</div>
		</div>
	)
}