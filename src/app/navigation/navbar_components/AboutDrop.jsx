import Link from "next/link";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";

export default function AboutDrop() {
	return (
		<AnimatePresence>
			<motion.div className="flex flex-col justify-center items-start w-56 py-2 bg-transparent xl:bg-neutral-900 text-neutral-200 font-thin text-xs rounded-md">
				<motion.div
					initial={{ opacity: 0.9 }}
					whileHover={{ opacity: 1 }}
					exit={{ opacity: 0.9 }}
					className="w-full px-6 py-2 xl:py-4"
				>
					<Link href="/about">Who we are</Link>
				</motion.div>
				<motion.div
					initial={{ opacity: 0.9 }}
					whileHover={{ opacity: 1 }}
					exit={{ opacity: 0.9 }}
					className="w-full px-6 py-2 xl:py-4"
				>
					<Link href="/our-clients">Our Clients</Link>
				</motion.div>
			</motion.div>
		</AnimatePresence>
	);
}
