"use client";

import React, { useRef } from "react";
import gsap from "gsap";

import TextPlugin from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, TextPlugin);

export default function GsapText() {
	const myRef = useRef();

	useGSAP(() => {
		let tl = gsap.timeline();

		tl.fromTo("p", { width: 0 }, { width: "100%", duration: 2, delay: 1 });
	});
	return (
		<div
			ref={myRef}
			className="min-h-screen flex flex-col justify-center items-center w-full"
		>
			<div className="m-0 leading-[0] overflow-hidden">
				<p className="bg-blue-400 text-lg text-center">GsapText</p>
			</div>
		</div>
	);
}
