import "./block8.scss";
import Card from "../Card/Card";

const Block8 = () => {
	return (
		<section className="block8">
			<div className="block8__wrapper_head">
				<div className="block8__heading block8__heading_3">The benefits</div>
				<div className="block8__heading block8__heading_2">
					Why do thousands of partners<br></br>work with
				</div>
				<div className="block8__heading block8__heading_1">HQD</div>
				<div className="block8__heading block8__heading_dot">.</div>
				<div className="block8__heading block8__heading_4">of partnership</div>
				<div className="block8__circle block8__circle_center"></div>
				<div className="block8__circle block8__circle_left"></div>
				<div className="block8__circle block8__circle_right"></div>
			</div>
			<div className="block8__wrapper_cards">
				<div className="block8__wrapper_card">
					<Card
						title={`TPD for all Europe`}
						descr={
							"HQD has TPD registration for all products in all EU countries, which allows you to start selling immediately"
						}
					/>
					<Card
						title={"Search fordistributors"}
						descr={
							" We are ready to work both with small clients who do not have many points of sale, and with large retail chains/filling stations/distributors"
						}
						left={true}
					/>
				</div>
			</div>
		</section>
	);
};

export default Block8;
