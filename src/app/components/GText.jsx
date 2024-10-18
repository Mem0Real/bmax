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
	const videoRef = useRef(null);

	const { LeftArrowIcon, RightArrowIcon } = useIcons();

	// Function to reveal items (expand width to the left)
	const revealItems = () => {
		gsap.fromTo(
			textRefs.current,
			{ width: 0, opacity: 0, transformOrigin: "right" },
			{
				width: "auto",
				opacity: 1,
				duration: 0.5, // Faster animation
				stagger: 0.1,
				ease: "power2.out", // Eases up at the end
			}
		);
	};

	// Function to hide items (shrink width to the right)
	const hideItems = (onComplete) => {
		gsap.to(textRefs.current, {
			width: 0,
			opacity: 0,
			duration: 0.5, // Faster animation
			stagger: 0.1,
			transformOrigin: "right",
			ease: "power2.in", // Eases up at the end
			onComplete,
		});
	};

	// Function to handle video playback
	const playVideo = (index) => {
		videoRef.current.src = items[index].video; // Set video source
		videoRef.current.load(); // Load video
		videoRef.current.currentTime = 0; // Reset time to start
		videoRef.current.play(); // Play video
		gsap.to(videoRef.current, {
			opacity: 1,
			duration: 0.5,
		});
	};

	// Initial load animation
	useEffect(() => {
		if (isFirstLoad) {
			revealItems();
			playVideo(currentIndex);
			setIsFirstLoad(false);
		}
	}, [isFirstLoad]);

	// Update animation when the visible items change
	useEffect(() => {
		if (!isFirstLoad) {
			revealItems();
		}
	}, [visibleItems]);

	// Fade out the current video and change to the next one
	const changeVideo = (index) => {
		// Set the new video source and load it, but keep it hidden initially
		videoRef.current.src = items[index].video;
		videoRef.current.load();
		videoRef.current.currentTime = 0; // Reset time to the start
		videoRef.current.onloadeddata = () => {
			setIsVideoReady(true); // Mark the video as ready when data is loaded
			videoRef.current.play();
			gsap.to(videoRef.current, {
				opacity: 1,
				duration: 0.5,
			});
		};

		// Fade out the current video, and only fade in the new video if it's ready
		gsap.to(videoRef.current, {
			opacity: 0,
			duration: 0.5,
			onComplete: () => {
				if (isVideoReady) {
					videoRef.current.play(); // Play the new video
					gsap.to(videoRef.current, {
						opacity: 1,
						duration: 0.5,
					});
				}
			},
		});
	};

	// Handler for next button
	const handleNext = () => {
		hideItems(() => {
			const nextIndex = (currentIndex + 1) % items.length;
			setVisibleItems(items[nextIndex].components); // Get components from the next item
			setCurrentIndex(nextIndex);
			changeVideo(nextIndex);
			textRefs.current = [];
		});
		clearInterval(autoplayRef.current);
	};

	// Handler for the previous button
	const handlePrevious = () => {
		hideItems(() => {
			const prevIndex = (currentIndex - 1 + items.length) % items.length;
			setVisibleItems(items[prevIndex].components); // Get components from the previous item
			setCurrentIndex(prevIndex);
			changeVideo(prevIndex); // Change the video
			textRefs.current = [];
		});
		clearInterval(autoplayRef.current);
	};

	// Autoplay functionality
	useEffect(() => {
		autoplayRef.current = setInterval(handleNext, autoplayDuration);
		return () => clearInterval(autoplayRef.current);
	}, [currentIndex]);

	return (
		// <div className="w-full min-h-screen bg-slate-500 text-neutral-200 flex flex-col justify-center items-center">
		<div className="w-full min-h-screen text-neutral-200 flex flex-col justify-center items-center relative overflow-hidden">
			{/* Vid */}
			<video
				ref={videoRef}
				className="absolute top-0 left-0 w-full h-full object-cover opacity-1"
				muted
				loop
				preload="auto"
				playsInline
			>
				<source src={items[currentIndex].video} type="video/mp4" />
				Your browser does not support the video tag.
			</video>

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
