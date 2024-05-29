import '../styles/products.css';
import withAndrew from '../images/withAndrew.png';
import ProductLeashDetails from '../components/productLeashDetails';
import ProductDetails from '../components/productDetails';

export default function Products() {
	return (
		<>
			<div className="productsPage">
				<div className="headingArea">
					<h1>Products we sell or recommend</h1>
				</div>

				<h2>For Sale</h2>

				<div className="forSale">
					<div className="product card">
						<div className="productImage">
							<img src={withAndrew} />
						</div>
						<div className="productContent">
							<h3>Hands-free dog leash</h3>
							<p>
								Here is some basic info about the leash and stuff
							</p>
							<a href="#" className="button">Instructions</a>
						</div>
					</div>
					<div className="product card">
						<div className="productImage">
							<img src={withAndrew} />
						</div>
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
					<div className="product card">
						<div className="productImage">
							<img src={withAndrew} />
						</div>
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

				<h2>Recommendations</h2>

				<div className="recommendedSection card">
					<div className="recommendedImg">
						<img src={withAndrew} />
					</div>
					<div className="recommendedContent">
						<h3>Our top 10 books for dog owners or people considering getting a dog</h3>
						<ul>
							<li>
								<a href="#">Get this book</a>
							</li>
							<li>
								<a href="#">Get this book</a>
							</li>
							<li>
								<a href="#">Get this book</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="recommendedSection card">
					<div className="recommendedImg">
						<img src={withAndrew} />
					</div>
					<div className="recommendedContent">
						<h3>Our top 10 books for dog owners or people considering getting a dog</h3>
						<ul>
							<li>
								<a href="#">Get this book</a>
							</li>
							<li>
								<a href="#">Get this book</a>
							</li>
							<li>
								<a href="#">Get this book</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="recommendedSection card">
					<div className="recommendedImg">
						<img src={withAndrew} />
					</div>
					<div className="recommendedContent">
						<h3>Our top 10 books for dog owners or people considering getting a dog</h3>
						<ul>
							<li>
								<a href="#">Get this book</a>
							</li>
							<li>
								<a href="#">Get this book</a>
							</li>
							<li>
								<a href="#">Get this book</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="recommendedSection card">
					<div className="recommendedImg">
						<img src={withAndrew} />
					</div>
					<div className="recommendedContent">
						<h3>Our top 10 books for dog owners or people considering getting a dog</h3>
						<ul>
							<li>
								<a href="#">Get this book</a>
							</li>
							<li>
								<a href="#">Get this book</a>
							</li>
							<li>
								<a href="#">Get this book</a>
							</li>
						</ul>
					</div>
				</div>

				<ProductDetails id="leashProductDetails" content={<ProductLeashDetails/>} />
			</div>
		</>
	)
}