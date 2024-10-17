"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function GText({ items }) {
	const textRefs = useRef([]);
	const [visibleItems, setVisibleItems] = useState(items);
	const [currentIndex, setCurrentIndex] = useState(0);

	// Function to reveal items
	const revealItems = () => {
		gsap.fromTo(
			textRefs.current,
			{ xPercent: -100, opacity: 0 },
			{
				xPercent: 0,
				opacity: 1,
				duration: 1,
				stagger: 0.2,
				ease: "power2.out",
			}
		);
	};
	// Function to hide items
	const hideItems = (onComplete) => {
		gsap.to(textRefs.current, {
			xPercent: 100,
			opacity: 0,
			duration: 1,
			stagger: 0.2,
			ease: "power2.in",
			onComplete,
		});
	};
	// Update animation on component mount
	useEffect(() => {
		revealItems();
	}, [visibleItems]);

	// Handler for next button
	const handleNext = () => {
		hideItems(() => {
			const nextIndex = (currentIndex + 1) % items.length;
			setVisibleItems(items[nextIndex]);
			setCurrentIndex(nextIndex);
		});
	};
	return (
		<div className="text-container">
			{visibleItems.map((item, index) => (
				<div
					key={index}
					ref={(el) => (textRefs.current[index] = el)}
					className="text-item"
				>
					{item}
				</div>
			))}
			<button onClick={handleNext}>Next</button>
		</div>
	);
}
