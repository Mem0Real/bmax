import React from "react";
import Link from "next/link";

import { Rajdhani, Raleway } from "next/font/google";

import GText from "../GText";

const raj = Rajdhani({
	weight: ["300", "400", "500", "700"],
	style: ["normal"],
	subsets: ["latin"],
});

const raleway = Raleway({
	weight: ["300", "400", "500", "700"],
	style: ["normal"],
	subsets: ["latin"],
});

const BigText = ({ children }) => (
	<div
		className={`text-4xl md:text-6xl lg:text-8xl font-bold mb-4 bg-neutral-200 text-neutral-900 w-fit ${raleway.className}`}
	>
		{children}
	</div>
);

const BottomLink = ({ href, children }) => (
	<Link
		href={href}
		className={`bg-neutral-900 text-neutral-200 px-4 py-2 rounded-md mt-6 inline-block ${raj.className}`}
	>
		{children}
	</Link>
);
const items = [
	{
		video: "/vids/1.mp4",
		components: [
			<BigText key="1">Car Key</BigText>,
			<BigText key="2">Services</BigText>,
			<BottomLink key="3" href="/key-replacement">
				View more_
			</BottomLink>,
		],
	},
	{
		video: "/vids/2.mp4",
		components: [
			<BigText key="1">Fleet</BigText>,
			<BigText key="2">Management</BigText>,
			<BigText key="3">Operations</BigText>,
			<BottomLink key="4" href="/fleet-management">
				View more_
			</BottomLink>,
		],
	},
	{
		video: "/vids/3.mp4",
		components: [
			<BigText key="1">Tracking &</BigText>,
			<BigText key="2">Telematics</BigText>,
			<BottomLink key="3" href="/video-telematics">
				View more_
			</BottomLink>,
		],
	},
];

export default function SlidingData() {
	return <GText items={items} />;
}
