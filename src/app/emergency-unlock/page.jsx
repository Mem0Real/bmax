"use client";

import React from "react";

import Alternating from "../components/Alternating";
import AlternateText from "../components/AlternateText";
import AlternateImage from "../components/AlternateImage";

import { emergencyData } from "@/data/solution";

import { useIcons } from "../components/CustomIcons";
import GenerateCard from "../components/GenerateCard";
import HoverCard from "../components/HoverCard";

export default function page() {
	const { UnlockIcon, CarIcon, PhoneIcon, TechIcon, MapIcon, KeyIcon } =
		useIcons();

	const cardList = [
		{
			icon: UnlockIcon,
			title: emergencyData.card1.header,
			detail: emergencyData.card1.text,
		},
		{
			icon: CarIcon,
			title: emergencyData.card2.header,
			detail: emergencyData.card2.text,
		},
		{
			icon: PhoneIcon,
			title: emergencyData.card3.header,
			detail: emergencyData.card3.text,
		},
		{
			icon: TechIcon,
			title: emergencyData.card4.header,
			detail: emergencyData.card4.text,
		},
		{
			icon: MapIcon,
			title: emergencyData.card5.header,
			detail: emergencyData.card5.text,
		},
		{
			icon: KeyIcon,
			title: emergencyData.card6.header,
			detail: emergencyData.card6.text,
		},
	];

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
			<div className="flex justify-center items-center">
				<h1 className="text-5xl">Count Animation</h1>
			</div>
			<div className="px-4 xl:px-44 grid grid-cols-1 md:grid-cols-2 gap-16 gap-x-24 md:gap-x-12">
				<GenerateCard list={cardList} />
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
