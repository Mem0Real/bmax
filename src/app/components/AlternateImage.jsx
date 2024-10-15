import React from "react";
import Image from "next/image";

export default function AlternateImage({ img, sm }) {
	let size = sm
		? " h-[15rem] md:h-[25rem] lg:h-[30rem]"
		: " h-[20rem] md:h-[25rem] lg:h-[30rem]";
	return (
		<div
			className={`order-first md:order-none md:basis-1/2 relative w-full ${size}`}
		>
			<Image
				src={`/images/${img}`}
				fill
				className="object-fill md:object-contain object-center absolute"
				alt={img}
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
			/>
		</div>
	);
}
