interface IProductDetailsProps {
	id: string,
	content: JSX.Element,
}

export default function ProductDetails(props: IProductDetailsProps) {
	return  (
		<>
			<div id={props.id} className="detailsView">
				<div className="productDetails card">
					<a href="#" className="closeButton" onClick={() => {$("#" + props.id).css("display","none");} } >
						<i className="fa-regular fa-circle-xmark"></i>
					</a>
				
					{props.content}
				</div>
			</div>
		</>
	)
}