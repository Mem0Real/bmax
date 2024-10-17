"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import Alternating from "../components/Alternating";
import AlternateText from "../components/AlternateText";
import AlternateImage from "../components/AlternateImage";

import BackgroundCard from "../components/BackgroundCard";
import GenerateCard from "../components/GenerateCard";

import { transportData } from "@/data/industry";
import { useIcons } from "../components/CustomIcons";

import { motion } from "framer-motion";

export default function Transport() {
	const { GraphIcon, ShippingIcon, ShieldIcon, TechnoIcon } = useIcons();

	const iconList = [GraphIcon, ShippingIcon, ShieldIcon, TechnoIcon];

	return (
		<div className="min-h-[90vh] my-auto flex flex-col justify-center items-center text-neutral-950 gap-10 md:gap-12 lg:gap-16 pt-12">
			<div className="px-4 xl:px-48 w-full flex flex-col md:flex-row justify-center items-center pt-8 md:py-2 gap-4 md:gap-8">
				<div className="basis-[40%] flex flex-col justify-center items-center md:items-start gap-4 md:gap-8">
					<h1 className="text-3xl md:text-4xl font-medium uppercase text-center md:text-start">
						{transportData.landing.header}
					</h1>
					<p className="text-base text-neutral-950/90">
						{transportData.landing.text}
					</p>
				</div>

				<div className="md:basis-[60%] relative w-full h-[20rem] md:h-[25rem] lg:h-[30rem]">
					<Image
						src={`/images/${transportData.location}/landing.png`}
						fill
						className="object-fill md:object-contain object-center absolute"
						alt={transportData.location}
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
				</div>
			</div>
			<div className="px-4 xl:px-48 w-full grid grid-cols-1 -mt-12 pb-12">
				<Link href={`/${transportData.address}`} className="col-start-1 w-fit">
					<motion.h1
						whileHover={{
							backgroundColor: "#DFA70C",
							color: "#FFF",
						}}
						className="px-12 py-3 border border-darkYellow text-darkYellow font-bold uppercase"
					>
						{transportData.linkText}
					</motion.h1>
				</Link>
			</div>

			<Alternating>
				<AlternateImage img={`${transportData.location}/alt1.png`} />
				<AlternateText
					header={transportData.alt1.header}
					detail={transportData.alt1.text}
					linkText={transportData.linkText}
					address={transportData.linkSrc}
				/>
			</Alternating>
			{/* cards */}
			<div className="w-full px-4 xl:px-40 flex justify-center xl:justify-evenly items-center gap-8 lg:gap-4 xl:gap-20 flex-wrap">
				<GenerateCard icons={iconList} data={transportData.cards} size="md" />
			</div>
			{/* background */}
			<div className="flex flex-col w-full justify-center items-center gap-2">
				<div className="xl:px-4 flex flex-col justify-center items-center gap-2 text-center md:text-balance">
					<h2 className="text-2xl md:text-3xl font-medium text-mellow capitalize">
						{transportData.background.header}
					</h2>
					<p className="text-base text-neutral-900/80 text-center px-2 md:px-0 xl:px-8">
						{transportData.background.detail}
					</p>
				</div>

				<BackgroundCard
					location={transportData.location}
					data={transportData.background.bgs}
					light={true}
				/>
			</div>
			<Alternating>
				<AlternateImage img={`${transportData.location}/alt2.png`} />
				<AlternateText
					header={transportData.alt2.header}
					detail={transportData.alt2.text}
					linkText={transportData.linkText}
					address={transportData.linkSrc}
				/>
			</Alternating>
			<Alternating>
				<AlternateText
					header={transportData.alt3.header}
					detail={transportData.alt3.text}
					linkText={transportData.linkText}
					address={transportData.linkSrc}
				/>
				<AlternateImage img={`${transportData.location}/alt3.png`} />
			</Alternating>
			<Alternating>
				<AlternateImage img={`${transportData.location}/alt4.png`} />
				<AlternateText
					header={transportData.alt4.header}
					detail={transportData.alt4.text}
					linkText={transportData.linkText}
					address={transportData.linkSrc}
				/>
			</Alternating>
		</div>
	);
}
