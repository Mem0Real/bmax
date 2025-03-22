"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function BgFill({ text, color = "white" }) {
	const textRef = useRef(null);
	const backgroundRef = useRef(null);
	const [isToggled, setIsToggled] = useState(false);

	useEffect(() => {
		const textElement = textRef.current;
		const backgroundElement = backgroundRef.current;

		gsap.set(textElement, { color: color });
		gsap.set(backgroundElement, { scaleX: 0, transformOrigin: "left" });

		return () => gsap.killTweensOf([textElement, backgroundElement]);
	}, []);

	const handleMouseEnter = () => {
		if (window.innerWidth >= 1280) {
			// Check for xl screens
			animateIn();
		}
	};

	const handleMouseLeave = () => {
		if (window.innerWidth >= 1280) {
			// Check for xl screens
			animateOut();
		}
	};

	const handleClick = () => {
		if (window.innerWidth < 1280) {
			// Check for smaller screens
			if (isToggled) {
				animateOut();
			} else {
				animateIn();
			}
			setIsToggled(!isToggled);
		}
	};

	const animateIn = () => {
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

	const animateOut = () => {
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
			className="w-full relative inline-block overflow-hidden cursor-pointer bg-none"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onClick={handleClick}
		>
			{/* Background */}
			<span
				ref={backgroundRef}
				className="absolute inset-0 bg-mellow z-0"
				style={{ pointerEvents: "none" }}
			/>

			{/* text */}
			<span ref={textRef} className="relative z-10">
				{text}
			</span>
		</div>
	);
}
