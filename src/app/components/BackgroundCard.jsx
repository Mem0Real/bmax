import React from "react";

export default function BackgroundCard({
	header1,
	text1,
	header2,
	text2,
	header3,
	text3,
	src1,
	src2,
	src3,
}) {
	return (
		<div className="w-full flex flex-col md:flex-row flex-shrink justify-evenly items-center pb-8 gap-6 md:gap-0">
			<div
				className="w-full md:w-[30%] h-[25rem] md:h-[30rem] bg-no-repeat bg-cover bg-center flex flex-col justify-end items-center p-6 rounded-xl"
				style={{
					backgroundImage: `url("/images/${src1}")`,
					backdropFilter: "brightness 0.4",
				}}
			>
				<div className="flex flex-col gap-5 text-white min-h-12 md:min-h-44 lg:min-h-36 xl:min-h-32 backdrop-blur-sm backdrop-brightness-50 px-2">
					<h1 className="text-xl font-base text-darkYellow capitalize">
						{header1}
					</h1>
					<p className="font-medium">{text1}</p>
				</div>
			</div>
			<div
				className="w-full md:w-[30%] h-[25rem] md:h-[30rem] bg-no-repeat bg-cover bg-center flex flex-col justify-end items-center p-6 rounded-xl"
				style={{
					backgroundImage: `url("/images/${src2}")`,
				}}
			>
				<div className="flex flex-col gap-5 text-white min-h-24 md:min-h-44 lg:min-h-36 xl:min-h-32 backdrop-blur-sm backdrop-brightness-50 px-2">
					<h1 className="text-xl font-base text-darkYellow capitalize">
						{header2}
					</h1>
					<p className="font-medium">{text2}</p>
				</div>
			</div>
			<div
				className="w-full md:w-[30%] h-[25rem] md:h-[30rem] bg-no-repeat bg-cover bg-center flex flex-col justify-end items-center p-6 rounded-xl"
				style={{
					backgroundImage: `url("/images/${src3}")`,
				}}
			>
				<div className="flex flex-col gap-5 text-white min-h-24 md:min-h-44 lg:min-h-36 xl:min-h-32 backdrop-blur-sm backdrop-brightness-50 px-2">
					<h1 className="text-xl font-base text-darkYellow capitalize">
						{header3}
					</h1>
					<p className="font-medium">{text3}</p>
				</div>
			</div>
		</div>
	);
}
