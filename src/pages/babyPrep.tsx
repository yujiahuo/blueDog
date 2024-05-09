import bmodImg from '../images/kiwi.png';
import '../styles/services.css';
import ServicePage from '../components/servicePage';

export default function BabyPrep() {
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