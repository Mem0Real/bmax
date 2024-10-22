"use client";

import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { useIcons } from "./CustomIcons";
import Link from "next/link";

export default function Links({ sm, top = false }) {
	const {
		TelegramIcon,
		FacebookIcon,
		InstagramIcon,
		LinkedInIcon,
		TiktokIcon,
	} = useIcons();
	let width = sm ? "w-6" : "w-9";
	let padding = sm ? "p-1" : "p-1.5";
	let color = sm ? "text-neutral-800" : "text-neutral-200";

	let stroke = top ? "#f6c08e" : "#e27712";

	return (
		<AnimatePresence>
			<div className="flex justify-center items-center gap-6 ps-4">
				<motion.div
					className={`rounded-full ${width} ${padding} ${color}`}
					initial={{ backgroundColor: stroke }}
					whileHover={{
						backgroundColor: "rgb(255 173 51 / 0)",
						color: "#2563eb",
					}}
					exit={{ backgroundColor: stroke }}
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
					initial={{ backgroundColor: stroke }}
					whileHover={{
						backgroundColor: "rgb(255 173 51 / 0)",
						color: "#2563eb",
					}}
					exit={{ backgroundColor: stroke }}
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
					initial={{ backgroundColor: stroke }}
					whileHover={{
						backgroundColor: "rgb(255 173 51 / 0)",
						color: "#f472b6",
					}}
					exit={{ backgroundColor: stroke }}
					transition={{ ease: "easeInOut", duration: 0.6 }}
				>
					<Link
						href="https://instagram.com/bmaxautosolutions?igsh=MWJ6N2xnd3FnYm1rOA%3D%3D&utm_source=gr"
						target="_blank"
						className="w-6"
					>
						{InstagramIcon}
					</Link>
				</motion.div>
				<motion.div
					className={`rounded-lg ${width} ${padding}`}
					initial={{ backgroundColor: stroke }}
					whileHover={{ backgroundColor: "#0077B5", color: "#fff" }}
					exit={{ backgroundColor: stroke }}
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
				<motion.div
					className={`rounded-lg ${width} ${padding}`}
					initial={{ backgroundColor: stroke }}
					whileHover={{
						backgroundColor: "#000",
						borderRadius: "5px",
						color: "#fff",
					}}
					exit={{ backgroundColor: stroke }}
					transition={{ ease: "easeInOut", duration: 0.6 }}
				>
					<Link
						href="https://www.tiktok.com/@bmax.auto.solutio"
						target="_blank"
						className="w-6"
					>
						{TiktokIcon}
					</Link>
				</motion.div>
			</div>
		</AnimatePresence>
	);
}
