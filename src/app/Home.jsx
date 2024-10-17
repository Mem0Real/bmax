import React from "react";
import VidSlide from "./components/home_components/VidSlide";
import AltCards from "./components/home_components/AltCards";
import IconList from "./components/home_components/IconList";
import OurWork from "./components/home_components/OurWork";
import News from "./components/home_components/News";
import Map from "./components/home_components/Map";
import SayHello from "./components/home_components/SayHello";

export default function Home() {
	return (
		<div className="min-h-screen text-neutral-900 w-full">
			<div className="w-full flex flex-col justify-center items-center">
				<VidSlide />
				<AltCards />
				<IconList />
				<OurWork />
				{/* <News /> */}
				<Map />
				<SayHello />
			</div>
		</div>
	);
}
