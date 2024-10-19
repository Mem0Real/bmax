import React from "react";
import AltCards from "./components/home_components/AltCards";
import IconList from "./components/home_components/IconList";
import OurWork from "./components/home_components/OurWork";
import Map from "./components/home_components/Map";
import SayHello from "./components/home_components/SayHello";
import SlidingData from "./components/home_components/SlidingData";

export default function Home() {
	return (
		<div className="min-h-screen text-neutral-900 w-full">
			<div className="w-full flex flex-col justify-center items-center">
				{/* <SlidingData /> */}
				<AltCards />
				<IconList />
				<OurWork />
				<Map />
				<SayHello />
			</div>
		</div>
	);
}
