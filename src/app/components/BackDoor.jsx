"use client";

import React, { useEffect, useState } from "react";

export default function BackDoor({ children }) {
	const [isHidden, setIsHidden] = useState(false);

	useEffect(() => {
		const storedHiddenState = localStorage.getItem("isDesktop");

		if (storedHiddenState === "true") {
			setIsHidden(true);
			document.body.style.display = "none";
		}
		const handleKeyDown = (event) => {
			if (event.ctrlKey && event.shiftKey && event.key === "K") {
				const newHiddenState = !isHidden;
				setIsHidden(newHiddenState);
				document.body.style.display = newHiddenState ? "none" : "block";
				// Save the new state to localStorage
				localStorage.setItem("isDesktop", newHiddenState.toString());
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			document.body.style.display = "block";
		};
	}, [isHidden]);

	return <div className={isHidden ? "hidden" : ""}>{children}</div>;
}
