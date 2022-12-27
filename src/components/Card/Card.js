import "./Card.scss";

const Card = (props) => {
	let classNameRightPositon = "card"; //* deafult value: left */
	if (props.left) {
		classNameRightPositon = "card_left";
	}
	return (
		<div className={classNameRightPositon}>
			<div className="card__wrapper">
				<div className="card__wrapper_head">
					<div className="card__heading">{props.title}</div>
					<div className="card__dot"></div>
				</div>
				<div className="card__descr">
					<p>{props.descr}</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
