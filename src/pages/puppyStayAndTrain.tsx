import bmodImg from '../images/kiwi.png';
import '../styles/services.css';
import ServicePage from '../components/servicePage';

export default function PuppyStayAndTrain() {
	return (
		<>
			<ServicePage
				imageSrc={bmodImg}
				serviceName='Puppy Stay & Train'
				location="At Sarah's"
				time='Two weeks'
				forWhom='For puppies 16 weeks or younger'
				aboutService={
					<>
						<p>
							For busy families who may not have time to take their puppy to group training classes and also want more intensive training than offered in group classes.
							Your puppy will be boarded and trained in a home environment, not a kennel.
							The Stay & Train program lays the foundation for general obedience skills and prevention of nuisance behaviors (such as jumping up, leash manners, etc.)
							- it is not for adolescent or adult dogs with problem behaviors or aggression issues.
						</p>
						<p>
							We'll work on:
						</p>
						<ul>
							<li>Potty training</li>
							<li>Socialization</li>
							<li>Training foundations</li>
							<li>Crate training</li>
							<li>Interactions with other dogs</li>
							<li>Handling and grooming prep</li>
							<li>...and more</li>
						</ul>
					</>
				}
				pricing={
					<>
						
						<p>
							<b>$3,800</b> - Includes:
						</p>
						<ul className="extraSpacing">
							<li>
								A Puppy Preparation phone consultation that covers everything you need to know to prepare for your new puppy's arrival
							</li>
							<li>
								Two weeks of training in Blue Dog's home
							</li>
							<li>
								A New Puppy and Skills Transfer appointment with the entire family
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
						text: "Sarah is a natural...she must be part canine. :) My husband and I were having problems with our second rescue dog when he hit adolescence. He became aggressive with our other dog. We had gone to another well-known behaviorist in our area and were not comfortable with the plan we were given. When Sarah entered our house and knew how our obnoxious adolescent was going to react we knew she was the behaviorist that could help us. My husband and I were impressed with her wealth of knowledge and how well she explained things. It is obvious that Sarah loves helping people and their pets. I work at a veterinary clinic and have referred several clients to her. They tell me how happy they are with the results they have achieved. Just like my husband and I, they don't know what they would have done without Sarah's help. We haven't experienced any aggressive behavior since we were two weeks into Sarah's plan and that was nine months ago. We highly recommend Sarah. She goes above and beyond what one would expect!",
						attribution: "Kim & Scott Jaeger"
					},
					{
						text: "Thank you for taking the time to give me advice for our dog; he is now on medication for his bladder control and you were right, it is a medical condition! The person you referred me to for help choosing a veterinarian in our area was also a wonderful and helpful contact; it is so nice to know that there are honest people like both of you out there to help. You didn't try to 'make a buck' and you put the health of my dog first. Thank you again for helping my family become 'adjusted'. You took time to improve the quality of my life with my husband and my dogs (whom are very dear to both my husband and myself).",
						attribution: "Lisa A. Baiocchi Witt"
					},
					{
						text: "Sarah made a huge difference for my formerly 'problem' doggy. You can teach an old dog (and owner) new tricks. At age 7, Sebastian went from being a dog who sometimes stole and guarded 'treasures', growling and snapping, to being a beloved member of the household, not touching the cat food, going to the dog park and playing well with other dogs. Sarah was patient, thorough, and helped me understand -- and follow through on what Sebastian needed to behave well.",
					},
					{
						text: "We just started working with Sarah and so far are having a great experience. She is thorough, clear, a very good teacher and really seems to care about all dogs and people involved! We particularly appreciate the amount of time and energy she's spent on our case (our German Shepherds are engaged in a serious status war), both in the session and during her free follow-ups. She seems really committed to helping us until we see a positive outcome. I wish we'd consulted her earlier.",
					},
					
				]}
			/>
		</>
	)
}