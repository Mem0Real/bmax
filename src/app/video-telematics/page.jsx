"use client";

import React from "react";

import Alternating from "../components/Alternating";
import AlternateText from "../components/AlternateText";
import AlternateImage from "../components/AlternateImage";
import GenerateCard from "../components/GenerateCard";

import { videoData } from "@/data/solution";
import { useIcons } from "../components/CustomIcons";
import BackgroundCard from "../components/BackgroundCard";

export default function Page() {
	const {
		SafetyIcon,
		GaugeIcon,
		ComplyIcon,
		DriverIcon,
		CostIcon,
		InsuranceIcon,
	} = useIcons();

	const iconList = [
		SafetyIcon,
		GaugeIcon,
		ComplyIcon,
		DriverIcon,
		CostIcon,
		InsuranceIcon,
	];
	return (
		<div className="relative w-full flex flex-col">
			<div
				className=" min-h-screen bg-cover bg-bottom bg-no-repeat"
				style={{ backgroundImage: "url(/images/video-page/background.jpg)" }}
			>
				<div className="absolute inset-0 bg-black opacity-50" />

				<div className="relative w-full min-h-[50rem] flex flex-col justify-center items-center text-neutral-100 gap-10 md:gap-12 lg:gap-16 py-12 lg:pt-0">
					<Alternating>
						<AlternateText
							header={videoData.landing.header}
							detail={videoData.landing.text}
							swap={true}
						/>
						<AlternateText
							detail={[videoData.alt.text1, videoData.alt.text2]}
						/>
					</Alternating>
				</div>
			</div>
			<div className="relative bg-white text-neutral-900 py-12 flex flex-col justify-center items-center gap-12">
				{/* background */}
				<div className="flex flex-col w-full justify-center items-center gap-5">
					<div className="xl:px-4 flex flex-col justify-center items-center gap-2 text-center md:text-balance">
						<h2 className="text-2xl md:text-3xl font-medium text-neutral-900 capitalize">
							{videoData.background.header}
						</h2>
						<p className="text-base text-neutral-900/80 text-center px-2 md:px-0 xl:px-8">
							{videoData.background.detail}
						</p>
					</div>

					<BackgroundCard
						location={videoData.location}
						data={videoData.background.bgs}
						light
					/>
				</div>
				<div className="w-full flex flex-col justify-center items-center py-6">
					<h1 className="text-2xl md:text-3xl font-medium text-center text-mellow">
						{videoData.headerText.header}
					</h1>
				</div>
				{/* cards */}
				<div className="w-full px-4 xl:px-40 flex justify-center xl:justify-evenly items-center gap-8 lg:gap-4 xl:gap-20 flex-wrap">
					<GenerateCard icons={iconList} data={videoData.cards} size="sm" />
				</div>
			</div>
		</div>
	);
}
