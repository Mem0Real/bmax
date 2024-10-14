"use client";

import React from "react";
import Link from "next/link";

import { motion } from "framer-motion";

export default function AlternateText({
	header,
	detail,
	address,
	linkText,
	children,
	swap,
}) {
	let tailColor = swap ? "text-nutral-200/80" : "text-neutral-950/90";
	tailColor += swap ? " text-xl" : " text-base";

	let headSize = swap
		? "text-4xl md:text-6xl font-bold"
		: "text-3xl md:text-4xl font-medium";

	return (
		<div className="basis-1/2 flex flex-col justify-center items-start gap-8">
			<h1 className={headSize}>{header}</h1>
			<p className={tailColor}>{detail}</p>
			{!swap && linkText && (
				<Link href={`/${address}`}>
					<motion.h1
						whileHover={{
							backgroundColor: "#DFA70C",
							color: "#FFF",
						}}
						className="px-12 py-3 border border-darkYellow text-darkYellow font-bold uppercase"
					>
						{linkText}
					</motion.h1>
				</Link>
			)}
			{children}
		</div>
	);
}
