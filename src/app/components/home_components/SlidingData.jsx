import React from "react";
import Link from "next/link";

import { raj } from "@/app/ui/fonts";

import GText from "../GText";

const BigText = ({ children }) => (
	<div
		className={`text-4xl md:text-6xl lg:text-8xl font-bold mb-4 bg-neutral-200 text-neutral-900 w-fit ${raj.className}`}
	>
		{children}
	</div>
);

const BottomLink = ({ href, children }) => (
	<Link
		href={href}
		className={`bg-neutral-900 text-neutral-200 px-4 py-2 rounded-md mt-6 inline-block`}
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
				View more
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
				View more
			</BottomLink>,
		],
	},
	{
		// video: "/vids/3.mp4",
		image: "/images/slide.jpg",
		components: [
			<BigText key="1">Tracking &</BigText>,
			<BigText key="2">Telematics</BigText>,
			<BottomLink key="3" href="/video-telematics">
				View more
			</BottomLink>,
		],
	},
];

export default async function SlidingData() {
	return <GText items={items} />;
}
