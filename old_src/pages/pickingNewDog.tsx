import bmodImg from '../images/kiwi.png';
import '../styles/services.css';
import ServicePage from '../components/servicePage';

export default function PickingNewDog() {
	return (
		<>
			<ServicePage
				imageSrc={bmodImg}
				serviceName='Picking a new dog'
				location="No idea"
				time='No idea'
				forWhom='For those looking for a new dog'
				aboutService={
					<>
						Are you thinking of acquiring a new dog for your family and want to make sure the dog you are considering is safe and a good choice for your lifestyle and environment?
						Having conducted almost one thousand temperament tests of her own research and design, Sarah Kalnajs can give you the answers you seek. A Blue Dog temperament test is
						similar to a personality test in people. It can tell you what the dog will act like in many situations to a high probability. It can tell you if the dog has a tendency
						towards aggression or resource guarding. It can tell you whether the dog is a good choice for a home with children or a home that is planning to have children during
						the dog's lifetime. With so many dogs adopted and then surrendered because they weren't a good "fit", many clients have been thrilled with the help from Blue Dog in selecting their new pet.
					</>
				}
				pricing={
					<>
						Custom packages available to fit your individual needs.
					</>
				}
				resources={[
					{displayName: "Thing 1", url: "#"},
					{displayName: "Thing 2", url: "#"},
					{displayName: "Another cool free resource", url: "#"},
				]}
				testimonials= {[
					{
						text: "We initially contacted Sarah at Blue Dog for her help in finding our newest canine family member. We were determined to find the right fit for our family of two kids and five cats. In a very short time, Sarah connected us with the perfect dog, Danny. Sarah performed the temp testing and helped to determine that he had the right personality for fitting in with our family. Danny is everything we were looking for and more. He is gentle with our children, playful with the cats, and an absolute joy of a dog. After we brought Danny home, Sarah continued to provide us an enormous amount of support and training advice. We look forward to continuing our relationship with Sarah and would highly recommend Sarah to help in your dog search or training needs.",
						attribution: "Tia and Mike"
					},
				]}
			/>
		</>
	)
}