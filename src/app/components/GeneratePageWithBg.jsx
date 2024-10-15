"use client";
import React from "react";

import Alternating from "../components/Alternating";
import AlternateText from "../components/AlternateText";
import AlternateImage from "../components/AlternateImage";
import GenerateCard from "../components/GenerateCard";
import BackgroundCard from "../components/BackgroundCard";
import ExtrudeText from "./ExtrudeText";

export default function GeneratePageWithBg({
	iconList,
	data,
	type = "jpg",
	landingType = "jpg",
	size = "lg",
}) {
	return (
		<div className="relative w-full flex flex-col">
			<div
				className=" min-h-screen bg-cover bg-bottom bg-no-repeat"
				style={{
					backgroundImage: `url(/images/${data.location}/background.${type})`,
				}}
			>
				<div className="absolute inset-0 bg-black opacity-75" />

				<div className="relative w-full min-h-[50rem] flex flex-col justify-center items-center text-neutral-100 gap-10 md:gap-12 lg:gap-16">
					<Alternating>
						<AlternateText
							header={data.landing.header}
							detail={data.landing.text}
							address={data.linkSrc}
							linkText={data.linkText}
							swap={true}
						/>
						<AlternateImage img={`${data.location}/landing.${landingType}`} />
					</Alternating>
				</div>
			</div>
			<div className="relative bg-white text-neutral-900 py-12 flex flex-col justify-center items-center gap-12">
				<div className="w-full flex flex-col justify-center items-center gap-2 md:gap-8 lg:gap-0 ">
					<h1 className="text-3xl md:text-4xl font-medium uppercase text-center">
						{data.headerText.header}
					</h1>
					<p className="text-xl text-neutral-950 px-4 xl:px-40 text-center">
						{data.headerText.text}
					</p>
				</div>
				{/* cards */}
				<div className="w-full px-4 xl:px-40 flex justify-center xl:justify-evenly items-center gap-8 lg:gap-4 xl:gap-20 flex-wrap">
					<GenerateCard icons={iconList} data={data.cards} size={size} />
				</div>
				{/* background */}
				<div className="flex flex-col w-full justify-center items-center gap-5">
					<div className="xl:px-4 flex flex-col justify-center items-center gap-2 text-center md:text-balance">
						{data.background.header && (
							<h2 className="text-2xl md:text-3xl font-medium text-mellow capitalize">
								{data.background.header}
							</h2>
						)}
						{data.background.detail && (
							<p className="text-base text-neutral-900/80 text-center px-2 md:px-0 xl:px-8">
								{data.background.detail}
							</p>
						)}
					</div>

					<BackgroundCard location={data.location} data={data.background.bgs} />
				</div>
				{data.alt1 && (
					<Alternating>
						<AlternateImage img={`${data.location}/alt1.png`} />
						<AlternateText
							header={data.alt1.header}
							detail={data.alt1.text}
							linkText={data.linkText}
							address={data.linkSrc}
						/>
					</Alternating>
				)}
				{data.alt2 && (
					<Alternating>
						<AlternateText
							header={data.alt2.header}
							detail={data.alt2.text}
							linkText={data.linkText}
							address={data.linkSrc}
						/>
						<AlternateImage img={`${data.location}/alt2.png`} />
					</Alternating>
				)}
				{data.alt3 && (
					<Alternating>
						<AlternateImage img={`${data.location}/alt3.png`} />
						<AlternateText
							header={data.alt3.header}
							detail={data.alt3.text}
							linkText={data.linkText}
							address={data.linkSrc}
						/>
					</Alternating>
				)}

				{data.dropData && (
					<div className="px-4 xl:px-48 w-full flex flex-col justify-center items-stretch gap-2 pb-12">
						<ExtrudeText
							dropData={data.dropData}
							className="bg-neutral-200/80"
						/>
					</div>
				)}
			</div>
		</div>
	);
}
