"use client";

import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { useIcons } from "./CustomIcons";
import Link from "next/link";

export default function Links({ sm }) {
	const { TelegramIcon, FacebookIcon, InstagramIcon, LinkedInIcon } =
		useIcons();
	let width = sm ? "w-6" : "w-9";
	let padding = sm ? "p-1" : "p-1.5";
	let color = sm ? "text-neutral-800" : "text-neutral-200";

	return (
		<AnimatePresence>
			<div className="w-56 h-12 flex justify-center items-center gap-6 ps-4">
				<motion.div
					className={`rounded-full ${width} ${padding} ${color}`}
					initial={{ backgroundColor: "rgb(255 173 51 / 0.6)" }}
					whileHover={{
						backgroundColor: "rgb(255 173 51 / 0)",
						color: "#2563eb",
					}}
					exit={{ backgroundColor: "rgb(255 173 51 / 0.6)" }}
					transition={{ ease: "easeInOut", duration: 0.6 }}
				>
					<Link
						href="https://t.me/B_Max_Auto_Solutions_bot"
						target="_blank"
						className="w-6"
					>
						{TelegramIcon}
					</Link>
				</motion.div>
				<motion.div
					className={`rounded-full ${width} ${padding}`}
					initial={{ backgroundColor: "rgb(255 173 51 / 0.6)" }}
					whileHover={{
						backgroundColor: "rgb(255 173 51 / 0)",
						color: "#2563eb",
					}}
					exit={{ backgroundColor: "rgb(255 173 51 / 0.6)" }}
					transition={{ ease: "easeInOut", duration: 0.6 }}
				>
					<Link
						href="https://www.facebook.com/share/EYTKdeYqzUgrtVAF/?mibextid=LQQJ4d"
						target="_blank"
						className="w-6"
					>
						{FacebookIcon}
					</Link>
				</motion.div>

				<motion.div
					className={`rounded-full ${width} ${padding}`}
					initial={{ backgroundColor: "rgb(255 173 51 / 0.6)" }}
					whileHover={{
						backgroundColor: "rgb(255 173 51 / 0)",
						color: "#f472b6",
					}}
					exit={{ backgroundColor: "rgb(255 173 51 / 0.6)" }}
					transition={{ ease: "easeInOut", duration: 0.6 }}
				>
					<Link href="https://instagram.com" target="_blank" className="w-6">
						{InstagramIcon}
					</Link>
				</motion.div>
				<motion.div
					className={`rounded-lg ${width} ${padding}`}
					initial={{ backgroundColor: "rgb(255 173 51 / 0.6)" }}
					whileHover={{ backgroundColor: "#0077B5", color: "#fff" }}
					exit={{ backgroundColor: "rgb(255 173 51 / 0.6)" }}
					transition={{ ease: "easeInOut", duration: 0.6 }}
				>
					<Link
						href="https://www.linkedin.com/groups/10003292"
						target="_blank"
						className="w-6"
					>
						{LinkedInIcon}
					</Link>
				</motion.div>
			</div>
		</AnimatePresence>
	);
}
