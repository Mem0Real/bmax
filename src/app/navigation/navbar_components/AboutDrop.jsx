import Link from "next/link";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import BgFill from "@/app/components/BgFill";

export default function AboutDrop() {
	return (
		<AnimatePresence>
			<motion.div
				className={`flex flex-col justify-center items-start w-56 bg-lightestMellow text-black rounded-b-md font-medium antialiased`}
			>
				<BgFill
					text={
						<motion.div
							initial={{ opacity: 0.9 }}
							whileHover={{ opacity: 1 }}
							exit={{ opacity: 0.9 }}
							className="w-full px-6 py-4 xl:py-4"
						>
							<Link href="/about">Who we are</Link>
						</motion.div>
					}
					color="black"
				/>
				<BgFill
					text={
						<motion.div
							initial={{ opacity: 0.9 }}
							whileHover={{ opacity: 1 }}
							exit={{ opacity: 0.9 }}
							className="w-full px-6 py-2 xl:py-4"
						>
							<Link href="/our-clients">Our Clients</Link>
						</motion.div>
					}
					color="black"
				/>
			</motion.div>
		</AnimatePresence>
	);
}
