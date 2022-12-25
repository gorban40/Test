import "./Section.scss";
import Bar from "../Bar/Bar";
import sfera from "../../img/sfera.png";
import Form from "../Form/Form";

const Section = () => {
	return (
		<div className="section">
			<div className="section__wrapper_main">
				<div className="section__wrapper_block">
					<div className="section__block section__block_borderR section__block_borderB">
						<Bar
							first={"hqd"}
							second={"become a partner"}
							thrid={"official"}
							black={true}
						/>
					</div>
					<div className="section__block section__block_borderB">
						<Bar first={"hqd"} second={"become a partner"} thrid={"official"} />
					</div>
					<div className="section__block section__block_borderR section__block_borderB">
						<div className="section__asideHeading">hqd</div>
					</div>
					<div className="section__block section__block_borderB">
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
						<Bar
							first={"HQD"}
							second={"KING OF TASTE"}
							thrid={"OFFICIAL REPRESENTATIVE"}
							bottom={true}
						/>
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
		</div>
	);
};

export default Section;
