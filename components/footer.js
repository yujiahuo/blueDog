fetch("components/footer.html")
	.then(stream => stream.text())
	.then(text => createFooter(text));

function createFooter(html){
	class Footer extends HTMLElement {
		constructor() {
			super();
		}

		connectedCallback() {
			this.innerHTML = html;
		}
	}

	customElements.define('footer-section', Footer);
}