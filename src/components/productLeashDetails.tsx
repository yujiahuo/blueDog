import withAndrew from '../images/withAndrew.png';

export default function ProductLeashDetails() {

    // Basic info to pull out of FAQ
    // - Basic description
    // - Instruction sheet
    // - Available sizes
    // - Order info
    // - Extra leashes price
	return (
		<>
            <h3>Hands-free dog leash</h3>
            <div className="productImage">
                <img src={withAndrew} />
            </div>

            <div>$800 (extra leashes $20 each)</div>

            <div>
                This is a leash and here's how it works and the sizes it comes in.
                Also here's the instruction sheet for it.
            </div>

            <h4>Order information</h4>
            <p>Here's how you order stuff.</p>

            <h4>FAQ</h4>
            <details>
                <summary>Who should have one?</summary>
                <p>Clients with strong dogs that have a tendency to pull</p>
            </details>
            <details>
                <summary>Can I walk multiple dogs with the Dog-Safe Hands-Free Leash?</summary>
                <p>Yes, multiple dogs can be walked by adding leash couplers. These can be purchased in most pet stores.</p>
            </details>
            <details>
                <summary>How will my leash be shipped?</summary>
                <p>US orders are shipped by USPS (US Postal Service) Priority Mail. International orders are shipped by USPS First Class Mail International. Please contact us at orders@bluedogtraining.com for other shipping options.</p>
            </details>
            <details>
                <summary>Is there a quantity discount available?  What about wholesale pricing?</summary>
                <p>Please contact us at orders@bluedogtraining.com for more information about quantity discounts and wholesale pricing.</p>
            </details>
            <details>
                <summary>What if I have other questions?</summary>
                <p>If you have any questions about your order or about the Dog-Safe Hands-Free Leash, please do not hesitate to contact us at orders@bluedogtraining.com.</p>
            </details>
        </>
    )
}