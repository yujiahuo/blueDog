import bmodImg from '../images/kiwi.png';
import '../styles/services.css';
import ServicePage from '../components/servicePage';

export default function BehaviorAssessment() {
	return (
		<>
			<ServicePage
				imageSrc={bmodImg}
				serviceName=''
				location="At Sarah's or virtual"
				time=''
				forWhom=''
				aboutService={
					<>
						
					</>
				}
				pricing={
					<>
						
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