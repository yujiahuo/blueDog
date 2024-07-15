interface IBannerProps {
	heading: string,
	details: string,
	additionalComponent?: JSX.Element
}

export default function Banner(props: IBannerProps) {
	return (
		<div className="banner">
			<h1>{props.heading}</h1>
			<p>{props.details}</p>
			{props.additionalComponent}
		</div>
	);
}