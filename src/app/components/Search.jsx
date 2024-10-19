"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useState } from "react";
import { useIcons } from "./CustomIcons";
import Link from "next/link";
import { raj } from "@/app/ui/fonts";

const Search = ({ isVisible, toggleVisibility, linksData }) => {
	const [searchTerm, setSearchTerm] = useState("");

	const overlayRef = useRef(null);
	const circleRef = useRef(null);
	const searchRef = useRef(null);

	const { CloseIcon } = useIcons();

	const filteredLinks = linksData.filter(
		(link) =>
			searchTerm.length > 0 &&
			link.title.toLowerCase().includes(searchTerm.toLowerCase())
	);

	useEffect(() => {
		if (isVisible) {
			const buttonRect = document
				.querySelector(".search-button")
				.getBoundingClientRect();
			const buttonCenterX = buttonRect.left + buttonRect.width / 2;
			const buttonCenterY = buttonRect.top + buttonRect.height / 2;

			gsap
				.timeline()
				.set(circleRef.current, {
					x: buttonCenterX - window.innerWidth / 2,
					y: buttonCenterY - window.innerHeight / 2,
				})
				.set(overlayRef.current, { pointerEvents: "auto" })
				.to(circleRef.current, {
					duration: 0.6,
					scale: 15,
					transformOrigin: "center",
					ease: "power3.inOut",
				})
				.to(
					overlayRef.current,
					{
						duration: 0.5,
						opacity: 1,
						ease: "power3.inOut",
					},
					"-=0.3"
				);

			searchRef.current.focus();
		} else {
			gsap
				.timeline()
				.to(overlayRef.current, {
					duration: 0.5,
					opacity: 0,
					ease: "power3.inOut",
				})
				.set(overlayRef.current, { pointerEvents: "none" })
				.to(
					circleRef.current,
					{
						duration: 0.6,
						scale: 0,
						transformOrigin: "center",
						ease: "power3.inOut",
					},
					"-=0.3"
				);
		}
	}, [isVisible]);

	// Close overlay when clicked outside
	const handleClickOutside = (event) => {
		if (overlayRef.current && !overlayRef.current.contains(event.target)) {
			toggleVisibility();
		}
	};

	useEffect(() => {
		if (isVisible) {
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isVisible]);

	return (
		<div>
			<svg
				ref={circleRef}
				width="400"
				height="400"
				viewBox="0 0 100 100"
				style={{
					position: "fixed",
					top: "14rem",
					right: "10rem",
					transform: "scale(0)",
					zIndex: 900,
					pointerEvents: "none",
				}}
			>
				<circle cx="50" cy="50" r="50" fill="rgba(0, 0, 0, 0.8)" />
			</svg>
			<div
				ref={overlayRef}
				onClick={toggleVisibility}
				style={{
					position: "fixed",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					background: "rgba(0, 0, 0, 0.8)",
					opacity: 0,
					zIndex: 1000,
					padding: "20px",
					boxSizing: "border-box",
					pointerEvents: "none",
				}}
			>
				<div className="relative w-full md:w-2/3 lg:w-1/2 mr-auto md:mx-auto">
					<button
						onClick={(e) => {
							e.stopPropagation();
							toggleVisibility();
						}}
						className="focus absolute top-[10px] right-5 text-red-500 w-6 z-10"
					>
						{CloseIcon}
					</button>
					<input
						ref={searchRef}
						type="text"
						placeholder="Search..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className={`w-full block p-2 px-6 mt-4 text-lg rounded-lg ${raj.className}`}
						onClick={(e) => e.stopPropagation()}
					/>
				</div>
				<ul className="mt-8 flex flex-col justify-center items-start md:items-start md:ps-[20%] lg:ps-[28%] gap-3">
					{filteredLinks.length > 0
						? filteredLinks.map((link, index) => (
								<Link
									key={index}
									href={link.address}
									className={`text-mellow list-disc text-lg ${raj.className}`}
								>
									{link.title}
								</Link>
						  ))
						: searchTerm.length > 0 && (
								<li className="text-white text-lg">No results found</li>
						  )}
				</ul>
			</div>
		</div>
	);
};

export default Search;
