"use client";

import React from "react";
import { useIcons } from "./CustomIcons";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const Topbar = ({ className }) => {
	const { FacebookIcon, TwitterIcon, InstagramIcon, TiktokIcon } = useIcons();

	return (
		<div
			className={`bg-mellow/80 text-neutral-900 font-semibold h-full min-h-8 px-4 xl:px-40 flex flex-col lg:flex-row justify-around items-center gap-4 lg:gap-0 ${className}`}
		>
			<div className="flex justify-center items-center gap-4 flex-wrap">
				<h1 className={className}>
					+254 703 888 777 info@autotronix.co.ke Parklands, Ojijo rd. No.6 ||
					Lavington, James Gichuru rd. No.105
				</h1>
			</div>
			<AnimatePresence>
				<div className="flex justify-center items-center gap-4 flex-wrap">
					<Link target="_blank" href="https://facebook.com">
						<motion.h1
							className="w-6"
							initial={{ color: "#000" }}
							whileHover={{ color: "blue" }}
							exit={{ color: "#000" }}
							transition={{ ease: "easeInOut", duration: 0.6 }}
						>
							{FacebookIcon}
						</motion.h1>
					</Link>
					<Link target="_blank" href="https://x.com">
						<motion.h1
							className="w-6"
							initial={{ color: "#000" }}
							whileHover={{ color: "lightblue" }}
							exit={{ color: "#000" }}
							transition={{ ease: "easeInOut", duration: 0.6 }}
						>
							{TwitterIcon}
						</motion.h1>
					</Link>
					<Link target="_blank" href="https://instagram.com">
						<motion.h1
							className="w-6"
							initial={{ color: "#000" }}
							whileHover={{ color: "pink" }}
							exit={{ color: "#000" }}
							transition={{ ease: "easeInOut", duration: 0.6 }}
						>
							{InstagramIcon}
						</motion.h1>
					</Link>
					<Link target="_blank" href="https://tiktok.com">
						<motion.h1
							className="w-6 opacity-80"
							whileHover={{ opacity: 1 }}
							transition={{ ease: "easeInOut", duration: 0.6 }}
						>
							{TiktokIcon}
						</motion.h1>
					</Link>
				</div>
			</AnimatePresence>
		</div>
	);
};

export default Topbar;
