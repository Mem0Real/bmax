import React, { Suspense } from "react";
import AltCards from "./components/home_components/AltCards";
import IconList from "./components/home_components/IconList";
import OurWork from "./components/home_components/OurWork";
import Map from "./components/home_components/Map";
import SayHello from "./components/home_components/SayHello";
import SlidingData from "./components/home_components/SlidingData";
import VidLoader from "./components/loaders/VidLoader";

export default function Home() {
	return (
		<div className="relative min-h-screen text-neutral-900 w-full">
			<div className="w-full flex flex-col justify-center items-center">
				<Suspense fallback={<VidLoader />}>
					<SlidingData />
				</Suspense>
				<Suspense fallback={<div>Loading....</div>}>
					<AltCards />
				</Suspense>
				<Suspense fallback={<div>Loading....</div>}>
					<IconList />
				</Suspense>
				<Suspense fallback={<div>Loading....</div>}>
					<OurWork />
				</Suspense>
				<Suspense fallback={<div>Loading....</div>}>
					<Map />
				</Suspense>
				<Suspense fallback={<div>Loading....</div>}>
					<SayHello />
				</Suspense>
			</div>
		</div>
	);
}
