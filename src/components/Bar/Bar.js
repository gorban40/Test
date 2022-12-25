import "./Bar.scss";

const Bar = (props) => {
	let classNamePositon = "bar"; // ----> posiotn div in bottom or top(default: top)
	if (props.bottom) {
		classNamePositon = "bar_bottom";
	}
	let classNameItem = "bar__item"; // -----> color text of item (default: grey)
	if (props.black) {
		classNameItem = "bar__item_black";
	}
	return (
		<div className={classNamePositon}>
			<div className="container">
				<div className="bar__block">
					<div className="bar__item">{props.first}</div>
					<div className={classNameItem}>{props.second}</div>
					<div className="bar__item">{props.thrid}</div>
				</div>
			</div>
		</div>
	);
};
export default Bar;
