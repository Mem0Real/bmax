"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import AboutDrop from "./navbar_components/AboutDrop";
import SolutionDrop from "./navbar_components/SolutionDrop";
import IndustryDrop from "./navbar_components/IndustryDrop";

import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { useIcons } from "../components/CustomIcons";
import Image from "next/image";

import { Drawer } from "@mantine/core";

import { useDisclosure, useMediaQuery } from "@mantine/hooks";

const navData = [
	{ title: "Home", address: "/" },
	{ title: "About Us", address: "/about", dropData: <AboutDrop /> },
	{ title: "Solutions", address: "/solutions", dropData: <SolutionDrop /> },
	{ title: "Industries", address: "/industries", dropData: <IndustryDrop /> },
	{ title: "Reviews", address: "/reviews" },
	{ title: "Contact Us", address: "/contact" },
	{ title: "Blog", address: "/blog" },
];

export default function Nav() {
	const [drop, setDrop] = useState("");
	const [nest, setNest] = useState([]);

	const [opened, { open, close }] = useDisclosure(false);
	const { RightIcon, LeftIcon, CloseIcon, BarIcon, SearchIcon } = useIcons();

	const matches = useMediaQuery("(min-width: 1024px)");

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

	useEffect(() => {
		if (matches) close();
	}, [matches, close]);
	return (
		<>
			<div className="w-full bg-neutral-900 text-neutral-300 px-4 lg:px-16 xl:px-40 py-4 flex items-center justify-between flex-wrap">
				<div className="relative flex justify-center items-center w-[6.5rem] h-[2.5rem]">
					<Image
						src="/images/logo.png"
						alt="B-Max"
						fill
						priority
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
				</div>
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
								<motion.div className="flex items-center gap-1">
									<Link href={address}>{title}</Link>
									<motion.span
										className="cursor-pointer w-4 text-mellow"
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
				<div className="lg:hidden flex justify-center items-center gap-4 text-darkYellow">
					{/* hamburger btn */}
					<motion.div onTap={open} className="w-8 text-neutral-200">
						{BarIcon}
					</motion.div>
					<div className="w-8 text-neutral-200">{SearchIcon}</div>
				</div>
			</div>

			<Drawer
				opened={opened}
				onClose={close}
				overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
				closeButtonProps={{
					icon: (
						<motion.button
							className="text-red-600/80 w-6"
							whileTap={{ scale: 0.8 }}
							transition={{ ease: "easeInOut" }}
						>
							{CloseIcon}
						</motion.button>
					),
				}}
				styles={{
					content: { backgroundColor: "#212121", color: "#d4d4d4" },
					header: { backgroundColor: "#212121", color: "#d4d4d4" },
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
								className="w-full relative z-50"
								layout="position"
								onClick={() => toggleNest(title)}
							>
								<div className="w-full flex justify-between items-center">
									<Link href={address} className="text-base lg:text-lg">
										{title}
									</Link>
									<motion.button
										initial={{ rotate: -90 }}
										animate={
											nest.includes(title) ? { rotate: 90 } : { rotate: -90 }
										}
										transition={{ ease: easeInOut }}
										className="w-4 text-mellow"
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

			{/* <Button onClick={open}>Open Drawer</Button> */}
		</>
	);
}
