import React from "react";

export default function BackgroundCard({
	// header1,
	// text1,
	// header2,
	// text2,
	// header3,
	// text3,
	data,
	location,
}) {
	return (
		<div className="px-4 xl:px-48 w-full flex flex-col md:flex-row flex-shrink justify-evenly items-center pb-8 gap-6 md:gap-0">
			{data.map(({ header, text }, index) => {
				let count = index + 1;

				return (
					<div
						className="w-full md:w-[30%] h-[25rem] md:h-[30rem] bg-no-repeat bg-cover bg-center flex flex-col justify-end items-center p-6 rounded-xl"
						style={{
							backgroundImage: `url("/images/${location}/bg${count}.jpg")`,
							backdropFilter: "brightness 0.4",
						}}
					>
						<div className="flex flex-col gap-5 text-white min-h-12 md:min-h-44 lg:min-h-36 xl:min-h-32 backdrop-blur-sm backdrop-brightness-50 px-2">
							<h1 className="text-xl font-base text-darkYellow capitalize">
								{header}
							</h1>
							<p className="font-medium">{text}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
}
