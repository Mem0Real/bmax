import React from "react";
import Link from "next/link";

import GText from "../GText";

const BigText = ({ children }) => (
	<div className="text-6xl font-bold mb-4 bg-neutral-200 text-neutral-900">
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

const items = [
	[
		<BigText key="1">Car Key</BigText>,
		<BigText key="2">Services</BigText>,
		<BottomLink key="3" href="/key-replacement">
			View more_
		</BottomLink>,
	],
	[
		<BigText key="1">Fleet Management</BigText>,
		<BigText key="2">Operations</BigText>,
		<BottomLink key="3" href="/fleet-management">
			View more_
		</BottomLink>,
	],
	[
		<BigText key="1">Tracking &</BigText>,
		<BigText key="2">Telematics</BigText>,
		<BottomLink key="3" href="/video-telematics">
			View more_
		</BottomLink>,
	],
];
export default function SlidingData() {
	return <GText items={items} />;
}
