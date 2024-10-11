import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import Link from "next/link";

const dropMenuData = [
	{ title: "Transport Industry", address: "transport-industry" },
	{ title: "Food & Beverage", address: "food-beverage" },
	{ title: "Pharmaceutical", address: "pharmaceutical" },
	{ title: "Healthcare", address: "healthcare" },
	{ title: "Oil & Gas", address: "oil-gas" },
	{ title: "Logistics & Supply Chain Management", address: "logistics-supply" },
];
export default function IndustryDrop() {
	return (
		<AnimatePresence>
			<motion.div className="flex flex-col justify-center items-start w-56 py-2 bg-transparent xl:bg-neutral-900 text-neutral-200 font-thin text-xs">
				{dropMenuData.map(({ title, address }) => (
					<motion.div
						initial={{ opacity: 0.9 }}
						whileHover={{ opacity: 1 }}
						exit={{ opacity: 0.9 }}
						className="w-full px-6 py-2 xl:py-4"
					>
						<Link href={`/${address}`}>{title}</Link>
					</motion.div>
				))}
			</motion.div>
		</AnimatePresence>
	);
}
