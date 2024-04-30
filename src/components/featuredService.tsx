interface IFeaturedServiceProps {
	imageSrc: string,
	heading: string,
	description: string,
	mainContent: JSX.Element,
	buttonUrl: string
}

export default function FeaturedService(props: IFeaturedServiceProps) {
	return (
		<div className="featuredService appearOnScroll">
			<div className="serviceImageContainer">
				<img src={props.imageSrc} />
			</div>
			<div className="serviceContent">
				<h2>{props.heading}</h2>
				<p className="description">{props.description}</p>
				<div className="border"></div>
				<div className="blurb">
					{props.mainContent}
				</div>
				<div className="buttonContainer">
					<a href={props.buttonUrl} className="button">Learn More</a>
				</div>
			</div>
		</div>
	);
}