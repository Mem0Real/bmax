"use client";
import React from "react";

import { bikeGpsData } from "@/data/solution";

import Alternating from "../components/Alternating";
import AlternateText from "../components/AlternateText";
import AlternateImage from "../components/AlternateImage";
import GenerateCard from "../components/GenerateCard";
import { useIcons } from "../components/CustomIcons";
import BackgroundCard from "../components/BackgroundCard";
import ExtrudeText from "../components/ExtrudeText";

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
				style={{ backgroundImage: "url(/images/bike-page/background.jpg)" }}
			>
				<div className="absolute inset-0 bg-black opacity-75" />

				<div className="relative w-full min-h-[50rem] flex flex-col justify-center items-center text-neutral-100 gap-10 md:gap-12 lg:gap-16">
					<Alternating>
						<AlternateText
							header={bikeGpsData.landing.header}
							detail={bikeGpsData.landing.text}
							address={bikeGpsData.linkSrc}
							linkText={bikeGpsData.linkText}
							swap={true}
						/>
						<AlternateImage img={`${bikeGpsData.location}/landing.jpg`} />
					</Alternating>
				</div>
			</div>
			<div className="relative bg-white text-neutral-900 py-12 flex flex-col justify-center items-center gap-12">
				<div className="w-full flex flex-col justify-center items-center gap-2 md:gap-8 lg:gap-0 ">
					<h1 className="text-3xl md:text-4xl font-medium uppercase text-center">
						{bikeGpsData.headerText.header}
					</h1>
					<p className="text-xl text-neutral-950 uppercase">
						{bikeGpsData.headerText.text}
					</p>
				</div>
				{/* cards */}
				<div className="w-full px-4 xl:px-40 flex justify-center xl:justify-evenly items-center gap-8 lg:gap-4 xl:gap-20 flex-wrap">
					<GenerateCard icons={iconList} data={bikeGpsData.cards} />
				</div>
				{/* background */}
				<div className="flex flex-col w-full justify-center items-center gap-5">
					<div className="xl:px-4 flex flex-col justify-center items-center gap-2 text-center md:text-balance">
						<h2 className="text-2xl md:text-3xl font-medium text-mellow capitalize">
							{bikeGpsData.background.header}
						</h2>
						<p className="text-base text-neutral-900/80 text-center px-2 md:px-0 xl:px-8">
							{bikeGpsData.background.detail}
						</p>
					</div>

					<BackgroundCard
						location={bikeGpsData.location}
						data={bikeGpsData.background.bgs}
					/>
				</div>
				<Alternating>
					<AlternateImage img={`${bikeGpsData.location}/alt1.png`} />
					<AlternateText
						header={bikeGpsData.alt1.header}
						detail={bikeGpsData.alt1.text}
						linkText={bikeGpsData.linkText}
						address={bikeGpsData.linkSrc}
					/>
				</Alternating>
				<Alternating>
					<AlternateText
						header={bikeGpsData.alt2.header}
						detail={bikeGpsData.alt2.text}
						linkText={bikeGpsData.linkText}
						address={bikeGpsData.linkSrc}
					/>
					<AlternateImage img={`${bikeGpsData.location}/alt2.png`} />
				</Alternating>
				<div className="px-4 xl:px-48 w-full flex flex-col justify-center items-stretch gap-2 pb-12">
					<ExtrudeText
						dropData={bikeGpsData.dropData}
						className="bg-neutral-200/80"
					/>
				</div>
			</div>
		</div>
	);
}
