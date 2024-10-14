"use client";

import React from "react";

import { dashcamData } from "@/data/solution";

import Alternating from "../components/Alternating";
import AlternateText from "../components/AlternateText";
import AlternateImage from "../components/AlternateImage";

import { useIcons } from "../components/CustomIcons";
import GenerateCard from "../components/GenerateCard";

export default function Page() {
	const { ClockIcon, LockedIcon, WifiIcon, CycleIcon, SecureIcon, RiskIcon } =
		useIcons();

	const iconList = [
		ClockIcon,
		LockedIcon,
		WifiIcon,
		CycleIcon,
		SecureIcon,
		RiskIcon,
	];
	return (
		<div className="relative w-full flex flex-col">
			<div
				className="min-h-screen bg-cover bg-bottom bg-no-repeat"
				style={{ backgroundImage: "url(/images/dashcam-page/background.jpg)" }}
			>
				<div className="absolute inset-0 bg-black opacity-50" />

				<div className="relative w-full min-h-[50rem] flex flex-col justify-center items-center text-neutral-100 gap-10 md:gap-12 lg:gap-16">
					<Alternating>
						<AlternateText
							header={dashcamData.landing.header}
							detail={dashcamData.landing.text}
							swap
						/>
						<AlternateImage img={`${dashcamData.location}/landing.png`} />
					</Alternating>
				</div>
			</div>
			<div className="relative bg-white text-neutral-900 py-12 flex flex-col justify-center items-center gap-12">
				<Alternating>
					<AlternateImage img={`${dashcamData.location}/alt.png`} />
					<AlternateText
						header={dashcamData.landing.header}
						detail={dashcamData.landing.text}
						linkText={dashcamData.linkText}
						address={dashcamData.linkSrc}
					/>
				</Alternating>
				<div className="px-4 xl:px-40 w-full flex flex-col justify-center items-center gap-2 md:gap-8 lg:gap-0 ">
					<h1 className="text-3xl md:text-4xl font-medium uppercase text-center">
						{dashcamData.headerText.header}
					</h1>
					<p className="text-base text-neutral-900/90 text-center">
						{dashcamData.headerText.text}
					</p>
				</div>
				{/* cards */}
				<div className="w-full px-4 xl:px-40 flex justify-center xl:justify-evenly items-center gap-8 lg:gap-4 xl:gap-20 flex-wrap">
					<GenerateCard icons={iconList} data={dashcamData.cards} size="sm" />
				</div>
			</div>
		</div>
	);
}
