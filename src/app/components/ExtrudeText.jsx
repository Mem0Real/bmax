"use client";

import React, { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { useIcons } from "./CustomIcons";

export default function ExtrudeText({ dropData, className }) {
	const [firstClick, setFirstClick] = useState(false);
	const [selected, setSelected] = useState("");

	const { PlusIcon, MinusIcon } = useIcons();

	const handleClick = (id) => {
		setSelected((prev) => (prev === id ? "" : id));
		setFirstClick(true);
	};

	useEffect(() => {
		!firstClick && setSelected(dropData[0].id);
		console.log(dropData[0].nest.id);
	}, []);

	return (
		<div className="w-full flex flex-col justify-center items-stretch gap-2">
			{dropData.map(({ id, name, nest }, index) => (
				<motion.div
					key={id}
					className="flex flex-col justify-center items-stretch gap-4"
					layout
					transition={{ ease: "easeInOut", duration: 0.4 }}
				>
					<motion.div
						className={`${
							className
								? selected === id
									? className
									: ""
								: selected === id
								? "bg-mellow"
								: "bg-mellow/50"
						} py-8 ps-4 pe-2 flex justify-between items-center cursor-pointer`}
						onClick={() => handleClick(id)}
						layout="position"
						transition={{ ease: "easeInOut" }}
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
