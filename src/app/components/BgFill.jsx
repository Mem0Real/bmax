"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function BgFill({ text }) {
	const textRef = useRef(null);
	const backgroundRef = useRef(null);

	useGSAP(() => {
		const textElement = textRef.current;
		const backgroundElement = backgroundRef.current;

		gsap.set(textElement, { color: "black" });
		gsap.set(backgroundElement, { scaleX: 0, transformOrigin: "left" });
	});

	const handleMouseEnter = () => {
		gsap.to(backgroundRef.current, {
			scaleX: 1,
			duration: 0.6,
			ease: "power1.out",
		});

		gsap.to(textRef.current, {
			color: "white",
			duration: 0.6,
			ease: "power3.out",
		});
	};

	const handleMouseLeave = () => {
		gsap.to(backgroundRef.current, {
			scaleX: 0,
			duration: 0.6,
			ease: "power1.out",
		});
		gsap.to(textRef.current, {
			color: "black",
			duration: 0.6,
			ease: "power1.out",
		});
	};
	return (
		<div
			className="relative inline-block overflow-hidden cursor-pointer bg-none"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{/* Background */}
			<span
				ref={backgroundRef}
				className="absolute inset-0 bg-black z-0"
				style={{ pointerEvents: "none" }}
			/>

			{/* text */}
			<span ref={textRef} className="relative z-10">
				{text}
			</span>
		</div>
	);
}
