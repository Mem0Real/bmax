"use client";

import React from "react";

import Alternating from "../components/Alternating";
import AlternateText from "../components/AlternateText";
import AlternateImage from "../components/AlternateImage";

import { emergencyData } from "@/data/solution";

import { useIcons } from "../components/CustomIcons";
import GenerateCard from "../components/GenerateCard";
import HoverCard from "../components/HoverCard";
import AnimatedCounter from "../components/AnimatedCounter";

export default function page() {
	const { UnlockIcon, CarIcon, PhoneIcon, TechIcon, MapIcon, KeyIcon } =
		useIcons();

	const iconList = [UnlockIcon, CarIcon, PhoneIcon, TechIcon, MapIcon, KeyIcon];

	return (
		<div className="w-full my-auto flex flex-col justify-center items-center text-neutral-900 gap-10 md:gap-12 lg:gap-16 pt-8">
			<Alternating>
				<AlternateText
					header={emergencyData.landing.header}
					detail={emergencyData.landing.text}
					address={emergencyData.linkSrc}
					linkText={emergencyData.linkText}
				/>
				<AlternateImage img={`${emergencyData.location}/landing.jpg`} />
			</Alternating>
			{/* counter */}
			<div className="px-4 xl:px-40 w-full xl:w-1/2 flex flex-col md:flex-row justify-center xl:justify-between items-center gap-8 xl:gap-10 pb-8">
				{emergencyData.counter.map(({ number, symbol, text }, index) => {
					return (
						<div
							key={index}
							className="flex flex-col justify-center items-center"
						>
							<h1 className="text-6xl lg:text-6xl font-mono font-black">
								<AnimatedCounter from={0} to={number} />
								{symbol}
							</h1>
							<p className="w-full text-neutral-900 text-2xl font-semibold uppercase text-center">
								{text}
							</p>
						</div>
					);
				})}
			</div>
			<div className="w-full px-4 xl:px-44 grid grid-cols-1 md:grid-cols-2 gap-16 gap-x-24 md:gap-x-12 ">
				<GenerateCard icons={iconList} data={emergencyData.cards} />
			</div>
			<div className="w-full flex flex-col justify-center items-center py-8">
				<HoverCard location={emergencyData.location} />
			</div>
			<Alternating>
				<AlternateImage img={`${emergencyData.location}/alt1.png`} />
				<AlternateText
					header={emergencyData.alt1.header}
					detail={emergencyData.alt1.text}
					address={emergencyData.linkSrc}
					linkText={emergencyData.linkText}
				/>
			</Alternating>
			<Alternating>
				<AlternateText
					header={emergencyData.alt2.header}
					detail={emergencyData.alt2.text}
					address={emergencyData.linkSrc}
					linkText={emergencyData.linkText}
				/>
				<AlternateImage img={`${emergencyData.location}/alt2.png`} />
			</Alternating>
		</div>
	);
}
