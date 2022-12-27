import "./Block6.scss";
import Bar from "../Bar/Bar";
import sfera from "../../img/sfera.gif";
import Form from "../Form/Form";

const Section = () => {
	return (
		<section className="section">
			<div className="section__wrapper_main">
				<div className="section__wrapper_block">
					<div className="section__block section__block_borderR">
						<Bar
							first={"hqd"}
							second={"become a partner"}
							thrid={"perfectly matched"}
							black={true}
						/>
					</div>
					<div className="section__block ">
						<Bar first={"hqd"} second={"become a partner"} thrid={"official"} />
					</div>
					<div className="section__block section__block_borderR ">
						<div className="section__asideHeading">hqd</div>
					</div>
					<div className="section__block ">
						<div className="section__asideHeading section__asideHeading_left">
							official
						</div>
					</div>

					<div className="section__heading2">
						<div>
							We provide <span>free</span>
							<br></br>
							<span>samples</span> of our <br></br>
							products to future<br></br>
							partners
						</div>
					</div>
				</div>
				<div className="section__wrapper_block section__wrapper_block_bottom">
					<div className="section__block section__block_heading3 section__block_borderR section__block_borderB section__block_borderT">
						<div className="container">
							<div>
								<div className="heading3">
									Fill out the<br></br> form and we <br></br> will provide you
									<br></br> with samples <br></br> of our products <br></br> for
									free
								</div>
								<div className="heading4">
									so that you can appreciate our<br></br> high quality and
									unforgettable taste
								</div>
							</div>
						</div>
					</div>
					<div className="section__block section__block_borderB section__block_borderT"></div>
					<div className="section__block section__block_borderR">
						<div className="section__wrapper_bar">
							<div className="section__bar">HQD</div>
							<div className="section__bar">KING OF TASTE</div>
							<div className="section__bar">OFFICIAL REPRESENTATIVE</div>
						</div>
					</div>
					<div className="section__block"></div>
					<div className="section__form">
						<Form />
					</div>
				</div>

				<div className="section__sfera">
					<img src={sfera} alt="images of decoration(sfera)" />
				</div>
			</div>
		</section>
	);
};

export default Section;
