import React from "react";
import { raj } from "@/app/ui/fonts";

export default function GenerateCard({ icons, data, size }) {
	let height =
		size === "sm"
			? "md:min-h-[20rem] lg:min-h-[20rem]"
			: size === "md"
			? "md:min-h-[30rem] lg:min-h-[30rem]"
			: "md:min-h-[30rem] lg:min-h-[35rem]";

	return data.map(({ header, text }, index) => (
		<div
			key={index}
			className={`px-6 py-6 md:py-8 rounded-xl bg-neutral-950/80 flex flex-col justify-center md:justify-start xl:justify-center items-start gap-4 w-[20rem] md:w-[20rem] lg:w-[25rem] xl:w-[25rem] ${height}`}
		>
			<div className="w-8 lg:w-12 text-mellow">{icons[index]}</div>
			<div
				className={`text-lg md:text-lg lg:text-2xl font-semibold text-mellow ${raj.className}`}
			>
				{header}
			</div>
			<div className="text-sm font-light md:text-base lg:text-lg text-neutral-200">
				{text}
			</div>
		</div>
	));
}
