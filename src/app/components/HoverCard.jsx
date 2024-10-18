"use client";

import React, { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { emergencyData } from "@/data/solution";

import { Rajdhani, Raleway } from "next/font/google";

const raleway = Raleway({
	weight: ["300", "400", "500", "700"],
	style: ["normal"],
	subsets: ["latin"],
});

const raj = Rajdhani({
	weight: ["300", "400", "500", "700"],
	style: ["normal"],
	subsets: ["latin"],
});

export default function HoverCard({ location }) {
	const [hovered, setHovered] = useState(null);

	return (
		<div className="px-4 xl:px-44 w-full flex flex-col md:flex-row justify-center items-center gap-2 lg:gap-4 overflow-hidden">
			<AnimatePresence>
				{emergencyData.hovering.map(({ header, text }, index) => {
					let count = index + 1;
					return (
						<motion.div
							key={index}
							className="flex flex-col justify-center items-center gap-8 cursor-auto"
							onHoverStart={() => setHovered(count)}
							onHoverEnd={() => setHovered(0)}
						>
							<motion.div
								className="overflow-hidden w-full h-[320px] relative"
								initial={{ scale: 0.9 }}
								animate={hovered === count ? { scale: 1 } : { scale: 0.9 }}
								transition={{ ease: "easeInOut" }}
							>
								<Image
									src={`/images/${location}/bg${count}.jpg`}
									alt={`bg-${count}`}
									fill
									className="overflow-hidden object-center object-cover absolute"
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								/>
							</motion.div>

							<div className="flex flex-col justify-center items-center gap-4">
								<motion.h1
									className={`font-bold text-black text-xl ${raj.className}`}
									animate={
										hovered === count
											? { color: "#ee8f34" }
											: { color: "#171717" }
									}
								>
									{header}
								</motion.h1>
								<p
									className={`text-neutral-950 text-center text-base ${raleway.className}`}
								>
									{text}
								</p>
							</div>
						</motion.div>
					);
				})}
			</AnimatePresence>
		</div>
	);
}
