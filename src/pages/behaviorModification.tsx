import bmodImg from '../images/kiwi.png';
import '../styles/services.css';
import ServicePage from '../components/servicePage';

export default function BehaviorModification() {
	return (
		<>
			<ServicePage
				imageSrc={bmodImg}
				serviceName='Behavior Modification & Consultation'
				location="At Sarah's or virtual"
				time='2-3 hour initial consult'
				forWhom='For any dog'
				aboutService={
					<>
						<p>
							Struggling with your dog's behavior? These appointments can cover anything from <strong>nuisance behaviors</strong> (such as chewing, barking, digging), to more <strong>serious issues</strong> (such as resource guarding, dog-dog aggression, dog-human aggression, separation anxiety, fear, or handling issues).
							Sarah is a Certified Dog Behavior Consultant who specializes in the tough cases and can make strong, lasting change without the use of aversive tools.
						</p>
						<p>
							In this typically 90 minute consultation, Sarah will take a complete history of your dog and the presenting problem, help you set realistic expectations for improvement, and present you with a detailed written plan tailored to work for your individual personality and lifestyle to improve your dog's behavior.
						</p>
						<p>
							Follow-up via phone and email is encouraged and AT NO CHARGE!
						</p>
					</>
				}
				pricing={
					<>
						<ul className="extraSpacing">
							<li>
								<p>
									<b>Behavior Consult: </b>
									$450 flat rate (2 to 3 hours). Post-consultation telephone and email support are included at no additional charge. There is no additional charge for multiple-pet homes.
								</p>
							</li>
							<li>
								<p>
									<b>Behavior Consult Follow-Up session: </b>
									$175 flat rate (1 to 1.5 hours)
								</p>
							</li>
							<li>
								<p>
									<b>Behavior Consult: </b>
									$875 flat rate (Save $100)
								</p>
							</li>
						</ul>
						<p>For appointments outside of our immediate neighborhood there may be an additional charge for travel time to your home or facility.</p>
						<p>Follow-up via phone and email is encouraged and AT NO CHARGE!</p>
						<p className="description">A discounted fee is available for consult services with dogs obtained from a rescue or animal shelter with proof of adoption!</p>
					</>
				}
				resources={[
					{displayName: "What's the difference between a trainer and a behaviorist?", url: "https://www.bluedogtraining.com/trainer_or_behaviorist"},
					{displayName: "Free lecture on resource guarding", url: "https://www.youtube.com/watch?v=hzCORDd7Jmk"},
					{displayName: "Dog muzzles: why, why, and how to currectly use them", url: "https://www.akc.org/expert-advice/training/dog-muzzles-when-why-how-to-use/"},
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