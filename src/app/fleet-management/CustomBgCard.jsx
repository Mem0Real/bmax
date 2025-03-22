import React from "react";

import { raj } from "@/app/ui/fonts";

export default function CustomBgCard({ data, location }) {
	return (
		<div className="px-4 xl:px-48 w-full flex flex-col md:flex-row flex-shrink justify-evenly items-center pb-8 gap-6 md:gap-0">
			{data.map(({ header, text }, index) => {
				let count = index + 1;

				return (
					<div
						key={index}
						className={`relative w-full md:w-[20rem] h-[30rem] md:h-[40rem] bg-no-repeat bg-cover bg-center flex flex-col justify-end items-center p-6`}
						style={{
							backgroundImage: `url("/images/${location}/bg${count}.webp")`,
						}}
					>
						<div className="absolute inset-0 bg-black opacity-65"></div>

						<div className="relative flex flex-col gap-5 text-white min-h-28 md:min-h-60 lg:min-h-44 xl:min-h-48">
							<h1 className={`text-4xl font-bold capitalize ${raj.className}`}>
								{header}
							</h1>
							<p className={`font-medium text-base`}>{text}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
}
