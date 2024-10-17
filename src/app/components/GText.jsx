"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useIcons } from "./CustomIcons";

export default function GText({ items }) {
	const textRefs = useRef([]);
	const [visibleItems, setVisibleItems] = useState(items[0]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isFirstLoad, setIsFirstLoad] = useState(true);

	const { LeftArrowIcon, RightArrowIcon } = useIcons();

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

	// Initial load animation
	useEffect(() => {
		if (isFirstLoad) {
			revealItems();
			setIsFirstLoad(false);
		}
	}, [isFirstLoad]);

	// Update animation when the visible items change
	useEffect(() => {
		if (!isFirstLoad) {
			revealItems();
		}
	}, [visibleItems]);

	// Handler for next button
	const handleNext = () => {
		hideItems(() => {
			const nextIndex = (currentIndex + 1) % items.length;
			setVisibleItems(items[nextIndex]);
			setCurrentIndex(nextIndex);

			// Clear references to prepare for the next set of items
			textRefs.current = [];
		});
	};

	// Handler for the previous button
	const handlePrevious = () => {
		hideItems(() => {
			const prevIndex = (currentIndex - 1 + items.length) % items.length;
			setVisibleItems(items[prevIndex]);
			setCurrentIndex(prevIndex);
			textRefs.current = [];
		});
	};

	return (
		<>
			<div className="relative w-full min-h-screen bg-slate-500 text-neutral-200 flex flex-col justify-center items-center">
				{visibleItems.map((item, index) => (
					<div
						key={index}
						ref={(el) => (textRefs.current[index] = el)}
						className="text-item"
					>
						{item}
					</div>
				))}
				{/* <button onClick={handleNext}>Next</button> */}
				<div className="absolute inset-0 flex justify-between items-center px-24 w-full">
					<button
						onClick={() => handlePrevious()}
						className="text-blue-400 w-8 h-12 bg-neutral-300 rounded-full"
					>
						{LeftArrowIcon}
					</button>
					<button
						onClick={() => handleNext()}
						className="text-blue-400 w-8 h-12 bg-neutral-300 rounded-full"
					>
						{RightArrowIcon}
					</button>
				</div>
			</div>
		</>
	);
}
