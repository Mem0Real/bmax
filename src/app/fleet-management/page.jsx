import React from "react";
import { fleetData } from "@/data/solution";

import Alternating from "../components/Alternating";
import AlternateText from "../components/AlternateText";
import AlternateImage from "../components/AlternateImage";
import ExtrudeText from "../components/ExtrudeText";
import CustomBgCard from "./CustomBgCard";

import { raj } from "@/app/ui/fonts";

export default function FleetManagement() {
	return (
		<div className="min-h-[90vh] my-auto flex flex-col justify-center items-center text-neutral-950 gap-10 md:gap-12 lg:gap-16 pt-12">
			<Alternating>
				<AlternateText
					header={fleetData.landing.header}
					detail={fleetData.landing.text}
					address={fleetData.linkSrc}
					linkText={fleetData.linkText}
				/>
				<AlternateImage img={`${fleetData.location}/landing.png`} />
			</Alternating>
			<div className="w-full flex flex-col justify-center items-center gap-2 md:gap-8 lg:gap-0">
				<p className={`text-xl text-neutral-950 text-center`}>
					{fleetData.headerText1.text}
				</p>
				<h1
					className={`text-3xl md:text-4xl font-medium uppercase text-center ${raj.className}`}
				>
					{fleetData.headerText1.header}
				</h1>
			</div>
			<Alternating extrude>
				<AlternateImage img={`${fleetData.location}/alt1.png`} />
				<AlternateText
					header={fleetData.alt1.header}
					detail={fleetData.alt1.text}
					address={fleetData.linkSrc}
					linkText={fleetData.linkText}
				>
					<ExtrudeText dropData={fleetData.dropData1} />
				</AlternateText>
			</Alternating>
			<Alternating extrude>
				<AlternateText
					header={fleetData.alt2.header}
					detail={fleetData.alt2.text}
					address={fleetData.linkSrc}
					linkText={fleetData.linkText}
				>
					<ExtrudeText dropData={fleetData.dropData2} />
				</AlternateText>
				<AlternateImage img={`${fleetData.location}/alt2.png`} />
			</Alternating>

			<div className="flex flex-col w-full justify-center items-center gap-5">
				<div className="xl:px-4 flex flex-col justify-center items-center gap-2 text-center md:text-balance">
					<h3
						className={`text-base md:text-lg text-neutral-900 font-medium text-center`}
					>
						{fleetData.headerText2.text}
					</h3>
					<h2
						className={`text-2xl md:text-3xl font-medium text-mellow capitalize ${raj.className}`}
					>
						{fleetData.headerText2.header}
					</h2>
				</div>

				<CustomBgCard location={fleetData.location} data={fleetData.bgs} />
			</div>
		</div>
	);
}
