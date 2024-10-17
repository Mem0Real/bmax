"use client";

import React, { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitTextJS from "split-text-js";

gsap.registerPlugin(useGSAP);

export default function GsapSlide() {
	const container = useRef();
	const textWrapper = useRef();

	useGSAP(() => {
		const titles = gsap.utils.toArray("p");
		const tl = gsap.timeline({ repeat: -1 });

		titles.forEach((title) => {
			const splitTitle = new SplitTextJS(title);

			tl.from(
				splitTitle.chars,
				{
					opacity: 0,
				},
				"<"
			).to(
				splitTitle.chars,
				{
					opacity: 0,
				},
				"<1"
			);
			return {};
		});
	});
	return (
		<div
			ref={container}
			className="flex flex-col justify-center items-center min-h-screen w-full"
		>
			<div ref={textWrapper} className="text-7xl text-center leading-[0] m-0">
				<p>Car Key Services</p>
				<p>Fleet Management Operations</p>
				<p>Tracking and Telematics</p>
			</div>
		</div>
	);
}
