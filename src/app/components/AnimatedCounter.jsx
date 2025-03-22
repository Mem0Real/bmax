"use client";

import { animate, useInView, useIsomorphicLayoutEffect } from "framer-motion";
import React, { useRef } from "react";

export default function AnimatedCounter({ from, to, animationOptions }) {
	const ref = useRef();
	const inView = useInView(ref, { once: true });

	useIsomorphicLayoutEffect(() => {
		const el = ref.current;

		if (!el) return;
		if (!inView) return;

		el.textContent = String(from);

		const controls = animate(from, to, {
			duration: 1.5,
			ease: "easeOut",
			...animationOptions,
			onUpdate(value) {
				el.textContent = String(Number(value.toFixed(0)));
			},
		});

		return () => {
			controls.stop();
		};
	}, [ref, inView, from, to]);

	return <span ref={ref} />;
}
