"use client";

import React from "react";
import Link from "next/link";

import { motion } from "framer-motion";

import { raj } from "@/app/ui/fonts";

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
	tailColor += swap ? " text-lg" : " text-base";

	let headSize = swap ? "text-4xl md:text-6xl" : "text-3xl md:text-4x";

	return (
		<div className="w-full basis-1/2 flex flex-col justify-center items-start gap-8">
			<h1
				className={`text-mellow text-xl md:text-5xl font-bold ${headSize} ${raj.className}`}
			>
				{header}
			</h1>
			{Array.isArray(detail) ? (
				dark ? (
					<div className="flex flex-col justify-center items-center gap-8">
						{detail?.map((text, index) => (
							<p key={index} className="text-neutral-900 text-lg text-justify">
								{text}
							</p>
						))}
					</div>
				) : (
					<div className="flex flex-col justify-center items-center gap-8">
						{detail?.map((text, index) => (
							<p key={index} className="text-neutral-200 text-lg text-justify">
								{text}
							</p>
						))}
					</div>
				)
			) : (
				<p className={`${tailColor} font-medium`}>{detail}</p>
			)}
			{children}
			{!swap && linkText && (
				<Link href={`/${address}`}>
					<motion.h1
						whileHover={{
							backgroundColor: "#ee8f34",
							color: "#FFF",
						}}
						className={`px-12 py-3 border border-mellow text-mellow font-bold uppercase ${raj.className}`}
					>
						{linkText}
					</motion.h1>
				</Link>
			)}
		</div>
	);
}
