import leash from '../images/leash.jpg'

export default function ProductLeashDetails() {

    // Basic info to pull out of FAQ
    // - Basic description
    // - Instruction sheet
    // - Available sizes
    // - Order info
    // - Extra leashes price
	return (
		<>
            <div className="productImage">
                <img src={leash} />
            </div>

            <h3>Hands-free dog leash</h3>
            <p className="productPrice">$60 (extra leashes available for $20 each)</p>

            <p>
                The Dog-Safe Hands-Free Leash is a new type of dog leash with two components: a leash and an adjustable belt that you wear around your hips.
                The length of the leash is quickly adjustable "on the fly" and always remains securely attached to the belt while you are adjusting length.
                The leash also has a standard hand-grip loop for use without the belt.
            </p>
            <p>
                Please click <a href="https://www.bluedogtraining.com/forms/Leash_instructions.pdf" target="_blank">here</a> to get an instruction sheet.
            </p>

            <h4>Sizing</h4>

            <h5>Belt</h5>
            <ul>
                <li>Small: 25 to 40 inches (64 to 102 cm)</li>
                <li>Medium: 30 to 50 inches (76 to 127 cm)</li>
                <li>Large: 35 to 60 inches (89 to 152 cm)</li>
            </ul>
            <p className="description">Since the belt is worn over clothing and is typically worn lower on the hips than a normal belt, you should add at least 2 or 3 inches (5 to 8 cm) to your normal waist size to calculate the correct belt size.</p>

            <h5>Leash</h5>
            <ul>
                <li>Small dog: 3/4 inch (1.9 cm) wide and is adjustable to 3, 4, or 6 feet (0.9, 1.2, or 1.8 m). For dogs under 15 lbs (7 kg) only.</li>
                <li>Standard: 1 inch (2.5 cm) wide, adjustable to 2, 3, 4, or 6 feet (0.6, 0.9, 1.2, or 1.8 m)</li>
            </ul>
            <p className="description"></p>

            <h4>Ordering and shipping</h4>
            <p>
                Send your order to orders@bluedogtraining.com. Please specify belt size (SMALL, MEDIUM, or LARGE) and leash size (STANDARD or SMALL-DOG). Also, please include your COUNTRY and POSTAL CODE (ZIP CODE).
            </p>
            <p>
                Upon receipt of your order we will send you a PayPal invoice by email. You may pay this invoice with a credit card, debit card, or PayPal account. You do not need a PayPal account if you pay with a card.
                When you pay the PayPal invoice, please include your CURRENT SHIPPING ADDRESS.
            </p>
            <p>
                US orders are shipped by USPS (US Postal Service) Priority Mail. International orders are shipped by USPS First Class Mail International. Please contact us at orders@bluedogtraining.com for other shipping options.
            </p>

            <h4>FAQ</h4>
            <details>
                <summary>Who should have one?</summary>
                <ul>
                    <li>Clients with strong dogs that have a tendency to pull</li>
                    <li>Clients with back, neck or shoulder injuries</li>
                    <li>Clients with dogs that lunge at cars, bikes, joggers and other dogs</li>
                    <li>Clients whose dogs have a history of aggression towards humans or other dogs and who are working with a behaviorist on a counter-conditioning / behavior modification protocol</li>
                    <li>Parents who have their hands full trying to push a stroller and walk their dog at the same time</li>
                    <li>Joggers and hikers</li>
                    <li>Dog walkers and handlers at shelters</li>
                    <li>Dog trainers, groomers, and behavior consultants</li>
                    <li>Shelter and rescue staff who conduct behavior evaluations / temperament tests</li>
                    <li>Veterinary clinic staff</li>
                </ul>
            </details>
            <details>
                <summary>Can I walk multiple dogs with the Dog-Safe Hands-Free Leash?</summary>
                <p>Yes, multiple dogs can be walked by adding leash couplers. These can be purchased in most pet stores.</p>
            </details>
            <details>
                <summary>Is there a quantity discount available?  What about wholesale pricing?</summary>
                <p>Please contact us at orders@bluedogtraining.com for more information about quantity discounts and wholesale pricing.</p>
            </details>
            <details>
                <summary>What if I have other questions?</summary>
                <p>If you have any questions about your order or about the Dog-Safe Hands-Free Leash, please do not hesitate to contact us at orders@bluedogtraining.com.</p>
            </details>

            <p className="trademark description">
                "Dog-Safe Hands-Free Leash" is a trademark of Blue Dog Training & Behavior LLC.
            </p>
        </>
    )
}