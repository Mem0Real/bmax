"use client";

import React, { useEffect, useState, Suspense } from "react";
import Home from "./Home";
import { Loader } from "@mantine/core";

export default function Landing() {
	// const [isHidden, setIsHidden] = useState(false);

	// useEffect(() => {
	// 	const storedHiddenState = localStorage.getItem("isDesktop");

	// 	if (storedHiddenState === "true") {
	// 		setIsHidden(true);
	// 		document.body.style.display = "none";
	// 	}
	// 	const handleKeyDown = (event) => {
	// 		if (event.ctrlKey && event.shiftKey && event.key === "K") {
	// 			const newHiddenState = !isHidden;
	// 			setIsHidden(newHiddenState);
	// 			document.body.style.display = newHiddenState ? "none" : "block";
	// 			// Save the new state to localStorage
	// 			localStorage.setItem("isDesktop", newHiddenState.toString());
	// 		}
	// 	};

	// 	window.addEventListener("keydown", handleKeyDown);
	// 	return () => {
	// 		window.removeEventListener("keydown", handleKeyDown);
	// 		document.body.style.display = "block";
	// 	};
	// }, [isHidden]);

	return (
		<div
			className={`bg-neutral-100 w-full flex flex-col justify-center items-center`}
		>
			<Suspense fallback={<Loader color="gray" size="lg" />}>
				<Home />
			</Suspense>
		</div>
	);
}
