import React from "react";
import Image from "next/image";

export default function AlternateImage({ img, sm }) {
	let size = sm
		? "h-[10rem] md:h-[25rem] lg:h-[20rem]"
		: "h-[20rem] md:h-[25rem] lg:h-[30rem]";

	return (
		// <div
		// 	className={`order-first md:order-none md:basis-1/2  ${
		// 		sm && "w-[60%] xl:basis-1/3"
		// 	} w-full relative mx-auto ${size}`}
		// >
		// 	<Image
		// 		src={`/images/${img}`}
		// 		fill
		// 		className={`object-contain object-center absolute inset-0 ${
		// 			sm
		// 				? "py-2 xl:py-8 bg-lighterMellow/70 rounded-xl"
		// 				: "py-1 bg-lighterMellow/70 rounded-xl"
		// 		}`}
		// 		alt={img}
		// 		sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
		// 	/>
		// </div>

		<div className="self-center md:self-start order-first md:order-none md:basis-1/2 flex justify-center items-center">
			<div className="relative w-72 md:w-[20rem] lg:w-[30rem] h-72 md:h-[20rem] lg:h-[30rem] bg-lighterMellow/80 rounded-3xl">
				<Image
					src={`/images/${img}`}
					fill
					className="object-cover object-center absolute inset-0 p-4 rounded-[3rem] "
					alt={img}
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
			</div>
		</div>
	);
}
