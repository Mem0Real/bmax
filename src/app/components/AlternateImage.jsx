import React from "react";
import Image from "next/image";

export default function AlternateImage({ img }) {
	return (
		<div className=" lg:basis-1/2 relative w-full h-[20rem] md:h-[25rem] lg:h-[30rem]">
			<Image
				src={`/images/${img}`}
				fill
				className="object-contain object-center absolute"
				alt={img}
			/>
		</div>
	);
}
