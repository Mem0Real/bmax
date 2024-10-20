import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import Link from "next/link";
import BgFill from "@/app/components/BgFill";

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
			<motion.div className="flex flex-col justify-center items-start w-56 bg-lightestMellow text-black rounded-b-md">
				{dropMenuData.map(({ title, address }, index) => (
					<BgFill
						text={
							<motion.div
								key={index}
								initial={{ opacity: 0.9 }}
								whileHover={{ opacity: 1 }}
								exit={{ opacity: 0.9 }}
								className="w-full px-6 py-2 xl:py-4 font-semibold"
							>
								<Link href={`/${address}`}>{title}</Link>
							</motion.div>
						}
						color="black"
					/>
				))}
			</motion.div>
		</AnimatePresence>
	);
}
