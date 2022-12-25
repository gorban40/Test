import "./form.scss";
import poland from "../../img/poland.png";

const Form = () => {
	return (
		<form className="form">
			<div className="form__heading">
				<div>
					Interested<br></br> in a partnership?
				</div>
				<div className="stick"></div>
			</div>
			<div className="form__wrapper">
				<div className="form__wrapper_input">
					<label htmlFor="" className="form__label">
						your Name <span>*</span>
					</label>
					<input type="text" id="name" className="form__input" />
				</div>
				<div className="form__wrapper_input">
					<label htmlFor="" className="form__label form__label_phone">
						<div>
							+48 516 671 635 <span>*</span>
						</div>
						<div>
							<img src={poland} alt="countries" />
						</div>
					</label>
					<input type="text" id="phone" className="form__input" />
				</div>
				<div className="form__wrapper_inputs">
					<div className="form__wrapper_input form__wrapper_input_w40">
						<label htmlFor="" className="form__label">
							country
						</label>
						<input type="text" id="counrty" className="form__input " />
					</div>
					<div className="form__wrapper_input form__wrapper_input_w40 ">
						<label htmlFor="" className="form__label">
							Name company
						</label>
						<input type="text" id="nameCompany" className="form__input" />
					</div>
				</div>
				<div className="form__wrapper_input">
					<label htmlFor="" className="form__label">
						your email <span>*</span>
					</label>
					<input type="email" id="email" className="form__input" />
				</div>
				<div className="form__button">
					<button>
						<div className="form__button_content">
							<div className="form__button_text">Become a partner</div>
							<div className="form__button_arrow"></div>
						</div>
					</button>
				</div>
			</div>
		</form>
	);
};

export default Form;
