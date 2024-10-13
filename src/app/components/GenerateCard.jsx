import React from "react";

export default function GenerateCard({ icons, data }) {
	return data.map(({ header, text }, index) => (
		<div
			key={index}
			className="px-6 py-12 rounded-xl bg-neutral-950/80 flex flex-col justify-start items-start max-w-[30rem] gap-4"
		>
			<div className="w-12 text-mellow">{icons[++index]}</div>
			<div className="text-2xl font-medium text-mellow">{header}</div>
			<div className="text-lg text-neutral-200">{text}</div>
		</div>
	));
}
