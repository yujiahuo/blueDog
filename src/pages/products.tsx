import '../styles/products.css';

export default function Products() {
	return (
		<>
			<div className="productsPage">
				<div className="headingArea">
					<h1>Products we sell or recommend</h1>
				</div>

				<div className="forSale">
					<h2>For Sale</h2>
					<div className="product">
						<div className="productImage"></div>
						<div className="productContent">
							<h3>Hands-free dog leash</h3>
							<p>
								Here is some basic info about the leash and stuff
							</p>
							<p>
								FAQ
							</p>
							<div className="progressiveDisclosure">
								<a href="#" className="expandable">Who should have one?</a>
								<div className="expandedBit">Clients with strong dogs that have a tendency to pull</div>
							</div>
							<a href="#" className="button">Instructions</a>
						</div>
					</div>
					<div className="product">
						<div className="productImage"></div>
						<div className="productContent">
							<h3>The language of dogs</h3>
							<p>
								Here is some basic info
							</p>
							<a href="#" className="button">Trailer</a>
							<a href="#" className="button">Watch a sample</a>
							<a href="#" className="button">See reviews</a>
						</div>
					</div>
					<div className="product">
						<div className="productImage"></div>
						<div className="productContent">
							<h3>Am I Safe</h3>
							<p>
								Here is some basic info
							</p>
							<a href="#" className="button">Trailer</a>
							<a href="#" className="button">Watch a sample</a>
							<a href="#" className="button">See reviews</a>
						</div>
					</div>
				</div>

				<div className="recommendedSection">
					<h2>Our top 10 books for dog owners or people considering getting a dog</h2>
					<div className="recommendedContent">
						
					</div>
				</div>
			</div>
		</>
	)
}