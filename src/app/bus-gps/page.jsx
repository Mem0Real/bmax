"use client";
import React from "react";

import { busGpsData } from "@/data/solution";

import Alternating from "../components/Alternating";
import AlternateText from "../components/AlternateText";
import AlternateImage from "../components/AlternateImage";
import GenerateCard from "../components/GenerateCard";
import BackgroundCard from "../components/BackgroundCard";
import ExtrudeText from "../components/ExtrudeText";

import { useIcons } from "../components/CustomIcons";

import { raj } from "@/app/ui/fonts";

export default function Page() {
	const {
		ClockIcon,
		LockedIcon,
		RouteIcon,
		BusIcon,
		IntegrateIcon,
		EfficientIcon,
	} = useIcons();

	const iconList = [
		ClockIcon,
		LockedIcon,
		RouteIcon,
		BusIcon,
		IntegrateIcon,
		EfficientIcon,
	];

	return (
		<div className="relative w-full flex flex-col">
			<div
				className="w-full h-[30rem] bg-cover bg-top bg-no-repeat"
				style={{ backgroundImage: "url(/images/bus-page/background.webp)" }}
			>
				<div className="absolute inset-0 bg-black opacity-35" />

				<div className="relative w-full h-full grid grid-cols-6 grid-flow-row text-neutral-100">
					<div className="col-start-2 col-span-3 place-content-center space-y-3">
						<h1
							className={`text-2xl md:text-6xl font-bold uppercase ${raj.className}`}
						>
							{busGpsData.landing.header}
						</h1>
						<p className="text-nutral-200/80 text-base md:text-xl">
							{busGpsData.landing.text}
						</p>
					</div>
				</div>
			</div>
			<div className="relative bg-white text-neutral-900 py-12 flex flex-col justify-center items-center gap-12">
				<div className="px-4 xl:px-40 w-full flex flex-col justify-center items-center gap-2 md:gap-8 lg:gap-0 ">
					<h1
						className={`text-3xl md:text-4xl font-medium uppercase text-center ${raj.className}`}
					>
						{busGpsData.headerText.header}
					</h1>
					<p className="text-lg text-neutral-900/90 text-center">
						{busGpsData.headerText.text}
					</p>
				</div>
				{/* cards */}
				<div className="w-full px-4 xl:px-40 flex justify-center xl:justify-evenly items-center gap-8 lg:gap-4 xl:gap-20 flex-wrap">
					<GenerateCard icons={iconList} data={busGpsData.cards} size="md" />
				</div>
				{/* background */}
				<div className="flex flex-col w-full justify-center items-center gap-5">
					<div className="xl:px-4 flex flex-col justify-center items-center gap-2 text-center md:text-balance">
						<h2
							className={`text-3xl md:text-5xl font-bold text-mellow capitalize ${raj.className}`}
						>
							{busGpsData.background.header}
						</h2>
						<p className="text-base text-neutral-900/80 text-center px-2 md:px-0 xl:px-8 font-medium">
							{busGpsData.background.detail}
						</p>
					</div>

					<BackgroundCard
						location={busGpsData.location}
						data={busGpsData.background.bgs}
					/>
				</div>
				<Alternating>
					<AlternateImage img={`${busGpsData.location}/alt1.webp`} />
					<AlternateText
						header={busGpsData.alt1.header}
						detail={busGpsData.alt1.text}
						linkText={busGpsData.linkText}
						address={busGpsData.linkSrc}
					/>
				</Alternating>
				<Alternating>
					<AlternateText
						header={busGpsData.alt2.header}
						detail={busGpsData.alt2.text}
						linkText={busGpsData.linkText}
						address={busGpsData.linkSrc}
					/>
					<AlternateImage img={`${busGpsData.location}/alt2.webp`} />
				</Alternating>
				<div className="px-4 xl:px-48 w-full flex flex-col justify-center items-stretch gap-2 pb-12">
					<ExtrudeText
						dropData={busGpsData.dropData}
						className="bg-neutral-200/80"
					/>
				</div>
			</div>
		</div>
	);
}
