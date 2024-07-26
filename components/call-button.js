class CallButton extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
			<a href="tel:+16082135304" class="button">
				Start with a free 30 minute call: <br/><b>608-213-5304</b>
			</a>
		`
	}
}

customElements.define('call-button', CallButton);