"use client";

import React from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function GsapStagger() {
	useGSAP(() => {
		let animation = gsap.timeline({ repeat: -1 });
		let targets = document.querySelectorAll(".demo div");
		let numberOfTargets = targets.length;
		let duration = 0.5;
		let repeatDelay = duration * (numberOfTargets - 1);

		function init() {
			gsap.set(".demo", { autoAlpha: 1 });
			animation
				.from(targets, {
					x: 80,
					duration: duration,
					opacity: 0,
					stagger: {
						each: duration,
						repeat: -1,
						repeatDelay: repeatDelay,
					},
				})
				.to(
					targets,
					{
						x: -80,
						duration: duration,
						opacity: 0,
						stagger: {
							each: duration,
							repeat: -1,
							repeatDelay: repeatDelay,
						},
					},
					duration
				);
		}

		init();
	});
	return (
		<div className="demo leading-[0]">
			<div>75 Flavors</div>
			<div>36 Toppings</div>
			<div>25 Commemorative Bowls</div>
		</div>
	);
}
