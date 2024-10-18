import React from "react";
import Link from "next/link";

import GText from "../GText";

const BigText = ({ children }) => (
	<div className="text-6xl font-bold mb-4 bg-neutral-200 text-neutral-900 w-fit">
		{children}
	</div>
);

const BottomLink = ({ href, children }) => (
	<Link
		href={href}
		className="bg-neutral-900 text-neutral-200 px-4 py-2 rounded-md mt-6 inline-block"
	>
		{children}
	</Link>
);

const Video = ({ src, type }) => {
	return (
		<div className="relative">
			<video
				width="98vw"
				height="90vh"
				preload="auto"
				autoPlay
				loop
				muted
				playsInline
				className="absolute inset-0 w-screen h-screen"
			>
				<source src={src} type={`video/${type}`} />
			</video>
		</div>
	);
};
// const items = [
// 	[
// 		<Video key="0" src="/vids/1.mp4" type="mp4" />,
// 		<BigText key="1">Car Key</BigText>,
// 		<BigText key="2">Services</BigText>,
// 		<BottomLink key="3" href="/key-replacement">
// 			View more_
// 		</BottomLink>,
// 	],
// 	[
// 		<Video key="0" src="/vids/2.mp4" type="mp4" />,
// 		<BigText key="1">Fleet</BigText>,
// 		<BigText key="2">Management</BigText>,
// 		<BigText key="3">Operations</BigText>,
// 		<BottomLink key="3" href="/fleet-management">
// 			View more_
// 		</BottomLink>,
// 	],
// 	[
// 		<Video key="0" src="/vids/3.mp4" type="mp4" />,
// 		<BigText key="1">Tracking &</BigText>,
// 		<BigText key="2">Telematics</BigText>,
// 		<BottomLink key="3" href="/video-telematics">
// 			View more_
// 		</BottomLink>,
// 	],
// ];
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
