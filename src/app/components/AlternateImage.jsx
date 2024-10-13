import React from "react";
import Image from "next/image";

export default function AlternateImage({ img }) {
	return (
		<div className="order-first md:order-none md:basis-1/2 relative w-full h-[20rem] md:h-[25rem] lg:h-[30rem]">
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
