"use client";

import React from "react";

export default function Alternating({ children, extrude }) {
	return (
		<div
			className={`px-4 xl:px-48 w-full flex flex-col md:flex-row justify-center ${
				extrude ? "items-center" : "items-center"
			} gap-8 md:gap-3 lg:gap-4 pb-8`}
		>
			{children}
		</div>
	);
}
