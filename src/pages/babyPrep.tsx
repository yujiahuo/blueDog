import bmodImg from '../images/kiwi.png';
import '../styles/services.css';
import ServicePage from '../components/servicePage';

export default function BabyPrep() {
	return (
		<>
			<ServicePage
				imageSrc={bmodImg}
				serviceName='New baby prep'
				location="At Sarah's or virtual"
				time='2-3 hours'
				forWhom='For families that do/will have a baby'
				aboutService={
					<>
						<p>
							Bringing a new baby into your family? Want to make sure baby and dog can live harmoniously at home? How can we ensure our dog gets along well with our new baby?
						</p>
						<p>
							During your appointment, Sarah will cover all aspects of preparing your dog for the pending arrival. Preparing early and being proactive can make a big difference
							in your household. We'll talk about socialization, safety, and how to reach dog body language to ensure we make choices that keep everyone comfortable around each other.
							Learn what to do before baby comes, when baby comes home, and after your child's arrival going right through those toddler years!
						</p>
					</>
				}
				pricing={
					<>
						<p>
							New Baby Consult: $425 flat rate (2 to 3 hours). Post-consultation telephone and email support are included at no additional charge. There is no additional charge for multiple-pet homes.
						</p>
						<p>
							Please note: If we determine that your dog has significant behavior problems not covered in a normal New Baby appointment, then we may need to change your appointment to a Behavior Consult and increase the fee accordingly.
						</p>
						<p>
							For appointments outside of our immediate neighborhood there may be an additional charge for travel time to your home or facility.
						</p>
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
						text: "",
						attribution: ""
					},
				]}
			/>
		</>
	)
}