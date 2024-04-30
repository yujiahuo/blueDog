import Banner from '../components/banner';
import CallButton from '../components/callButton';
import FeaturedService from '../components/featuredService';
import puppyImg from '../images/puppy1.png';
import bmodImg from '../images/kiwi.png';
import sarahDanger from '../images/SarahInVeryRealDanger.png';
import fakeGoogle from '../images/fakeGoogleReviews.png';
import '../styles/home.css';

export default function Home() {
	return (
		<>
			<div className="homePage">
				<div className="sarahSection">
					<div className="textContent appearOnScroll">
						<h1>Train with Sarah Kalnajs</h1>
						<p className="description">Certified Dog Behavior Consultant & Certified Professional Dog Trainer APDT/ABMA/IAABC</p>
						<p>Sarah has been working with dogs professionally for over twenty-five years and is well known in the industry for her skills and educational content. She's behind the Language of Dogs and Am I Safe video series and has given over 100 seminars around the world.</p>
						<a href="./aboutSarah.html" className="button">Read more about Sarah's qualifications</a>
					</div>
				</div>

				<Banner
					heading="Science-based, humane training for your canine best friend"
					details="Specializing in puppy-raising and helping dogs who are fearful, reactive, or aggresive"
					additionalComponent={<CallButton/>}
				/>

				<div className="featuredSection">
					<h1 className="appearOnScroll">
						Services our clients love
					</h1>
					<div className="featuresContainer">
						<FeaturedService
							imageSrc={puppyImg}
							heading='The only local puppy Stay & Train'
							description='For puppies 8-16 weeks'
							mainContent={
								<>
								<p>
									The first few weeks with a new puppy are the most critical weeks of their lives.
									Give your new puppy a great foundation to set them up for a lifetime of success.
								</p>
								<div className="checkboxTable">
									<div className="checkItem"><i className="fa-solid fa-square-check"></i>Potty training</div>
									<div className="checkItem"><i className="fa-solid fa-square-check"></i>Crate training</div>
									<div className="checkItem"><i className="fa-solid fa-square-check"></i>Socialization</div>
									<div className="checkItem"><i className="fa-solid fa-square-check"></i>Basic obedience</div>
								</div>
								</>
							}
							buttonUrl='/puppyStayAndTrain'
						/>
						<FeaturedService
							imageSrc={bmodImg}
							heading='Solutions for problem behaviors'
							description='For all dogs'
							mainContent={
								<>
								<p>
									We know a dog isn't defined by what they have a hard time with. Sarah has worked with thousands of reactive, aggressive, fearful, or otherwise tricky dogs. Help is within reach.
								</p>
								<p>
									Post-consultation telephone and email support are included at no additional charge.
								</p>
								</>
							}
							buttonUrl='/behaviorModification'
						/>
						<FeaturedService
							imageSrc={sarahDanger}
							heading='Seminar speaker'
							description='For professional organizations'
							mainContent={
								<>
								<p>
									Sarah has spoken at a million places. Here are some examples.
								</p>
								</>
							}
							buttonUrl='/seminarSpeaker'
						/>
						<FeaturedService
							imageSrc={puppyImg}
							heading='Picking your next dog'
							description='For those looking for a dog'
							mainContent={
								<>
								<p>
									Choosing your next four-legged friend is a big decision. How do you know they'll be the right fit? How can you avoid surprises as they mature? Can you stack the deck in your favor?
								</p>
								</>
							}
							buttonUrl='/seminarSpeaker'
						/>
					</div>
				</div>
				
				<Banner
					heading="Did you know we offer discounts for rescues?"
					details="Discounts available for dogs obtained from a rescue or animal shelter with proof of adoption"
				/>

				<div className="reviewsSection appearOnScroll">
					<div className="center">
						<img src={fakeGoogle} />
					</div>
				</div>
			</div>
		</>
	)
}