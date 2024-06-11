import bmodImg from '../images/kiwi.png';
import '../styles/services.css';
import ServicePage from '../components/servicePage';

export default function Seminars() {
	return (
		<>
			<ServicePage
				imageSrc={bmodImg}
				serviceName='Seminars and webinars'
				location=""
				time=''
				forWhom=''
				aboutService={
					<>
						<p>
							Certified Dog Behavior Consultant / Certified Pet Dog Trainer, Sarah Kalnajs, is a nationally renowned, engaging and popular speaker on topics relating to dogs and their behavior. Sarah's presentations range from those designed to educate children to advanced topics for dog professionals. Presentations include a wealth of live video footage and support materials tailored to the topic and the audience.
						</p>
						<p>
							With an extensive background in the area of canine behavioral signals / body language and their meanings, Sarah's presentations are invaluable for a wide range of audiences, including:
						</p>

						<ul>
							<li>
							Veterinary Clinic Staff / Veterinary Students / Vet Tech Students
							</li>
							<li>
								Dog Trainers and Behavior Consultants
							</li>
							<li>
								Dog Daycare Staff / Groomers / Breeders
							</li>
							<li>
								Animal Shelters and Rescue Groups
							</li>
							<li>
								Utility and Public Works Crews / Police Departments
							</li>
							<li>
								Pet Owners 
							</li>
						</ul>

						<p>
							Blue Dog offers a wide range of popular seminar topics, and as a Certified Dog Behavior Consultant / Certified Pet Dog Trainer, Sarah is uniquely qualified to speak on any dog behavior / training topic of interest to your organization.
						</p>
						<p>
							Seminars can be customized to fit your time and budget.
						</p>
					</>
				}
				pricing={
					<>
						<p>
							Seminars can be customized to fit your time and budget.
						</p>

						<p className="description">A discounted fee is available for rescues or animal shelters.</p>
					</>
				}
				resources={[
					{displayName: "Thing 1", url: "#"},
					{displayName: "Thing 2", url: "#"},
					{displayName: "Another cool free resource", url: "#"},
				]}
				testimonials= {[
					{
						text: "Sarah's seminar was extremely helpful! I am an evaluator for the Delta Society and while I have evaluated many, many dogs over the years, I learned A LOT in this seminar. The video footage was amazing and critical for this subject and Sarah is an outstanding speaker!",
						attribution: "Diana McQuarrie"
					},
					{
						text: "I can see the behaviors Sarah covered daily in our ward at the veterinary clinic. This would be an invaluable presentation for the veterinary students and I would like to see this be a required seminar for veterinary students and technicians also. How great to have a resource as knowledgeable as Sarah in our own back yard!",
						attribution: "Helen Schultz, University of Wisconsin School of Veterinary Medicine"
					},
					{
						text: "Phenomenal! Riveting! I am truly amazed we manage to maintain relationships with our dogs when we communicate so poorly with them! I am very impressed with Sarah's expertise. She has a sound intuitive sense as well as common sense that is refreshing in the dog community!",
						attribution: "Claire Wenstrom, dog trainer"
					},
					{
						text: "This was hands down the best video presentation I've seen. It organized signals into groups that made complete sense and showed a wide variety of breeds which made it much more useful than other presentations I have seen on similar topics.",
						attribution: "Don Summers, dog daycare owner"
					}
				]}
			/>
		</>
	)
}