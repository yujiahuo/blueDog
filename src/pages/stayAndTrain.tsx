import bmodImg from '../images/kiwi.png';
import '../styles/services.css';
import ServicePage from '../components/servicePage';

export default function StayAndTrain() {
	return (
		<>
			<ServicePage
				imageSrc={bmodImg}
				serviceName='Stay & Train'
				location="At Sarah's"
				time='Two weeks'
				forWhom='For adults or puppies'
				aboutService={
					<>
						<p>
							<strong>Need a few weeks of intensive, focused training, but don't have the time for it yourself?</strong> Stay and train may be the perfect option for you.
							Your dog will get daily one-on-one attention from Sarah herself and come home with a fresh set of skills and manners. We'll build your dog so they can be the best version of themselves with the power of positive reinforcement.
							At the end of the program, you'll go home with a Skills Transfer appointment and video to review everything your dog learned here.
						</p>

						<p>
							Our program is great for:
						</p>

						<ul>
							<li>Polite greeting</li>
							<li>Leash walking</li>
							<li>Continued socialization and confidence-building</li>
							<li>Grooming and vet prep</li>
							<li>Exposure and interactions with other dogs</li>
							<li>Handling and grooming prep</li>
							<li>...and more</li>
						</ul>

						<div className="description">Stay and train is not for dogs showing aggression or other more serious behavior problems. For those, see behavior consults.</div>
						<p></p>

						<h3>Also introducing the area's first Puppy Stay and Train</h3>
						<div className="description">For puppies 16 weeks old or younger</div>
						<p>
							<strong>A program tailored specifically to puppies!</strong> The first few weeks of a dog's life are absolutely critical and the choices we make can impact a dog's behavior for the rest of their life. Sarah has raised hundreds of puppies
							into stellar adults and would love to give your puppy the same boost toward success. Your puppy will be socialized extensively will all sorts of things in the world,
							get to interact with other dogs under expert supervision, and will work on potty training, crate training, grooming prep, foundational skills, and more.
						</p>

						<h3>Why choose us?</h3>
						<p>
							Trusting someone with your best friend isn't easy. Unlike other boarding programs, your dog will live in a home environment, not a kennel or a facility.
							We guarantee there will be no shocking, choking, or rough handling, and we will never ask you to use any methods you're not comforable with. Real, lasting results can absolutely be achieved
							without the use of physical punishment. Just ask our clients!
						</p>
					</>
				}
				pricing={
					<>
						<p>
							<b>$3,800</b> - Includes:
						</p>
						<ul className="extraSpacing">
							<li>
								Two weeks of training in Sarah's home
							</li>
							<li>
								A Skills Transfer appointment with the entire family
							</li>
							<li>
								A Skills Transfer video (featuring your own dog) that reviews everything your dog learned here at Blue Dog!
							</li>
						</ul>
						<p className="description">A discounted fee is available for consult services with dogs obtained from a rescue or animal shelter with proof of adoption!</p>
					</>
				}
				resources={[
					{displayName: "Thing 1", url: "#"},
					{displayName: "Thing 2", url: "#"},
					{displayName: "Another cool free resource", url: "#"},
				]}
				testimonials= {[
					{
						text: "Sarah works wonders again! This time we sent our new puppy for a stay and train with Sarah and Andrew. Mo not only came away with 28 cue words and so much socialization, she also has a new family of 2- and 4-legged friends. They love her and cared for her like their own. Sarah trains dogs and more importantly, us humans. And the training doesn’t stop when the dog comes home - Sarah is available to help us with questions whenever we need. I’m so grateful to her and excited for our future with Mo!",
						attribution: "Sarah Stewart"
					},
					{
						text: "My partner and I have had dogs in our lives since we were both in the womb. When our beloved Winnie (13) and Scout (14) died this past May and August, respectively, our hearts were shattered, so we decided to get a puppy! Great idea. LOL We soon realized we were in WAY over our heads (how did we do this 14 years ago??) and needed professional help. We heard about Blue Dog through a mutual friend; I left a message and Sarah called me back within an hour and laid out our training options. We chose their Stay and Train program and have zero regrets. Franklin, was 4+ months when we adopted him, came to us reverse potty trained (meaning, it was only okay to potty IN the house) and had started to develop a few other bad habits. These were all erased. Our goals for Sarah were house training, independence/confidence, and manners. In two weeks, she and Andrew have given us this and a foundation to build upon. The Stay and Train program isn’t just about training Franklin, it’s about training the humans, too. I have learned so much (which is a huge surprise, since I’ve had dogs in my life for 50+ years).  Additionally, we have access to Sarah and her expertise for the rest of Franklin’s life, which is worth the price of the program, IMO.",
						attribution: "Melissa Peyton"
					},
					{
						text: "My experience with Blue Dog Training could not be more wonderful.  Sarah, Andrew, and I share quite a journey - from well before I even brought home my Newfoundland puppy. They have been with me every step of the way, always supportive, never judging, always ready to offer help. We did a board and train for our Newfie - Sarah has worked wonders with our puppy. The difference was remarkable. Our puppy is extremely well-socialized, friendly, confident, and well-behaved. She loves learning/training too! Since her return, I have taken her to a number of public places/events and everyone admires how well-behaved and social she is. We have a young child, so it was very important to us that we give the best head start and foundation to our puppy and set her (and our family) up for success. Sarah and Andrew did just that - our puppy has seamlessly adapted to our family. We cannot wait to continue her training with Sarah and Andrew, and at home!",
						attribution: "Olivia Radics"
					},
					{
						text: "We were having a difficult time with the behaviors of our 5 month old Golden Retriever and we knew we needed help. We found Blue Dog Training & Behavior, spoke at length with Sarah and Andrew and decided that our best option would be to have our pup 'stay and train'.  The change has been amazing.  However, the best part of our experience was all the WE learned from them.  They sent us videos of their training sessions with our pup, provided great insights, and spent significant time teaching us how to work with our pup. We went from not having a plan to knowing exactly how to manifest the positive behaviors we were looking for.  We have a happy pup and peaceful home!!  Thanks, Sarah and Andrew!",
						attribution: "Paula Soderberg"
					},
					
				]}
			/>
		</>
	)
}