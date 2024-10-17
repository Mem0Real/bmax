"use client";

import React, { useEffect, useRef } from "react";
import { useAnimate } from "framer-motion";

export default function FramerTrial1() {
	return (
		<div className="grid h-screen place-content-center">
			<Basic />
		</div>
	);
}

const Basic = () => {
	const [scope, animate] = useAnimate();

	const handleAnimate = async () => {
		await animate("#target", { x: 150 });
		await animate("#target", { y: 150, rotate: "360deg" }, { duration: 0.5 });
	};
	return (
		<div ref={scope}>
			<div id="target" className="h-24 w-24 bg-violet-500" />
			<button
				className="mt-4 rounded-lg bg-slate-500 px-4 py-2 font-semibold"
				onClick={() => handleAnimate()}
			>
				Trigger Animation
			</button>
		</div>
	);
};
