"use client";

import React, { useState } from "react";
import Link from "next/link";

import AboutDrop from "./navbar_components/AboutDrop";
import SolutionDrop from "./navbar_components/SolutionDrop";
import IndustryDrop from "./navbar_components/IndustryDrop";

import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { useIcons } from "../components/CustomIcons";
import Image from "next/image";

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
	const [ham, setHam] = useState("");
	const [nest, setNest] = useState([]);

	const { RightIcon, LeftIcon, CloseIcon, BarIcon, SearchIcon } = useIcons();

	const toggleNest = (title) => {
		setNest((prevNest) => {
			if (prevNest.includes(title)) {
				// remove title if exists
				return prevNest.filter((str) => str !== title);
			} else {
				return [...prevNest, title];
			}
		});
	};

	return (
		<>
			<div className="w-full bg-neutral-900 text-neutral-300 px-4 xl:px-40 py-4 flex items-center justify-between flex-wrap">
				<div className="flex justify-center items-center gap-4">
					<Image
						width={120}
						height={120}
						src="/images/logo.png"
						alt="B-Max"
						priority
					/>
				</div>
				{/* Big screen */}
				<motion.div className="hidden xl:flex justify-center items-center gap-3 font-semibold">
					{navData.map(({ title, address, dropData }) => {
						return (
							<motion.span
								key={title}
								onHoverStart={() => setDrop(title)}
								onHoverEnd={() => setDrop("")}
								className="flex flex-col justify-center items-center py-4 px-2 relative"
							>
								<motion.div className="flex items-center gap-1">
									<Link href={address}>{title}</Link>
									<motion.span
										className="cursor-pointer w-4 text-yellow-600"
										initial={{ rotate: 0 }}
										animate={drop === title ? { rotate: 90 } : { rotate: 0 }}
										transition={{ ease: easeInOut }}
									>
										{dropData && RightIcon}
									</motion.span>
								</motion.div>
								<AnimatePresence>
									{title === drop && (
										<motion.h2
											className="absolute top-16 z-50"
											initial={{ opacity: 0, y: -20 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, y: -20 }}
											transition={{
												duration: 0.4,
												ease: [0.17, 0.67, 0.83, 0.95],
												delay: 0.1,
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

				{/* Small screen */}
				<div className="xl:hidden flex justify-center items-center gap-4 text-darkYellow">
					{/* hamburger btn */}
					<motion.div
						onTap={() => setHam(!ham)}
						className="w-8 text-neutral-200"
					>
						{BarIcon}
					</motion.div>
					<div className="w-8 text-neutral-200">{SearchIcon}</div>
				</div>
			</div>

			{/* hamburger menu */}
			<AnimatePresence>
				{ham && (
					<>
						{/* hamburger */}
						<motion.div
							initial={{ opacity: 0, x: "-100vw" }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: "-100vw" }}
							transition={{ ease: [0.2, 0.1, 0.5, 0.1] }}
							className="w-full h-full bg-neutral-900/90 text-neutral-200 px-4 xl:px-12 py-6"
						>
							{/* top */}
							<div className="w-full flex justify-end items-center pr-6">
								<motion.button
									onClick={() => setHam(!ham)}
									className="text-red-500 border border-red-500 rounded-full px-2.5 py-0.5 mb-5 z-20"
									whileTap={{ scale: 0.8 }}
									transition={{ ease: easeInOut }}
								>
									{CloseIcon}
								</motion.button>
							</div>
							<AnimatePresence>
								{/* main */}
								<motion.div
									className="flex flex-col justify-center items-start gap-5 px-8"
									layout="position"
								>
									{navData.map(({ title, address, dropData }) => (
										<motion.span
											key={title}
											className="w-full relative z-50"
											layout="position"
										>
											<div className="w-full flex justify-between items-center">
												<Link href={address}>{title}</Link>
												<motion.button
													initial={{ rotate: -90 }}
													animate={
														nest.includes(title)
															? { rotate: 90 }
															: { rotate: -90 }
													}
													transition={{ ease: easeInOut }}
													className="w-4 text-yellow-500"
													onClick={() => toggleNest(title)}
												>
													{dropData && LeftIcon}
												</motion.button>
											</div>
											{/* Drop Data */}
											<AnimatePresence>
												{nest.includes(title) && (
													<motion.div
														initial={{ opacity: 0, y: -20 }}
														animate={{ opacity: 1, y: 0 }}
														exit={{ opacity: 0, y: -20 }}
														transition={{
															duration: 0.4,
															ease: [0.17, 0.67, 0.83, 0.95],
														}}
														className="z-50"
													>
														{dropData}
													</motion.div>
												)}
											</AnimatePresence>
										</motion.span>
									))}
								</motion.div>
							</AnimatePresence>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</>
	);
}
