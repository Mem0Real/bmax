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

	const { RightIcon, LeftIcon, CloseIcon } = useIcons();

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
		<div className="w-full bg-neutral-900 text-neutral-300 px-4 xl:px-40 py-8 flex items-center justify-between xl:justify-between">
			<div className="flex justify-center items-center gap-4">
				<Image
					width={120}
					height={120}
					src="/images/logo-noBg-noContainer.png"
					alt="B-Max"
				/>
			</div>
			{/* xl:screen */}
			<motion.div className="hidden xl:flex justify-center items-center gap-5 font-semibold ">
				{navData.map(({ title, address, dropData }) => {
					return (
						<motion.span
							key={title}
							onHoverStart={() => setDrop(title)}
							onHoverEnd={() => setDrop("")}
							className="relative"
						>
							<motion.div className="flex items-center gap-1">
								<Link href={address}>{title}</Link>
								<motion.span
									className="cursor-pointer"
									initial={{ rotate: -90 }}
									animate={drop === title ? { rotate: -90 } : { rotate: 90 }}
									transition={{ ease: easeInOut }}
								>
									{dropData && RightIcon}
								</motion.span>
							</motion.div>
							<AnimatePresence>
								{title === drop && (
									<motion.h2
										className="absolute top-16"
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

			<div className="flex xl:hidden items-center justify-center gap-2">
				{/* hamburger btn */}
				<motion.div onTap={() => setHam(!ham)}>Dropdown</motion.div>
				{/* hamburger menu */}
				<div className="">
					<AnimatePresence>
						{ham && (
							<>
								{/* overlay */}
								<motion.div
									initial={{ opacity: 0, x: "-100vw" }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: "-100vw" }}
									transition={{ ease: easeInOut }}
									className="bg-neutral-900/90 absolute right-0 top-0 w-[85%] h-[100vh]"
								/>
								{/* hamburger */}
								<motion.div
									initial={{ opacity: 0, x: "-100vw" }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: "-100vw" }}
									transition={{ ease: [0.2, 0.1, 0.5, 0.1] }}
									className="bg-neutral-200 text-neutral-900 absolute left-0 top-0 h-[100vh] flex flex-col justify-start items-start gap-8 w-[85%] p-8 pr-5"
								>
									{/* top */}
									<div className="w-full flex justify-between items-center">
										<Image
											width={20}
											height={20}
											src={"/images/logo.png"}
											alt="B-Max"
										/>
										<motion.button
											onClick={() => setHam(!ham)}
											className="text-red-500 border border-red-500 rounded-full px-2.5 py-0.5 mb-5"
											whileTap={{ scale: 0.8 }}
											transition={{ ease: easeInOut }}
										>
											{/* X */}
											{CloseIcon}
										</motion.button>
									</div>
									<AnimatePresence>
										{/* main */}
										<motion.div
											className="w-full flex flex-col justify-center items-start gap-5"
											layout="position"
										>
											{navData.map(({ title, address, dropData }) => (
												<motion.span
													key={title}
													className="w-full relative"
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
															className="text-neutral-700"
															onClick={() => toggleNest(title)}
														>
															{dropData && LeftIcon}
														</motion.button>
													</div>
													<AnimatePresence>
														{nest.includes(title) && (
															<motion.h2
																className=""
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
											))}
										</motion.div>
									</AnimatePresence>
								</motion.div>
							</>
						)}
					</AnimatePresence>
				</div>
				<div>Search</div>
			</div>
		</div>
	);
}
