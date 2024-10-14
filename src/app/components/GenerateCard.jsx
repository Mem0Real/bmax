import React from "react";

export default function GenerateCard({ icons, data, small }) {
	let size = small
		? "md:max-w-[20rem] lg:max-w-[25rem] xl:max-w-[30rem] md:min-h-[25rem] lg:min-h-[25rem]"
		: "md:max-w-[20rem] lg:max-w-[25rem] xl:max-w-[30rem] md:min-h-[30rem] lg:min-h-[35rem]";
	return data.map(({ header, text }, index) => (
		<div
			key={index}
			className={`px-6 py-6 md:py-12 rounded-xl bg-neutral-950/80 flex flex-col justify-center md:justify-start xl:justify-center items-start gap-4 ${size}`}
		>
			<div className="w-8 lg:w-12 text-mellow">{icons[index]}</div>
			<div className="text-sm md:text-lg lg:text-2xl font-medium text-mellow">
				{header}
			</div>
			<div className="text-sm font-light md:font-normal  md:text-base lg:text-lg text-neutral-200">
				{text}
			</div>
		</div>
	));
}
