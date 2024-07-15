import bmodImg from '../images/kiwi.png';
import '../styles/services.css';
import ServicePage from '../components/servicePage';

export default function NewPuppy() {
	return (
		<>
			<ServicePage
				imageSrc={bmodImg}
				serviceName='New puppy ABCs'
				location="At your place"
				time='60-90 minutes'
				forWhom='For puppies'
				aboutService={
					<>
						<p>
							Sarah will show you how to get your puppy off on the right foot.
							What your puppy learns in the first eight to sixteen weeks of life plays a major role in determining what kind of adult dog you will have!
							This is the perfect appointment for those of you who have gotten a puppy but have to wait two, three or even four weeks to get into a local puppy socialization class.
							It only takes a few days for your puppy to learn the wrong behaviors, so this session, before your socialization class begins could be the most important 90 minutes of your puppy's early education!
						</p>
						<p>
							Sarah covers all the basics, including socialization tips, feeding, house training, basic obedience, handling, problem prevention and "how to speak dog",
							as well as what to expect down the road as your puppy matures into adolescence and adulthood.
						</p>
					</>
				}
				pricing={
					<>
						<p>
							<b>$425 flat rate</b>
						</p>
						<p>
							Post-consultation telephone and email support are included at no additional charge. There is no additional charge for multiple-pet homes.
						</p>
						<p>
							Please note: If we determine that your dog has significant behavior problems not covered in a normal New Puppy appointment, then we may need to change your appointment to a Behavior Consult and increase the fee accordingly.
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
						text: "Put simply, Sarah is incredible. We wouldn't have the dog we have (and our sanity) if it were not for Sarah. For starters, she helped us puppy-proof our house and gave us a thousand ways to socialize our new puppy. Our dog is so well adjusted because Sarah took the time to impress upon us the importance of early socialization. We were able to successfully and quickly housetrain our dog thanks to Sarah's simple and systematic plan. We learned practical stuff like how to give our dog a treat, what to do when a stranger comes to the door and how to tell when dog-play is too rough or just right. Sarah has a deep understanding of dog psychology and she is able to transform complex ideas into understandable and observable behaviors. Thanks to Sarah, we are aware of our dog's stress and excitement and we are able to take proactive steps to shape his behavior. Sarah helped us to train our dog (and train us) the basic commands with clear & concise language. Sarah not only came to our house on a regular basis, but also met us at the dog park, corresponded over e-mail and returned our phone calls to help with ongoing puppy issues. We are forever indebted to Sarah for teaching us how to love our dog more fully.",
						attribution: "Robin & Wayne Day-Laporte"
					},			
				]}
			/>
		</>
	)
}