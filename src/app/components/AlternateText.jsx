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
}) {
	return (
		<div className="basis-1/2 flex flex-col justify-center items-start gap-8">
			<h1 className="text-3xl md:text-4xl font-medium">{header}</h1>
			<p className="text-base text-neutral-950/90">{detail}</p>
			{linkText && (
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
