"use client";

import { useIcons } from "@/app/components/CustomIcons";
import React from "react";

import { raj } from "@/app/ui/fonts";

export default function IconList() {
	const {
		NewKeyIcon,
		FleetIcon,
		TrackingIcon,
		AlarmIcon,
		SecurityIcon,
		VideoIcon,
	} = useIcons();

	const listData = [
		{
			icon: NewKeyIcon,
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
		<div className="relative min-h-screen w-full bg-neutral-100">
			<div
				className="bg-fixed w-full z-50 bg-cover bg-bottom bg-no-repeat backdrop-brightness-50 backdrop-blur-2xl"
				style={{
					backgroundImage: `url(/images/land.jpg)`,
				}}
			>
				<div className="bg-black/40 backdrop-blur-sm text-neutral-200 px-4 xl:px-40 py-5 xl:pb-36 ">
					<div className="flex flex-col justify-center items-center gap-20">
						<div className="flex flex-col justify-center items-center gap-2">
							<h1 className={`font-bold text-xl uppercase`}>
								Telematics Services by B-Max
							</h1>
							<h1
								className={`text-darkYellow text-5xl font-bold text-start md:text-center ${raj.className}`}
							>
								Enabling Digital Transformation Across Industries
							</h1>
						</div>

						<section className="grid grid-flow-row grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-start gap-8 gap-y-24">
							{listData.map(({ icon, header, detail }, index) => (
								<div
									key={index}
									className="xl:w-64 flex flex-col justify-center items-center gap-2"
								>
									<div className="text-darkYellow w-16">{icon}</div>
									<h1
										className={`font-semibold text-lg uppercase ${raj.className}`}
									>
										{header}
									</h1>
									<p className={`text-center text-base font-medium`}>
										{detail}
									</p>
								</div>
							))}
						</section>
					</div>
				</div>
			</div>
		</div>
	);
}
