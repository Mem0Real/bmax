"use client";

import { useEffect, useState } from "react";
import {
	motion,
	useScroll,
	useSpring,
	useAnimationControls,
} from "framer-motion";

import { useIcons } from "./CustomIcons";

export default function ScrollToTopBottomButton({ children }) {
	const [scrollDirection, setScrollDirection] = useState("up");

	const isBrowser = () => typeof window !== "undefined";

	const { scrollYProgress } = useScroll();
	const controls = useAnimationControls();

	// Smooth scroll value with spring animation
	const smoothScrollY = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 20,
		mass: 1,
	});

	function scrollTo() {
		if (!isBrowser) return;
		if (scrollDirection === "up") {
			window.scrollTo({ top: 0, behavior: "smooth" });
		} else {
			window.scrollTo({
				top: document.documentElement.scrollHeight,
				behavior: "smooth",
			});
		}

		// Fade out the button after scrolling
		controls.start("hide");
	}

	useEffect(() => {
		let lastValue = 0;

		// Detect scroll direction using smooth scroll value
		const unsubscribe = smoothScrollY.on("change", (currentValue) => {
			if (currentValue > lastValue) {
				setScrollDirection("down");
			} else {
				setScrollDirection("up");
			}
			lastValue = currentValue;

			// Show or hide the button based on the scroll progress
			if (currentValue > 0.02) {
				controls.start("show");
			} else {
				controls.start("hide");
			}
		});

		return () => unsubscribe();
	}, [smoothScrollY, controls]);

	const { TopCircleIcon } = useIcons();

	// Animation variants for showing/hiding the button
	const scrollVariants = {
		hide: {
			opacity: 0,
			scale: 0.8,
			transition: { duration: 0.5, ease: "easeOut" },
		},
		show: {
			opacity: 1,
			scale: 1,
			transition: { duration: 0.5, ease: "easeOut" },
		},
		up: { rotate: 0, transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] } },
		down: {
			rotate: 180,
			transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] },
		},
	};

	return (
		<>
			{children}
			<div className="relative bg-neutral-100">
				<motion.button
					className={`fixed bottom-5 right-4 text-mellow text-xl transition-all ease-in-out duration-200 z-20 w-10`}
					variants={scrollVariants}
					initial="hide"
					animate={controls}
					onClick={scrollTo}
					whileInView={scrollDirection === "down" ? "down" : "up"}
				>
					{TopCircleIcon}
				</motion.button>
			</div>
		</>
	);
}
