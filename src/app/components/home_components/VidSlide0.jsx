"use client";

import React, { useEffect, useState } from "react";

import { motion, useAnimation } from "framer-motion";

export default function VidSLide() {
	const controls = useAnimation();
	const controls2 = useAnimation();

	useEffect(() => {
		controls.start({ x: 0, transition: { duration: 1 } });
		controls2.start({ x: 100, transition: { duration: 1 } });
	}, [controls, controls2]);

	const handleMouseOver = () => {
		controls.start({ x: -100, transition: { duration: 1 } });
		controls2.start({ x: 0, transition: { duration: 1 } });
	};

	const handleMouseOut = () => {
		controls.start({ x: 0, transition: { duration: 1 } });
		controls2.start({ x: 100, transition: { duration: 1 } });
	};

	return (
		<div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
			<motion.div style={{ x: controls.x }} className="text1">
				Your first text here. Each line will disappear at its own pace.
			</motion.div>
			<motion.div style={{ x: controls2.x }} className="text2">
				Your second text here.
			</motion.div>
		</div>
	);
}
