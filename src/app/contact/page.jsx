import React from "react";
import Map from "../components/home_components/Map";
import SayHello from "../components/home_components/SayHello";

export default function Contact() {
	return (
		<div className="min-h-[90vh] my-auto flex flex-col justify-center items-center text-neutral-950 bg-white gap-10 md:gap-12 lg:gap-16 w-full">
			<Map />
			<SayHello />
		</div>
	);
}
