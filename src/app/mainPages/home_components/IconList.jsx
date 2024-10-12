"use client";

import { useIcons } from "@/app/components/CustomIcons";
import React from "react";

export default function IconList() {
	const {
		LockIcon,
		FleetIcon,
		TrackingIcon,
		AlarmIcon,
		SecurityIcon,
		VideoIcon,
	} = useIcons();

	const listData = [
		{
			icon: LockIcon,
			header: "Auto Locksmiths",
			detail:
				"Reliable and efficient auto locksmith services for key replacement, programming, and repairs.",
		},
		{
			icon: TrackingIcon,
			header: "Tracking Services",
			detail:
				"Real-time vehicle tracking for enhanced security and visibility of your vehicles and assets.",
		},
		{
			icon: FleetIcon,
			header: "Fleet Management",
			detail:
				"Optimize fleet performance, reduce costs, and streamline operations with our comprehensive fleet management solutions.",
		},

		{
			icon: AlarmIcon,
			header: "Car Alarm Systems",
			detail:
				"Robust car alarm systems for advanced vehicle security against theft and unauthorized access.",
		},
		{
			icon: VideoIcon,
			header: "Dashcam Installation",
			detail:
				"Professional dashcam installation to enhance driver safety and capture crucial moments on the road.",
		},
		{
			icon: SecurityIcon,
			header: "Security Upgrades",
			detail:
				"Boost vehicle security with advanced upgrades: immobilizers, GPS tracking, anti-theft systems, enhancing protection and peace of mind.",
		},
	];

	return (
		<div className="min-h-screen w-full px-12 xl:px-40 bg-neutral-200">
			<div className="flex flex-col justify-center items-center gap-20">
				<div className="flex flex-col justify-center items-center gap-2">
					<h1 className="text-neutral-900 text-lg font-medium capitalize">
						Telematics Services by Autoronix
					</h1>
					<h1 className="text-darkYellow text-3xl font-bold">
						Enabling Digital Transformation Across Industries
					</h1>
				</div>

				<section className="grid grid-flow-row grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-start gap-8 gap-y-24">
					{listData.map(({ icon, header, detail }) => (
						<div className="w-44 flex flex-col justify-center items-center gap-2">
							<div className="text-darkYellow w-12">{icon}</div>
							<h1 className="font-semibold text-lg capitalize">{header}</h1>
							<p className="text-neutral-700 text-xs">{detail}</p>
						</div>
					))}
				</section>
			</div>
		</div>
	);
}
