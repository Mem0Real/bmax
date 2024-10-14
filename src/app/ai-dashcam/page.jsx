"use client";
import React from "react";

import { aiDashData } from "@/data/solution";

import Alternating from "../components/Alternating";
import AlternateText from "../components/AlternateText";
import AlternateImage from "../components/AlternateImage";
import GenerateCard from "../components/GenerateCard";
import { useIcons } from "../components/CustomIcons";

import { Table } from "@mantine/core";

export default function Page() {
	const { ClockIcon, LockedIcon, WifiIcon, CycleIcon, MonitorIcon, BikeIcon } =
		useIcons();

	const iconList = [
		ClockIcon,
		LockedIcon,
		WifiIcon,
		CycleIcon,
		MonitorIcon,
		BikeIcon,
	];
	return (
		<div className="relative w-full flex flex-col">
			<div
				className=" min-h-screen bg-cover bg-bottom bg-no-repeat"
				style={{ backgroundImage: "url(/images/aidash-page/background.jpg)" }}
			>
				<div className="absolute inset-0 bg-black opacity-40" />

				<div className="relative w-full min-h-[50rem] flex flex-col justify-center items-center text-neutral-100 gap-10 md:gap-12 lg:gap-16">
					<Alternating>
						<AlternateText
							header={aiDashData.landing.header}
							detail={aiDashData.landing.text}
							address={aiDashData.linkSrc}
							linkText={aiDashData.linkText}
							swap={true}
						/>
						<AlternateImage img={`${aiDashData.location}/landing.png`} />
					</Alternating>
				</div>
			</div>
			<div className="relative bg-white text-neutral-900 py-12 flex flex-col justify-center items-center gap-6">
				<div className="w-full flex flex-col justify-center items-center gap-2 md:gap-8 lg:gap-0 ">
					<h1 className="text-3xl md:text-5xl font-bold uppercase text-center">
						{aiDashData.headerText1.header}
					</h1>
				</div>
				<Alternating>
					<AlternateImage img={`${aiDashData.location}/alt1.png`} />
					<AlternateText
						header={aiDashData.alt1.header}
						detail={[aiDashData.alt1.text1, aiDashData.alt1.text2]}
						linkText={aiDashData.linkText}
						address={aiDashData.linkSrc}
						dark
					/>
				</Alternating>
				<Alternating>
					<AlternateText
						header={aiDashData.alt2.header}
						detail={[aiDashData.alt2.text1, aiDashData.alt2.text2]}
						linkText={aiDashData.linkText}
						address={aiDashData.linkSrc}
						dark
					/>
					<AlternateImage img={`${aiDashData.location}/alt2.png`} />
				</Alternating>
				{/* Header1 */}
				<div className="w-full flex flex-col justify-center items-center gap-2 md:gap-8 lg:gap-0">
					<h1 className="text-3xl md:text-5xl font-bold uppercase text-center">
						{aiDashData.headerText2.header}
					</h1>
					<p className="text-base text-neutral-950/90 w-[90%] md:w-[60%] lg:w-auto text-center lg:text-balance">
						{aiDashData.headerText2.text}
					</p>
				</div>
				{/* cards */}
				<div className="w-full px-4 xl:px-40 flex justify-center xl:justify-evenly items-center gap-8 lg:gap-4 xl:gap-20 flex-wrap">
					<GenerateCard icons={iconList} data={aiDashData.cards} />
				</div>
				{/* header2 */}
				<div className="w-full flex flex-col justify-center items-center gap-2 md:gap-8 lg:gap-0 py-12">
					<h1 className="text-3xl md:text-5xl font-bold uppercase text-center">
						{aiDashData.headerText3.header}
					</h1>
					<p className="text-base text-neutral-950/90 w-[90%] md:w-[60%] lg:w-auto text-center lg:text-balance">
						{aiDashData.headerText3.text}
					</p>
				</div>
				{/* tabular data */}
			</div>
		</div>
	);
}
