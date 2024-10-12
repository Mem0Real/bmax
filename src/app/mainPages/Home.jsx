import React from "react";
import VidSlide from "./home_components/VidSlide";
import AltCards from "./home_components/AltCards";
import IconList from "./home_components/IconList";
import OurWork from "./home_components/OurWork";
import News from "./home_components/News";
import Blackard from "./home_components/Blackard";
import Map from "./home_components/Map";
import SayHello from "./home_components/SayHello";

export default function Home() {
	return (
		<div className="min-h-screen text-neutral-900 w-full">
			<div className="flex flex-col justify-center items-center">
				{/* <VidSlide /> */}
				<AltCards />
				<IconList />
				<OurWork />
				<News />
				<Blackard />
				<Map />
				<SayHello />
			</div>
		</div>
	);
}
