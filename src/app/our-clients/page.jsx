"use client";
import Image from "next/image";
import React, { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

const clientList = [
	{ id: "Safaricom", source: "safari.png" },
	{ id: "Jacaranda", source: "jacaranda.png" },
	{ id: "Inspiration", source: "inspiration.png" },
	{ id: "IPS", source: "ips.png" },
	{ id: "InTouch", source: "intouch.png" },
	{ id: "eyestyle", source: "eye.jpg" },
	{ id: "epn", source: "epn.jpg" },
	{ id: "neom", source: "neom.jpg" },
	{ id: "flamex", source: "flamex.jpg" },
	{ id: "embassy", source: "embassy.jpg" },
];

export default function Clients() {
	const [isHovered, setIsHovered] = useState("else");

	return (
		<div className="px-4 xl:px-40 w-full min-h-screen bg-neutral-200 text-neutral-900 flex flex-col justify-center items-center gap-4">
			<h1 className="text-4xl font-semibold">OUR VALUED CLIENTS</h1>
			<p className="text-lg text-neutral-900/60 text-center">
				At B-Max Auto Solutions, our commitment to excellence and unwavering
				dedication to providing top-notch automotive security solutions have
				allowed us to build strong partnerships with a diverse range of clients.
				We take immense pride in serving our clients and delivering tailored,
				innovative solutions that meet their unique needs and exceed their
				expectations.
			</p>

			<AnimatePresence>
				<motion.div
					className="grid grid-cols-5 grid-flow-row gap-3"
					transition={{ staggerChildren: 2.5 }}
					onMouseLeave={() => setIsHovered("else")}
				>
					{clientList.map(({ id, source }, index) => (
						<motion.div
							key={index}
							className="relative w-56 h-36 cursor-pointer"
							animate={
								isHovered === id || isHovered === "else"
									? { opacity: 1 }
									: { opacity: 0.4 }
							}
							onMouseEnter={() => setIsHovered(id)}
							onMouseLeave={() => setIsHovered("")}
						>
							<Image
								fill
								alt={id}
								src={`/images/clients/${source}`}
								className="object-contain object-center absolute"
							/>
						</motion.div>
					))}
				</motion.div>
			</AnimatePresence>
		</div>
	);
}
