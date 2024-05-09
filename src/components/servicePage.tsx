import CallButton from "./callButton";

interface IServicePageProps {
	imageSrc: string,
	serviceName: string,
	location: string,
	time: string,
	forWhom: string,
	aboutService: JSX.Element,
	pricing: JSX.Element,
	resources?: {displayName: string, url: string}[],
	testimonials?: {text: string, attribution?: string}[]
}

export default function ServicePage(props: IServicePageProps) {
	return (
		<div className="servicePage">
			<div className="headingArea">
				<h1>{props.serviceName}</h1>
				<div className="quickInfo">
					<div className="infoBit">
						<i className="fa-solid fa-location-dot"></i>
						{props.location}
					</div>
					<div className="infoBit">
						<i className="fa-solid fa-clock"></i>
						{props.time}
					</div>
					<div className="infoBit">
						<i className="fa-solid fa-paw"></i>
						{props.forWhom}
					</div>
				</div>
			</div>
			<div className="pageContent">
				<div className="aboutSection">
					<div className="photo">
						<img src={props.imageSrc} />
					</div>
					<div className="content">
						<h2>The service</h2>
						{props.aboutService}
					</div>
				</div>
				<div className="pricing content">
					<h2>Pricing</h2>
					{props.pricing}
				</div>
				<div className="nextSteps">
					<div className="callButton">
						<CallButton />
					</div>
					<div className="content">
						<h2>Resources we like</h2>
						{props.resources?.map((resource, index) => (
							<a href={resource.url} key={index}>{resource.displayName}</a>
						))}
					</div>
				</div>
			</div>
			<div className="testimonials">
				<div className="testimonialContent">
					<h2>Testimonials</h2>
					<div className="testimonialGroup">
						{props.testimonials?.map((testimony,index) => (
							<div className="oneTestimony content" key={index}>
								<p>
									{testimony.text}
								</p>
								<p>
									{testimony.attribution}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}