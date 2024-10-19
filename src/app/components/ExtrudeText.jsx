"use client";

import React, { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { useIcons } from "./CustomIcons";

import { raj } from "@/app/ui/fonts";

export default function ExtrudeText({ dropData, className }) {
	const [selected, setSelected] = useState(0);

	const { PlusIcon, MinusIcon } = useIcons();

	const handleClick = (index) => {
		setSelected((prev) => (prev === index ? -1 : index));
	};

	return (
		<div className="w-full flex flex-col justify-center items-stretch gap-2">
			{dropData.map(({ name, nest }, index) => (
				<motion.div
					key={index}
					className="flex flex-col justify-center items-stretch gap-4"
					layout
					transition={{ ease: "easeInOut", duration: 0.4 }}
				>
					<motion.div
						className={`${
							className
								? selected === index
									? className
									: ""
								: selected === index
								? "bg-mellow"
								: "bg-lightMellow"
						} py-4 ps-4 pe-2 flex justify-between items-center cursor-pointer`}
						onClick={() => handleClick(index)}
						layout="position"
						transition={{ ease: "easeInOut", duration: 0.2 }}
					>
						<h1
							className={`text-xl md:text-3xl font-medium capitalize py-4 ${raj.className}`}
						>
							{name}
						</h1>
						<h3 className="w-8 text-neutral-900">
							{selected !== index ? PlusIcon : MinusIcon}
						</h3>
					</motion.div>

					<AnimatePresence>
						{selected === index && (
							<motion.div
								key="dropdown"
								initial={{ height: 0, opacity: 0 }}
								animate={{ height: "auto", opacity: 1 }}
								exit={{ height: 0, opacity: 0 }}
								transition={{ ease: "easeInOut", duration: 0.2 }}
								className="overflow-hidden w-[90%] mx-auto text-sm text-neutral-black font-medium"
								layout
							>
								{Array.isArray(nest) ? (
									<>
										<h1 className="font-bold text-neutral-900">{nest[0]}</h1>
										<p>{nest[1]}</p>
									</>
								) : (
									nest
								)}
							</motion.div>
						)}
					</AnimatePresence>
				</motion.div>
			))}
		</div>
	);
}
