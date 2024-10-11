"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import AboutDrop from "./navbar_components/AboutDrop";
import SolutionDrop from "./navbar_components/SolutionDrop";
import IndustryDrop from "./navbar_components/IndustryDrop";

const navData = [
	{ title: "Home", address: "/" },
	{ title: "About Us", address: "/about", dropData: <AboutDrop /> },
	{ title: "Solutions", address: "/solutions", dropData: <SolutionDrop /> },
	{ title: "Industries", address: "/industries", dropData: <IndustryDrop /> },
	{ title: "Reviews", address: "/reviews" },
	{ title: "Contact Us", address: "/contact" },
	{ title: "Blog", address: "/blog" },
];
export default function Navbar() {
	const [drop, setDrop] = useState("");

	return (
		<div className="bg-neutral-100 text-blue-300 px-12 xl:px-40 flex items-center justify-between xl:justify-center xl:gap-16">
			<div className="flex justify-center items-center gap-4">
				<h1>Logo</h1>
				<h1>-I</h1>
			</div>
			{/* xl:screen */}
			<motion.div className="hidden xl:flex justify-center items-center gap-5">
				{navData.map(({ title, address, dropData }) => {
					return (
						<motion.span
							key={title}
							onHoverStart={() => setDrop(title)}
							onHoverEnd={() => setDrop("")}
							className="relative"
						>
							<Link href={address}>{title}</Link>
							<AnimatePresence>
								{title === drop && (
									<motion.h2
										className="absolute top-8"
										initial={{ opacity: 0, y: -20 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -20 }}
										transition={{
											duration: 0.4,
											ease: [0.17, 0.67, 0.83, 0.95],
										}}
									>
										{dropData}
									</motion.h2>
								)}
							</AnimatePresence>
						</motion.span>
					);
				})}
			</motion.div>

			{/* else:screen */}
			<div className="flex xl:hidden items-center justify-center gap-5">
				<div>Dropdown</div>
				<div>Search</div>
			</div>
		</div>
	);
}
