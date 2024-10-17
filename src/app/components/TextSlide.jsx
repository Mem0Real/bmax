"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TextSlide() {
	return (
		<div className="w-full grid h-screen place-content-center gap-2 bg-green-300 px-8 text-black">
			<ChangeText>Car Key</ChangeText>
			<ChangeText>Services</ChangeText>
		</div>
	);
}

const FlipText = ({ children }) => {
	return (
		<motion.h1
			className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl bg-white"
			initial="initial"
			whileHover="hovered"
		>
			<motion.div
				variants={{ initial: { x: 0 }, hovered: { x: "100%" } }}
				transition={{ ease: "easeIn" }}
			>
				{children}
			</motion.div>
			<motion.div
				className="absolute inset-0"
				variants={{ initial: { x: "-100%" }, hovered: { x: 0 } }}
				transition={{ ease: "easeIn" }}
			>
				{children}
			</motion.div>
		</motion.h1>
	);
};

const ChangeText = ({ children }) => {};
