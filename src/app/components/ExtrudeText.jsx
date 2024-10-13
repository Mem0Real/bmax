"use client";

import React, { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { useIcons } from "./CustomIcons";

export default function ExtrudeText({ dropData }) {
	const [selected, setSelected] = useState("");
	const { PlusIcon, MinusIcon } = useIcons();

	return (
		<div className="w-full flex flex-col justify-center items-stretch gap-2">
			{dropData.map(({ id, name, nest }) => (
				<motion.div
					key={id}
					className="flex flex-col justify-center items-stretch gap-4"
					layout
				>
					<motion.div
						className={`${
							selected === id ? "bg-mellow" : "bg-mellow/50"
						} py-8 ps-4 pe-2 flex justify-between items-center cursor-pointer`}
						onClick={() => setSelected((prev) => (prev === id ? "" : id))}
						layout="position"
						transition={{
							type: "spring",
							stiffness: 600, // Higher values make it snappier
							damping: 100, // Higher values reduce the bounciness
						}}
					>
						<h1 className="text-xl md:text-2xl font-medium capitalize">
							{name}
						</h1>
						<h3 className="w-8 text-neutral-900">
							{selected !== id ? PlusIcon : MinusIcon}
						</h3>
					</motion.div>

					<AnimatePresence>
						{selected === id && (
							<motion.div
								key="dropdown"
								initial={{ height: 0, opacity: 0 }}
								animate={{ height: "auto", opacity: 1 }}
								exit={{ height: 0, opacity: 0 }}
								transition={{ ease: "easeInOut", duration: 0.2 }}
								className="overflow-hidden w-[90%] mx-auto text-base"
								layout
							>
								{nest}
							</motion.div>
						)}
					</AnimatePresence>
				</motion.div>
			))}
		</div>
	);
}
