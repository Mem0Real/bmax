import React from "react";

import Alternating from "../components/Alternating";
import AlternateText from "../components/AlternateText";
import AlternateImage from "../components/AlternateImage";

import BackgroundCard from "../components/BackgroundCard";
import ExtrudeText from "../components/ExtrudeText";

import { fuelData } from "@/data/solution";

export default function page() {
	return (
		<div className="relative w-full flex flex-col">
			<div
				className=" min-h-screen bg-cover bg-bottom bg-no-repeat"
				style={{ backgroundImage: "url(/images/fuel-page/background.jpg)" }}
			>
				<div className="absolute inset-0 bg-black opacity-30" />

				<div className="relative w-full min-h-[50rem] flex flex-col justify-center items-center text-neutral-100 gap-10 md:gap-12 lg:gap-16">
					<Alternating>
						<AlternateText
							header={fuelData.landing.header}
							detail={fuelData.landing.text}
							address={fuelData.linkSrc}
							linkText={fuelData.linkText}
							light
						/>
						<AlternateImage img={`${fuelData.location}/landing.png`} />
					</Alternating>
				</div>
			</div>
			<div className="relative bg-white text-neutral-900 py-12 flex flex-col justify-center items-center gap-12">
				<div className="px-4 xl:px-40 w-full flex flex-col justify-center items-center gap-2 md:gap-8 lg:gap-0 ">
					<h1 className="text-3xl md:text-4xl font-medium uppercase text-center">
						{fuelData.headerText.header}
					</h1>
					<p className="text-base text-neutral-950 uppercase text-center">
						{fuelData.headerText.text}
					</p>
				</div>
				{/* cards */}
				<Alternating extrude={true}>
					<AlternateImage img={`${fuelData.location}/alt1.png`} />
					<AlternateText
						header={fuelData.alt1.header}
						detail={fuelData.alt1.text}
					>
						<ExtrudeText dropData={fuelData.dropData1} />{" "}
					</AlternateText>
				</Alternating>
				<Alternating extrude>
					<AlternateText
						header={fuelData.alt2.header}
						detail={fuelData.alt2.text}
					>
						<ExtrudeText dropData={fuelData.dropData2} />{" "}
					</AlternateText>
					<AlternateImage img={`${fuelData.location}/alt2.png`} />
				</Alternating>
				{/* background */}
				<div className="flex flex-col w-full justify-center items-center gap-5">
					<div className="xl:px-4 flex flex-col justify-center items-center gap-2 text-center md:text-balance">
						<h2 className="text-2xl md:text-3xl font-medium text-mellow capitalize">
							{fuelData.background.header}
						</h2>
						<p className="text-base text-neutral-900/80 text-center px-2 md:px-0 xl:px-8">
							{fuelData.background.detail}
						</p>
					</div>

					<BackgroundCard
						location={fuelData.location}
						data={fuelData.background.bgs}
					/>
				</div>
				<Alternating>
					<AlternateImage img={`${fuelData.location}/alt3.png`} />
					<AlternateText
						header={fuelData.alt3.header}
						detail={fuelData.alt3.text}
						linkText={fuelData.linkText}
						address={fuelData.linkSrc}
					/>
				</Alternating>
				<Alternating>
					<AlternateText
						header={fuelData.alt4.header}
						detail={fuelData.alt4.text}
						linkText={fuelData.linkText}
						address={fuelData.linkSrc}
					/>
					<AlternateImage img={`${fuelData.location}/alt4.png`} />
				</Alternating>
				<div className="px-4 xl:px-48 w-full flex flex-col justify-center items-stretch gap-2 pb-12">
					<ExtrudeText
						dropData={fuelData.dropData3}
						className="bg-neutral-200/80"
					/>
				</div>
			</div>
		</div>
	);
}
