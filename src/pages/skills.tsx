import bmodImg from '../images/kiwi.png';
import '../styles/services.css';
import ServicePage from '../components/servicePage';

export default function Skills() {
	return (
		<>
			<ServicePage
				imageSrc={bmodImg}
				serviceName='Skills training'
				location="At Sarah's or virtual"
				time=''
				forWhom=''
				aboutService={
					<>
						Blue Dog tailors a training plan that is specific to your dog and your goals in your own home! Our focus is on teaching the behaviors that are most important to you in a way that is easy and fun for both you and your dog. By opening the doors of communication and understanding, Blue Dog training packages go above and beyond teaching your dog basic obedience signals and provide you with a strong foundation of understanding what motivates your dog to do the things he or she does.

						What is different about In-Home Dog Training?
						Does your dog jump up on visitors at the door? We will teach your dog to go to a designated target spot (that you can take with you when you visit others with your very well-mannered dog) and stay there until you release him! Because he is learning behaviors such as this in the actual environment in which he will be expected to perform them, the learning is quicker, the behavior is more reliable and you and your visitors are much happier!

						This is just one of many behaviors that is better learned in a home environment than a classroom setting. Other advantages of In-Home training are one-on-one attention and focus on you and your dog. This allows us to find the best method to teach your dog each behavior instead of a classroom cookie-cutter approach. Additionally, because the focus is on you and you alone, clients have said that they are really motivated to “do their homework” (5 minutes twice a day is all it takes) so they can move forward at their next session. In group classes it can be easy to hide if you haven't practiced!
					</>
				}
				pricing={
					<>
						<p>
							Training sessions are for teaching basic obedience skills in situations where no identifiable behavior problems exist.
						</p>
						<ul>
							<li>
								Single 1-hour session: $140
							</li>
							<li>
								Package of three 1-hour sessions: $380 (Save $40)
							</li>
						</ul>

						<p>
							Training packages are prepaid, non-refundable, and non-transferable. If you need more sessions, custom packages are available.
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