import bmodImg from '../images/kiwi.png';
import '../styles/services.css';
import ServicePage from '../components/servicePage';

export default function BehaviorAssessment() {
	return (
		<>
			<ServicePage
				imageSrc={bmodImg}
				serviceName='Behavior assessments'
				location="At Sarah's"
				time='60 min'
				forWhom='For individuals, shelters, rescues'
				aboutService={
					<>
						<h3> For individuals</h3>
						Sarah will assess your dog.
						Additionally, if you are involved in a dispute over your dog's behavior with neighbors, landlords or other individuals,
						or an Animal Control Dangerous Dog Investigation is being conducted, a temperament assessment and written evaluation
						by professional behavior consultant Sarah Kalnajs can be a great asset to you. If your dog is deemed to be dangerous
						during the testing procedure, you will be informed of the potential risks as well as any proactive steps you can take to improve the situation.

						<h3>For shelters and rescues</h3>
						Blue Dog offers contract temperament testing services throughout southern Wisconsin on a weekly, bi-weekly or monthly basis.
						Sarah comes to your shelter with a fully trained assistant and the dogs your shelter chooses are tested with full documentation
						provided (written and videotape) as well as placement recommendations. Temperament testing increases the adoptability of animals
						in your shelter as it gives adopters a better understanding of the dog they are considering and gives the shelter a better idea of the ideal adopter match for each dog.

						<h3>Staff training</h3>
						Additionally, Blue Dog offers temperament test training for shelter staff along with all the required tools and documentation
						so that your shelter can have it's own objective and consistent method of assessing dogs prior to placement.
						Generally this training is done with a minimum of four individuals (two trained as primary testers and two trained as
						secondary testers) in four half-day or two full-day sessions. The training also includes behavior modification techniques
						that can help increase each dog's adoptability. Please contact sarah@bluedogtraining.com for more information.
					</>
				}
				pricing={
					<>
						<ul>
							<li>$250 per dog for a 1-hour session that includes a behavior assessment, written evaluation, and video copy of the assessment.</li>
							<li>For multiple dogs, pricing is contracted on an individual basis. Please inquire at  sarah@bluedogtraining.com</li>
						</ul>
					</>
				}
				resources={[
					{displayName: "Thing 1", url: "#"},
					{displayName: "Thing 2", url: "#"},
					{displayName: "Another cool free resource", url: "#"},
				]}
				testimonials= {[
					{
						text: "Sarah's expertise and professional advice has provided the shelter staff with a set of tools and techniques to properly assess a dog's temperament. She has educated staff members on how to pinpoint particular problem areas and more clearly define a dog’s adoptability. In turn, Sarah has trained staff and volunteers in behavior modification methods and handling techniques. These techniques will then increases a dog's adoptability and decrease it's chances of being returned. Sarah's consultation has been the foundation of what is now an organized, measured, meticulous adoption program that enables the Lakeland Animal Shelter to give a dog their best chance for finding a permanent home. However, the greatest thing about Blue Dog Training is Sarah herself. An incredibly professional & compassionate person, Sarah has an amazing ability to translate her vast technical knowledge in the area of dog behavior, into a straightforward, understandable format. This ability and her endless patience allows her to take any willing volunteer, with little or no experience, and equip them with the necessary tools to properly handle and evaluate a dog. It is this amazing talent to work with people as well as dogs, which makes Sarah Kalnajs so very special.",
						attribution: "Kristen Perry, Shelter Manager, Lakeland Animal Welfare Society"
					},
				]}
			/>
		</>
	)
}