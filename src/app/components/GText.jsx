"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useIcons } from "./CustomIcons";

export default function GText({ items, autoplayDuration = 5000 }) {
	const [visibleItems, setVisibleItems] = useState(items[0].components);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isFirstLoad, setIsFirstLoad] = useState(true);
	const [isVideoReady, setIsVideoReady] = useState(false);

	const textRefs = useRef([]);
	const autoplayRef = useRef(null);
	const videoRefs = useRef([]);

	const { LeftArrowIcon, RightArrowIcon } = useIcons();
	const revealItems = () => {
		gsap.fromTo(
			textRefs.current,
			{ width: 0, opacity: 0, transformOrigin: "right" },
			{
				width: "auto",
				opacity: 1,
				duration: 0.5,
				stagger: 0.1,
				ease: "power4.out",
			}
		);
	};

	const hideItems = (onComplete) => {
		gsap.to(textRefs.current, {
			width: 0,
			opacity: 0,
			duration: 0.5,
			stagger: 0.1,
			transformOrigin: "right",
			ease: "power4.in",
			onComplete,
		});
	};

	const changeVideo = (index) => {
		const currentVideo = videoRefs.current[currentIndex];
		const nextVideo = videoRefs.current[index];

		// Fade out the current video and pause it
		gsap.to(currentVideo, {
			opacity: 0,
			duration: 0.5,
			onComplete: () => {
				currentVideo.pause();
				currentVideo.currentTime = 0; // Reset current time
			},
		});

		// Fade in the next video and play it
		gsap.to(nextVideo, {
			opacity: 1,
			duration: 0.5,
			onStart: () => {
				nextVideo.play(); // Play the next video when starting the fade in
			},
		});
	};

	const handleNext = () => {
		hideItems(() => {
			const nextIndex = (currentIndex + 1) % items.length;
			setVisibleItems(items[nextIndex].components);
			setCurrentIndex(nextIndex);
			changeVideo(nextIndex);
			clearInterval(autoplayRef.current);
		});
	};

	const handlePrevious = () => {
		hideItems(() => {
			const prevIndex = (currentIndex - 1 + items.length) % items.length;
			setVisibleItems(items[prevIndex].components);
			setCurrentIndex(prevIndex);
			changeVideo(prevIndex);
			clearInterval(autoplayRef.current);
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

	// Autoplay functionality
	useEffect(() => {
		// Start playing the first video on mount
		videoRefs.current[currentIndex]?.play();

		const autoplayVideos = () => {
			handleNext(); // Call next video when the interval elapses
		};

		autoplayRef.current = setInterval(autoplayVideos, autoplayDuration);
		return () => clearInterval(autoplayRef.current);
	}, [currentIndex, autoplayDuration]);

	return (
		// <div className="w-full min-h-screen bg-slate-500 text-neutral-200 flex flex-col justify-center items-center">
		<div className="w-full min-h-screen bg-neutral-900/90 text-neutral-200 flex flex-col justify-center items-center relative overflow-hidden">
			{/* Vid */}
			{items.map((item, index) => (
				<video
					key={index}
					ref={(el) => (videoRefs.current[index] = el)}
					className={`absolute top-0 left-0 w-full h-full object-cover opacity-0 ${
						index === currentIndex ? "opacity-100" : ""
					}`} // Set initial opacity based on currentIndex
					muted
					loop
					preload="auto"
				>
					<source src={item.video} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			))}

			{/* Text */}
			<div className="z-10 whitespace-nowrap">
				{visibleItems.map((item, index) => {
					return (
						<div
							key={index}
							ref={(el) => (textRefs.current[index] = el)}
							className="text-item"
						>
							{item}
						</div>
					);
				})}
			</div>
			{/* Buttons */}
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
	);
}
