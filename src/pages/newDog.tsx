import bmodImg from '../images/kiwi.png';
import '../styles/services.css';
import ServicePage from '../components/servicePage';

export default function NewDog() {
	return (
		<>
			<ServicePage
				imageSrc={bmodImg}
				serviceName='New dog ABCs'
				location="At Sarah's or virtual"
				time='60-90 minutes'
				forWhom='For new dogs'
				aboutService={
					<>
						<p>
							So you have a new dog!
						</p>
						<p>
							Whether this is your first dog, or you haven't had a dog for quite a few years, this is the appointment for you!
							In this 60 to 90 minute appointment, Sarah helps you and your dog adjust to your new life together
							- from teaching his or her name, to brushing up on basic obedience skills, to creating a harmonious household with other pets,
							to learning how to keep your dog active and fit mentally as well as physically.
						</p>
						<p>
							Problem prevention, and solutions to common nuisance behaviors your dog may have arrived with are also covered in this very informative session.
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
							Please note: If we determine that your dog has significant behavior problems not covered in a normal New Dog appointment, then we may need to change your appointment to a Behavior Consult and increase the fee accordingly.
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
						text: "I had successfully owned dogs for over twenty years. With my next dog, I changed breeds from Scottish Terriers to a Whippet. With prior experience, lots of Internet research and plenty of books on the shelf, I thought I had prepared my self for training Glencora. Wrong.  Glencora was more of a challenge than expected. As I encountered behavior problems, the web sites devoted to the breeds were no help. Books were worse. I found the advice often contradictory. Without sound advice to correct Glencora's destructive behavior, she became a difficult, insecure puppy whose behavior was worsening as she grew. A home visit with Sarah changed matters in days. Her advice was logical, consistent and significantly different than the book advice. Glencora responded well to the challenge of Sarah's program and in only a few days became an absolute delight to work with. The destructive acts when experienced when Glencora steadily diminished. Glencora's confidence around other dogs improved tremendously. She went from being insecure dog to expecting to play. After following Sarah's advice, Glencora has become a marvelous companion. Her advice was worth every cent. From now on, I will never get another dog without consulting with Sarah first.",
						attribution: "John Koskinen"
					},
				]}
			/>
		</>
	)
}