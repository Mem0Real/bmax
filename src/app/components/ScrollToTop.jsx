"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useAnimationControls } from "framer-motion";

import { useIcons } from "./CustomIcons";

export default function ScrollToTopButton({ children }) {
	const [lift, setLift] = useState(false);

	const isBrowser = () => typeof window !== "undefined";

	function scrollToTop() {
		if (!isBrowser) return;
		window.scrollTo({ top: 0, behavior: "smooth" });
	}
	const { scrollYProgress } = useScroll();
	const controls = useAnimationControls();

	useEffect(() => {
		return scrollYProgress.on("change", (latestValue) => {
			if (latestValue > 0.02) {
				controls.start("show");
				if (latestValue >= 0.95) {
					setLift(true);
				} else setLift(false);
			} else {
				controls.start("hide");
			}
		});
	});

	const { TopArrowIcon } = useIcons();

	const scrollVariants = {
		hide: { opacity: 0, transition: { duration: 0.3 } },
		show: { opacity: 1, transition: { duration: 0.3 } },
	};

	return (
		<>
			{children}
			<div className="relative">
				<motion.button
					className={`fixed ${
						lift ? "bottom-12" : "bottom-0"
					} right-0 p-5 text-blue-700 dark:text-blue-500 text-5xl transition-all ease-in-out duration-200 z-20`}
					variants={scrollVariants}
					initial="hide"
					animate={controls}
					onClick={scrollToTop}
				>
					{TopArrowIcon}
				</motion.button>
			</div>
		</>
	);
}
