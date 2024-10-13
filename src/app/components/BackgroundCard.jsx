import React from "react";

export default function BackgroundCard({ data, location }) {
	return (
		<div className="px-4 xl:px-48 w-full flex flex-col md:flex-row flex-shrink justify-evenly items-center pb-8 gap-6 md:gap-0">
			{data.map(({ header, text }, index) => {
				let count = index + 1;

				return (
					<div
						className="relative w-full md:w-[30%] h-[25rem] md:h-[25rem] lg:h-[30rem] bg-no-repeat bg-cover bg-center flex flex-col justify-end items-center rounded-xl"
						style={{
							backgroundImage: `url("/images/${location}/bg${count}.jpg")`,
							backdropFilter: "brightness 0.4",
						}}
					>
						<div className="absolute inset-0 bg-black opacity-65 rounded-xl"></div>

						<div className="w-full relative flex flex-col justify-stretch items-stretch gap-5 text-white min-h-36 md:min-h-44 lg:min-h-48 xl:min-h-48 backdrop-blur-sm px-2 pt-2">
							<h1 className="text-xl lg:text-2xl capitalize">{header}</h1>
							<p className="text-base md:text-[13px] lg:text-lg">{text}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
}
