import React from "react";

import { raj } from "@/app/ui/fonts";

export default function BackgroundCard({ data, location, light }) {
	let opacity = light ? "opacity-40" : "opacity-60";
	let count = data.length;

	let width = count === 3 ? "md:w-[30%]" : "md:w-[22%]";

	return (
		<div className="px-4 xl:px-48 w-full flex flex-col md:flex-row flex-shrink justify-evenly items-center pb-8 gap-6 md:gap-0">
			{data?.map(({ header, text }, index) => {
				let count = index + 1;

				return (
					<div
						key={index}
						className={`relative w-full h-[25rem] md:h-[25rem] lg:h-[30rem] bg-no-repeat bg-cover bg-center flex flex-col justify-end items-center rounded-xl ${width}`}
						style={{
							backgroundImage: `url("/images/${location}/bg${count}.webp")`,
							backdropFilter: "brightness 0.4",
						}}
					>
						<div
							className={`absolute inset-0 bg-black rounded-xl ${opacity}`}
						></div>

						<div className="w-full relative flex flex-col justify-stretch items-stretch gap-5 text-white min-h-36 md:min-h-44 lg:min-h-48 xl:min-h-56 backdrop-blur-sm px-2 pt-2">
							<h1
								className={`text-xl lg:text-3xl capitalize font-semibold ${raj.className}`}
							>
								{header}
							</h1>
							<p className="text-base md:text-[13px] lg:text-base">{text}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
}
