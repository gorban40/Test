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
						title={`TPD for \n all Europe`}
						descr={
							"HQD has TPD \n registration for all \n products in all EU \n countries, which allows \n you to start selling \n immediately"
						}
						headingWidth={100}
						descrWidth={216}
					/>
					<Card
						title={`Very high \n margin`}
						descr={
							"The high margin \n of the product allows \n our partners to get the \n maximum profit"
						}
						left={true}
						headingWidth={101}
						descrWidth={214}
					/>
				</div>
				<div className="block8__wrapper_card">
					<Card
						title={`Search for \n distributors`}
						descr={
							"We are ready to work both \n with small clients who \n do not have many points \n of sale, and with large retail \n chains/filling stations/\ndistributors"
						}
						headingWidth={123}
						descrWidth={246}
					/>
					<Card
						title={"Large warehouse \n in the EU"}
						descr={
							"We have a large stock \n of products in our \n warehouse in Poland,\n thanks to which we are\n able to supply our\n customers with goods\n without interruption.\n The stock is regularly\n replenished"
						}
						left={true}
						headingWidth={195}
						descrWidth={214}
					/>
				</div>
				<div className="block8__wrapper_card">
					<Card
						title={`Guarantee`}
						descr={
							"Our products undergo \n multi-level quality\n control and have a\n minimal defect rate.\n We have no problem\n replacing defects"
						}
						headingWidth={123}
						descrWidth={246}
					/>
					<Card
						title={"Shipping"}
						descr={
							"We can deliver\n anywhere in Europe\n from 24 hours from the\n time we receive your\n order. We have\n contracts for delivery\n by plane and overland\n transport"
						}
						left={true}
						headingWidth={195}
						descrWidth={214}
					/>
				</div>
				<div className="block8__wrapper_card">
					<Card
						title={`Marketing`}
						descr={
							"Support of sales outlets\n with promotional\n materials and stands"
						}
						headingWidth={123}
						descrWidth={246}
					/>
					<Card
						title={"Support"}
						descr={
							"Our partners receive\n marketing support that\n increases sales"
						}
						left={true}
						headingWidth={195}
						descrWidth={214}
					/>
				</div>
			</div>
		</section>
	);
};

export default Block8;
