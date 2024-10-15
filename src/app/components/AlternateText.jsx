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
	light,
	dark,
}) {
	let tailColor = !light
		? swap
			? "text-nutral-200/80"
			: "text-neutral-950/90"
		: "text-neutral-200/80";
	tailColor += swap ? " text-xl" : " text-base";

	let headSize = swap
		? "text-4xl md:text-6xl font-bold"
		: "text-3xl md:text-4xl font-medium";

	return (
		<div className="w-full basis-1/2 flex flex-col justify-center items-start gap-8">
			<h1 className={headSize}>{header}</h1>
			{Array.isArray(detail) ? (
				dark ? (
					<div className="flex flex-col justify-center items-center gap-8">
						{detail?.map((text, index) => (
							<p
								key={index}
								className="text-neutral-900 text-lg text-center md:text-start"
							>
								{text}
							</p>
						))}
					</div>
				) : (
					<div className="flex flex-col justify-center items-center gap-8">
						{detail?.map((text, index) => (
							<p
								key={index}
								className="text-neutral-200 text-lg text-start md:text-start"
							>
								{text}
							</p>
						))}
					</div>
				)
			) : (
				<p className={tailColor}>{detail}</p>
			)}
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
