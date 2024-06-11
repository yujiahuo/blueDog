import '../styles/products.css';
import leash from '../images/leash.jpg'
import languageOfDogs from '../images/languageOfDogs.jpg';
import amISafe from '../images/amISafe.jpg';
import howToBehave from '../images/howToBehaveSoDogBehaves.jpg';
import mine from '../images/mine.jpg';
import handbook from '../images/handbookAppliedBehavior.jpg';
import lucy from '../images/lucy.jpg'
import ProductLeashDetails from '../components/productLeashDetails';
import ProductDetails from '../components/productDetails';

function openProductDetails(id: string) {
	$("#" + id).css("display", "block");
}

export default function Products() {
	return (
		<>
			<div className="productsPage">
				<div className="headingArea">
					<h1>Products we sell or recommend</h1>
				</div>

				<div className="forSale">
					<h2>For Sale</h2>

					<div className="saleItems">
						<div className="product">
							<div className="productImage">
								<img src={leash} />
							</div>
							<div className="productContent">
								<h3>Hands-free dog leash</h3>
								<p>
									The Dog-Safe Hands-Free Leash is a new type of dog leash. It has two components, a leash and an adjustable belt that you wear around your hips.
								</p>
								<a href="#" className="button" onClick={() => openProductDetails("leashProductDetails")}>Learn more</a>
							</div>
						</div>
						<div className="product">
							<div className="productImage">
								<img src={languageOfDogs} />
							</div>
							<div className="productContent">
								<h3>The language of dogs</h3>
								<p>
									This educational video features a lively presentation and extensive footage of a variety breeds showing hundreds of examples of canine behavior and body language.
								</p>
								<a href="#" className="button" onClick={() => openProductDetails("langOfDogsProductDetails")}>Learn more</a>
							</div>
						</div>
						<div className="product">
							<div className="productImage">
								<img src={amISafe} />
							</div>
							<div className="productContent">
								<h3>Am I Safe</h3>
								<p>
									This video provides start-to-finish instructions for completing an assessment that is safe for the handler, fair to the dog, and has excellent predictability of future behavior. All support materials are provided, including a resource guarding scale and evaluation form.
								</p>
								<a href="#" className="button" onClick={() => openProductDetails("amISafeProductDetails")}>Learn more</a>
							</div>
						</div>
					</div>
				</div>
				
				<div className="border"></div>

				<h2>Recommendations</h2>
				<div className="recommendations">	
					<div className="recommendedSection">
						<div className="recommendedImg">
							<img src={howToBehave} />
						</div>
						<div className="recommendedContent">
							<h3>Our top 10 books for dog owners or people considering getting a dog</h3>
							<ul>
								<li>
									<a href="http://www.dogwise.com/itemdetails.cfm?ID=DTB807">How to Behave So Your Dog Behaves </a>: Sophia Yin 
								</li>
								<li>
									<a href="http://www.dogwise.com/itemdetails.cfm?ID=DTB619">How Dogs Learn</a> : Burch and Bailey 
								</li>
								<li>
									<a href="http://www.dogwise.com/itemdetails.cfm?ID=DTB795">Parenting Your Dog</a> : Trish King 
								</li>
								<li>
									<a href="http://www.dogwise.com/itemdetails.cfm?ID=DTB647">Dog Friendly Dog Training</a> : Andrea Arden 
								</li>
								<li>
									<a href="http://www.dogwise.com/itemdetails.cfm?ID=DTB116">Don't Shoot the Dog </a>: Karen Pryor 
								</li>
								<li>
									<a href="http://www.dogwise.com/itemdetails.cfm?ID=DTB534">Dog Language</a> : Roger Abrantes 
								</li>
								<li>
									<a href="http://www.dogwise.com/itemdetails.cfm?ID=DTB464">The Culture Clash</a> : Jean Donaldson 
								</li>
								<li>
									<a href="http://www.dogwise.com/itemdetails.cfm?ID=DTB527">On Talking Terms with Dogs</a> : Turid Rugaas 
								</li>
								<li>
									<a href="http://www.dogwise.com/itemdetails.cfm?ID=DTB828">Outwitting Dogs</a> : Terry Ryan
								</li>
								<li>
									<a href="http://www.dogwise.com/itemdetails.cfm?ID=DTB790">Before & After You Get Your Puppy</a> : Ian Dunbar  
								</li>
							</ul>
						</div>
					</div>

					<div className="recommendedSection">
						<div className="recommendedImg">
							<img src={mine} />
						</div>
						<div className="recommendedContent">
							<h3>Our top 10 books for owners of "difficult" dogs</h3>
							<ul>
								<li>
									<a href="http://www.dogwise.com/itemdetails.cfm?ID=DTB740">Mine</a> : Jean Donaldson
								</li>
								<li>
									<a href="http://www.dogwise.com/itemdetails.cfm?ID=DTB668">The Bark Stops Here</a> : Terry Ryan
								</li>
								<li>
									<a href="http://www.dogwise.com/itemdetails.cfm?ID=DTB755">Aggression in Dogs</a> : Brenda Aloff
								</li>
								<li>
									<a href="videos-dvds.html">The Language of Dogs</a> : (video) Sarah Kalnajs
								</li>
								<li>
									<a href="http://www.dogwise.com/itemdetails.cfm?ID=DTB798">Fight</a> : Jean Donaldson
								</li>
								<li>
									<a href="http://www.dogwise.com/itemdetails.cfm?ID=DTB632">Help for Your Shy Dog</a> : Deborah Wood
								</li>
								<li>
									<a href="http://www.dogwise.com/itemdetails.cfm?ID=DTB676">Dogs Home Alone</a> : Roger Abrantes
								</li>
								<li>
									<a href="http://www.dogwise.com/itemdetails.cfm?ID=DTB799">Scaredy Dog</a> : Ali Brown
								</li>
								<li>
									<a href="http://www.dogwise.com/itemdetails.cfm?ID=DTB728">Canine Aggression Workbook</a> : James O'Heare
								</li>
								<li>
									<a href="http://www.dogwise.com/itemdetails.cfm?ID=DTB808">Bringing Light to Shadow</a> - A Dog Trainer's Diary : Pamela Dennison 
								</li>
							</ul>
						</div>
					</div>

					<div className="recommendedSection">
						<div className="recommendedImg">
							<img src={handbook} />
						</div>
						<div className="recommendedContent">
							<h3>Top Ten Books for Animal Professionals (Trainers, Rescue workers, Shelter Staff)</h3>
							<ul>
								<li>
									<a href="http://www.dogwise.com/itemdetails.cfm?ID=DTB665">Handbook of Applied Dog Behavior and Training Volume 1</a> : Steven Lindsay
								</li>
								<li>
									<a href="http://www.dogwise.com/itemdetails.cfm?ID=DTB699">Handbook of Applied Dog Behavior and Training Volume 2</a> : Steven Lindsay
								</li>
								<li>
									<a href="http://www.dogwise.com/itemdetails.cfm?ID=DTB821">Handbook of Applied Dog Behavior and Training Volume 3</a> : Steven Lindsay
								</li>
								<li>
									<a href="http://www.dogwise.com/itemdetails.cfm?ID=DTB500">Excel-erated Learning</a> : Pamela Reid
								</li>
								<li>
									<a href="http://www.dogwise.com/itemdetails.cfm?ID=DTB101">Behavior Problems in Dogs</a> : William Campbell
								</li>
								<li>
									<a href="http://www.dogwise.com/itemdetails.cfm?ID=DTO222">Coaching People to Train Their Dogs</a> : Terry Ryan
								</li>
								<li>
									<a href="http://www.dogwise.com/itemdetails.cfm?ID=DTO220">One on One</a> : Nicole Wilde
								</li>
								<li>
									<a href="http://www.dogwise.com/itemdetails.cfm?ID=DTB535">Evolution of Canine Social Behavior</a> : Roger Abrantes
								</li>
								<li>
									<a href="http://www.dogwise.com/itemdetails.cfm?ID=DTB551">Genetics and the Social Behavior of the Dog</a> : Scott and Fuller
								</li>
								<li>
									<a href="http://www.dogwise.com/itemdetails.cfm?ID=DTB700">Dogs: A New Understanding of Canine Origin, Behavior, and Evolution </a>: Raymond Coppinger
								</li>
							</ul>
						</div>
					</div>

					<div className="recommendedSection">
						<div className="recommendedImg">
							<img src={lucy} />
						</div>
						<div className="recommendedContent">
							<h3>Recommended trainers around the country</h3>
							<ul>
								<li>
									Florida: <a href="mailto:tsteinke@tampabay.rr.com">Angelica Steinker</a> - <a href="http://www.courteouscanine.com">Courteous Canine</a>
								</li>
								<li>
									Michigan: <a href="mailto:doghuggers@yahoo.com">Lisa Laney</a> - <a href="http://www.woofology.com">Woofology</a>
								</li>
								<li>
									North Carolina: <a href="mailto:jen@familypaws.com">Jennifer Shryock</a> - <a href="https://www.familypaws.com">Family Paws</a>
								</li>
								<li>
									Virginia: <a href="mailto:staff@caninecampus.com">Tara McLaughlin, CPDT</a> - <a href="http://www.gooddog-training.com">GoodDog! Training</a>
								</li>
								<li>
									Michigan: <a href="mailto:doghuggers@yahoo.com">Lisa Laney</a> - <a href="http://www.woofology.com">Woofology</a>
								</li>
							</ul>
						</div>
					</div>

					{/*
					<div className="recommendedSection card">
						<div className="recommendedImg">
							<img src={withAndrew} />
						</div>
						<div className="recommendedContent">
							<h3>Title</h3>
							<ul>
								
							</ul>
						</div>
					</div>
					*/}
				</div>

				<ProductDetails id="leashProductDetails" content={<ProductLeashDetails/>} />
			</div>
		</>
	)
}