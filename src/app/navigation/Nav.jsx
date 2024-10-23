"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import { raj } from "@/app/ui/fonts";

import AboutDrop from "./navbar_components/AboutDrop";
import SolutionDrop from "./navbar_components/SolutionDrop";
import IndustryDrop from "./navbar_components/IndustryDrop";

import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { useIcons } from "../components/CustomIcons";
import Image from "next/image";

import { Drawer } from "@mantine/core";

import { useDisclosure, useMediaQuery } from "@mantine/hooks";

import Search from "../components/Search";
import { linkData } from "@/data/links";

export default function Nav() {
	const [drop, setDrop] = useState("");
	const [nest, setNest] = useState([]);
	const [isSearchVisible, setIsSearchVisible] = useState(false);

	const [opened, { open, close }] = useDisclosure(false);
	const { RightIcon, LeftIcon, CloseIcon, BarIcon, SearchIcon } = useIcons();

	const matches = useMediaQuery("(min-width: 1024px)");

	const navData = [
		{ title: "Home", address: "/" },
		{
			title: "About Us",
			address: "/about",
			dropData: <AboutDrop close={close} />,
		},
		{
			title: "Solutions",
			address: "/key-replacement",
			dropData: <SolutionDrop close={close} />,
		},
		{
			title: "Industries",
			address: "/transport-industry",
			dropData: <IndustryDrop close={close} />,
		},
		{ title: "Contact Us", address: "/contact" },
	];

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

	const toggleSearchVisibility = () => {
		setIsSearchVisible((prev) => !prev);
	};

	useEffect(() => {
		if (matches) close();
	}, [matches, close]);

	return (
		<>
			<div className="relaitve w-full bg-lightestMellow text-neutral-900 px-4 lg:px-16 xl:px-40 py-4 flex items-center justify-between flex-wrap">
				<Link
					className="relative flex flex-col justify-center items-center w-[125px] h-[60px] xl:h-20 xl:w-48 -mt-1"
					href="/"
				>
					<Image
						src="/images/logo.webp"
						alt="B-Max"
						fill
						priority
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						className="object-cover object-center"
					/>
				</Link>
				{/* Big screen */}
				<motion.div className="hidden lg:flex justify-center items-center gap-3 font-semibold">
					{navData.map(({ title, address, dropData }) => {
						return (
							<motion.span
								key={title}
								onHoverStart={() => setDrop(title)}
								onHoverEnd={() => setDrop("")}
								className="flex flex-col justify-center items-center py-4 px-2 relative"
							>
								<motion.div
									className={`flex items-center gap-1 ${raj.className}`}
								>
									<Link href={address} className="text-lg">
										{title}
									</Link>
									<motion.span
										className="cursor-pointer w-5 text-black"
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
											className={`absolute top-16 z-50 ${raj.className}`}
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
					<button
						onClick={toggleSearchVisibility}
						className="search-button w-5 -mt-1"
					>
						{SearchIcon}
					</button>
				</motion.div>
				{/* Small screen */}
				<div className="lg:hidden flex justify-center items-center gap-4">
					{/* hamburger btn */}
					<motion.div onTap={open} className="w-8 text-neutral-900">
						{BarIcon}
					</motion.div>
					<div
						className="w-6 text-neutral-900"
						onClick={toggleSearchVisibility}
					>
						{SearchIcon}
					</div>
				</div>
				{isSearchVisible && (
					<span className="absolute">
						<Search
							isVisible={isSearchVisible}
							toggleVisibility={toggleSearchVisibility}
							linksData={linkData}
						/>
					</span>
				)}
			</div>

			<Drawer
				opened={opened}
				onClose={close}
				overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
				closeButtonProps={{
					icon: (
						<motion.span
							className="text-red-600/80 w-6"
							whileTap={{ scale: 0.8 }}
							transition={{ ease: "easeInOut" }}
						>
							{CloseIcon}
						</motion.span>
					),
				}}
				styles={{
					content: { backgroundColor: "#fcead9", color: "#212121" },
					header: { backgroundColor: "#fcead9", color: "#212121" },
				}}
				size={300}
			>
				<AnimatePresence>
					{/* main */}
					<motion.div
						className="flex flex-col justify-center items-start gap-8 lg:gap-5 md:px-8"
						layout="position"
					>
						{navData.map(({ title, address, dropData }) => (
							<motion.span
								key={title}
								className={`w-full relative z-50 ${raj.className}`}
								layout="position"
								onClick={() => toggleNest(title)}
							>
								<div className="w-full flex justify-between items-center">
									<Link
										href={address}
										className="text-lg lg:text-xl font-semibold"
									>
										{title}
									</Link>
									<motion.button
										initial={{ rotate: -90 }}
										animate={
											nest.includes(title) ? { rotate: 90 } : { rotate: -90 }
										}
										transition={{ ease: easeInOut }}
										className="w-6 text-black"
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
			</Drawer>
		</>
	);
}
