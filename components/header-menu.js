fetch("components/header-menu.html")
	.then(stream => stream.text())
	.then(text => createHeader(text));

function createHeader(html){
	class HeaderMenu extends HTMLElement {
		constructor() {
			super();
		}

		toggleMenuItem(menuItemId) {
			let menuItemElem = $("#" + menuItemId);
			if (menuItemElem.hasClass("selected")){
				menuItemElem.removeClass("selected");
			}
			else {
				this.collapseDropdowns();
				menuItemElem.addClass("selected");
			}
		}
		
		collapseDropdowns() {
			$("#trainingServicesMenuItem").removeClass("selected");
			$("#professionalServicesMenuItem").removeClass("selected");
		}
		
		toggleMobileMenu() {
			$("#menu").toggleClass("mobileHidden");
		}

		connectedCallback() {
			this.innerHTML = html;

			// If a user clicks somewhere other than the menu, collapse dropdowns
			$(document).click(function(event) { 
				var $target = $(event.target);
				if(!$target.closest('#menu').length) {
					$("#trainingServicesMenuItem").removeClass("selected");
					$("#professionalServicesMenuItem").removeClass("selected");
				}
			});

			document.getElementById("trainingServicesMenuItem").addEventListener("click", () => {
				this.toggleMenuItem("trainingServicesMenuItem");
			})

			document.getElementById("mobileMenu").addEventListener("click", () => {
				this.toggleMobileMenu();
			})
		}
	}

	customElements.define('header-menu', HeaderMenu);
}