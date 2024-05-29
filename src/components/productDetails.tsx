interface IProductDetailsProps {
	id: string,
	content: JSX.Element,
}

export default function ProductDetails(props: IProductDetailsProps) {
	return  (
		<>
			<div id={props.id} className="detailsView">
				<div className="closeButton" onClick={() => {$("#" + props.id).css("display","none");} } >
				</div>
				
				{props.content}
			</div>
		</>
	)
}