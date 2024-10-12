"use client";

import Link from "next/link";
import React from "react";

import { motion } from "framer-motion";

const links = [
	{ title: "Home", address: "/" },
	{ title: "About Us", address: "/about" },
	{ title: "Contact Us", address: "/contact" },
];
export default function QuickLinks() {
	return (
		<div className="w-full flex flex-col justify-center items-start gap-8">
			<h1 className="text-4xl text-mellow capitalize">Quick Links</h1>
			<div className="w-[90%] mx-auto flex flex-col justify-center items-start gap-3">
				{links.map(({ title, address }, index) => (
					<Link href={address} key={index}>
						<motion.div
							whileHover={{
								borderColor: "#DFA70C",
							}}
							className="py-0.5 px-4 border border-white text-white font-base cursor-pointer capitalize"
						>
							{title}
						</motion.div>
					</Link>
				))}
			</div>
		</div>
	);
}
