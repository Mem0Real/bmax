"use client";

import React, { useEffect, useState } from "react";
import { Carousel, CarouselSlide } from "@mantine/carousel";
import { useIcons } from "@/app/components/CustomIcons";

import {
	AnimatePresence,
	cubicBezier,
	motion,
	useAnimate,
} from "framer-motion";

export default function VidSlide() {
	const { LeftArrowIcon, RightArrowIcon } = useIcons();

	const [anim, setAnim] = useState(false);

	const [scope, animate] = useAnimate();

	const sequence = [
		[
			"h1",
			anim ? { width: 0 } : { width: "150%" },
			{
				duration: 0.5,
				ease: [0.4, 0.3, 0.2, 0.1],
			},
		],
		[
			"h2",
			anim ? { width: "100%" } : { width: 0 },
			{
				duration: 0.7,
				ease: [0.1, 0.2, 0.3, 0.4],
			},
		],
	];

	// useEffect(() => {
	// 	animate(sequence);
	// }, [anim]);

	const easing = cubicBezier(0.52, 1.03, 0.64, 0.99);

	return (
		<div className="w-full min-h-screen bg-slate-500 text-neutral-200 flex flex-col justify-center items-center relative">
			{/* <Carousel
				withIndicators
				loop
				slideSize="100%"
				height="100vh"
				nextControlIcon={RightArrowIcon}
				previousControlIcon={LeftArrowIcon}
			>
				<CarouselSlide></CarouselSlide>
				<CarouselSlide>2</CarouselSlide>
				<CarouselSlide>3</CarouselSlide>
			</Carousel> */}

			<div className="flex justify-between items-center px-24 w-full">
				<button onClick={() => setAnim(!anim)} className="text-yellow-400 w-4">
					{LeftArrowIcon}
				</button>
				<button onClick={() => setAnim(!anim)} className="text-yellow-400 w-4">
					{RightArrowIcon}
				</button>
			</div>

			{/* Animate */}
			{/* <div className="relative w-fit flex flex-col gap-3" ref={scope}>
				<motion.h1
					initial={{ width: 0 }}
					exit={{ width: 0 }}
					className="text-end overflow-hidden whitespace-nowrap bg-white text-black text-8xl font-bold py-5"
				>
					Car Key
				</motion.h1>
				<motion.h1
					initial={{ width: 0 }}
					exit={{ width: 0 }}
					className="text-end overflow-hidden whitespace-nowrap bg-white text-black text-8xl font-bold py-5"
				>
					Services
				</motion.h1>

				<motion.h2
					initial={{ width: "100%" }}
					exit={{ width: "100%" }}
					className="mt-8 text-end overflow-hidden whitespace-nowrap bg-black text-white text-4xl font-bold py-2"
				>
					Load More
				</motion.h2>
			</div> */}

			<div className="relative">
				<span className="grid grid-rows-2 gap-3 text-black text-7xl font-semibold  tracking-tighter">
					<motion.div
						initial={{ width: 0, x: 0 }}
						animate={anim ? { width: "100%", x: -50 } : { width: 0 }}
						exit={{ width: 0, x: 0 }}
						transition={{
							duration: 0.4,
							ease: "easeIn",
						}}
						className="overflow-hidden whitespace-nowrap bg-white py-4"
					>
						<motion.h1
							initial={{ x: 40 }}
							animate={anim ? { x: 0 } : { x: 40 }}
							exit={{ x: 40 }}
							transition={{
								duration: 0.4,
								ease: "easeIn",
							}}
							className="text-start px-1"
						>
							Car Key
						</motion.h1>
					</motion.div>
					<motion.div
						initial={{ width: 0, x: 0 }}
						animate={anim ? { width: "110%", x: -50 } : { width: 0 }}
						exit={{ width: 0, x: 0 }}
						transition={{
							delay: 0.2,
							duration: 0.5,
							// ease: "easeInOut",
							ease: easing,
						}}
						className="overflow-hidden whitespace-nowrap bg-white py-4"
					>
						<motion.h1
							initial={{ x: 60 }}
							animate={anim ? { x: 0 } : { x: 60 }}
							exit={{ x: 60 }}
							transition={{
								duration: 0.5,
								// ease: "easeInOut",
								ease: easing,
							}}
							className="text-start px-1"
						>
							Services
						</motion.h1>
					</motion.div>
				</span>
				{/* <span className="-mt-48 grid grid-rows-2 gap-3 text-black text-7xl font-semibold  tracking-tighter">
					<motion.div
						initial={{ width: 0, x: 0 }}
						animate={!anim ? { width: "100%", x: -50 } : { width: 0 }}
						exit={{ width: 0, x: 0 }}
						transition={{
							delay: 6,
							duration: 0.4,
							ease: "easeIn",
						}}
						className="overflow-hidden whitespace-nowrap bg-white py-4"
					>
						<motion.h1
							initial={{ x: 40 }}
							animate={!anim ? { x: 0 } : { x: 40 }}
							exit={{ x: 40 }}
							transition={{
								duration: 0.4,
								ease: "easeIn",
							}}
							className="text-start px-1"
						>
							Servicing
						</motion.h1>
					</motion.div>
					<motion.div
						initial={{ width: 0, x: 0 }}
						animate={!anim ? { width: "110%", x: -50 } : { width: 0 }}
						exit={{ width: 0, x: 0 }}
						transition={{
							delay: 0.2,
							duration: 0.5,
							// ease: "easeInOut",
							ease: easing,
						}}
						className="overflow-hidden whitespace-nowrap bg-white py-4"
					>
						<motion.h1
							initial={{ x: 60 }}
							animate={!anim ? { x: 0 } : { x: 60 }}
							exit={{ x: 60 }}
							transition={{
								duration: 0.5,
								// ease: "easeInOut",
								ease: easing,
							}}
							className="text-start px-1"
						>
							Car Keys
						</motion.h1>
					</motion.div>
				</span> */}
				{/* First text */}
				{/* <div className="absolute -top-36 -right-3 flex flex-col justify-between items-center gap-2 py-3 text-black text-7xl font-semibold text-center tracking-tighter">
					<motion.div
						initial={{ width: 0, x: 0 }}
						animate={anim ? { width: "100%", x: -50 } : { width: 0 }}
						exit={{ width: 0, x: 0 }}
						transition={{
							duration: 0.4,
							ease: "easeIn",
						}}
						className="overflow-hidden whitespace-nowrap bg-white py-4"
					>
						<motion.h1
							initial={{ x: 30 }}
							animate={anim ? { x: 0 } : { x: 30 }}
							exit={{ x: 30 }}
							transition={{
								duration: 0.4,
								ease: "easeIn",
							}}
							className="text-start px-1"
						>
							Car Key
						</motion.h1>
					</motion.div>
					<motion.div
						initial={{ width: 0, x: 0 }}
						animate={anim ? { width: "110%", x: -50 } : { width: 0 }}
						exit={{ width: 0, x: 0 }}
						transition={{
							delay: 0.2,
							duration: 0.5,
							ease: "easeInOut",
						}}
						className="overflow-hidden whitespace-nowrap bg-white py-4"
					>
						<motion.h1
							initial={{ x: 30 }}
							animate={anim ? { x: 0 } : { x: 30 }}
							exit={{ x: 30 }}
							transition={{
								duration: 0.5,
								ease: "easeInOut",
							}}
							className="text-start px-1"
						>
							Services
						</motion.h1>
					</motion.div>
				</div> */}
				{/* Second text */}
				{/* <div className="absolute -top-36 left-8 w-fit">
					<motion.div
						initial={{ width: 0 }}
						animate={!anim ? { width: "110%" } : { width: 0 }}
						exit={{ width: 0 }}
						transition={{ duration: 0.5, ease: [0.4, 0.3, 0.2, 0.1] }}
						className="text-end overflow-hidden whitespace-nowrap bg-white text-black"
					>
						<motion.h2
							initial={{ x: 30 }}
							animate={!anim ? { x: 0 } : { x: 30 }}
							exit={{ x: 30 }}
							transition={{
								duration: 0.5,
								ease: [0.4, 0.3, 0.2, 0.1],
							}}
							className="text-8xl font-extrabold"
						>
							RIght Now!
						</motion.h2>
					</motion.div>
				</div> */}
			</div>
		</div>
	);
}
